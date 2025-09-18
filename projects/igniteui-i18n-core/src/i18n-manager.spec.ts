import { ActionStripResourceStringsBG, ActionStripResourceStringsES } from 'igniteui-i18n-resources';
import { beforeEach, describe, expect, it } from 'vitest';
import { ActionStripResourceStringsEN } from './i18n/EN/action-strip-resources.js';
import type { IResourceChangeEventArgs } from './i18n-manager.interfaces.js';
import {
    getCurrentI18n,
    getCurrentResourceStrings, 
    getI18nManager,
    I18nManager,
    registerI18n,
    setCurrentI18n
} from './i18n-manager.js';
import { wait } from './utils.js';

describe('i18n tests', () => {
    let manager: I18nManager;
    beforeEach(() => {
        // Create separate manage for each tests, so it's state is reset for each test.
        manager = new I18nManager();
    });

    describe('public api', () => {
        it('should initialize correct instance of manager', () => {
            const publicManager = getI18nManager();
            expect(publicManager?.currentLocale).equal('en-US');

            //For empty resources returns {}
            expect(JSON.stringify(getCurrentResourceStrings())).equals(JSON.stringify({}));
        });

        it('should set correct locale', () => {
            expect(getCurrentI18n()).toEqual('en-US');

            setCurrentI18n('bg');
            expect(getCurrentI18n()).toEqual('bg');
        });

        it('should register and return correct resource strings', () => {
            registerI18n(ActionStripResourceStringsEN, 'en-US');

            const resources = getCurrentResourceStrings();
            expect(Object.keys(resources).length).equals(1);
            expect(resources.action_strip_button_more_title).equals('More');
        });
    });

    describe('base', () => {
        it('should correctly detect lang attribute set', async () => {
            document.documentElement.setAttribute('lang', 'bg');
            await wait();

            expect(manager.currentLocale).toEqual('bg');
            // Cleanup dom, since its the same for all tests
            document.documentElement.removeAttribute('lang');
        });

        it('should change current locale correctly', () => {
            expect(manager.currentLocale).equal('en-US');

            manager.setCurrentI18n('bg');
            expect(manager.currentLocale).equal('bg');
        });

        it('should register new resource string to default locale', () => {
            manager.registerI18n(ActionStripResourceStringsEN, manager.defaultLocale);

            const resources = manager.getCurrentResourceStrings();
            expect(manager.currentLocale).equals('en-US');
            expect(Object.keys(resources).length).equals(1);
            expect(resources.action_strip_button_more_title).equals('More');
        });

        it('should override old resource string to currentLocale locale', () => {
            manager.registerI18n(ActionStripResourceStringsEN, manager.currentLocale);
            manager.registerI18n(ActionStripResourceStringsBG, manager.currentLocale);

            const resources = manager.getCurrentResourceStrings();
            expect(manager.currentLocale).equal('en-US');
            expect(Object.keys(resources).length).equal(1);
            expect(resources.action_strip_button_more_title).equal('Още');
        });

        it('should return empty when registering for changed current locale and default locale is not defined', () => {
            manager.setCurrentI18n('bg');
            manager.registerI18n(ActionStripResourceStringsEN, manager.currentLocale);

            let resources = manager.getCurrentResourceStrings();
            expect(manager.currentLocale).equal('bg');
            expect(Object.keys(resources).length).equal(1);
            expect(resources.action_strip_button_more_title).equal('More');

            manager.setCurrentI18n('en-US');
            resources = manager.getCurrentResourceStrings();
            expect(manager.currentLocale).equal('en-US');
            expect(Object.keys(resources).length).equal(0);
        });

        it('should return correct resource when registering for specified locale provided and the current locale is changed to it', () => {
            manager.registerI18n(ActionStripResourceStringsBG, 'bg');

            let resources = manager.getCurrentResourceStrings();
            expect(manager.currentLocale).equal('en-US');
            expect(Object.keys(resources).length).equal(0);

            manager.setCurrentI18n('bg');
            resources = manager.getCurrentResourceStrings();
            expect(Object.keys(resources).length).equal(1);
            expect(resources.action_strip_button_more_title).equal('Още');
        });

        it('should return default resource if current one are not available', () => {
            manager.registerI18n(ActionStripResourceStringsEN, manager.defaultLocale);
            manager.setCurrentI18n('bg');

            let resources = manager.getCurrentResourceStrings();
            expect(Object.keys(resources).length).equal(1);
            expect(resources.action_strip_button_more_title).equal('More');

            manager.registerI18n(ActionStripResourceStringsBG, 'bg');
            resources = manager.getCurrentResourceStrings();
            expect(Object.keys(resources).length).equal(1);
            expect(resources.action_strip_button_more_title).equal('Още');
        });

        it('should return same resources for same language but with different locale', () => {
            manager.registerI18n(ActionStripResourceStringsES, 'es-ES');

            manager.setCurrentI18n('es-AR');
            let resources = manager.getCurrentResourceStrings();
            expect(Object.keys(resources).length).equal(1);
            expect(resources.action_strip_button_more_title).equal('Más');

            manager.setCurrentI18n('es-ES');
            resources = manager.getCurrentResourceStrings();
            expect(Object.keys(resources).length).equal(1);
            expect(resources.action_strip_button_more_title).equal('Más');

            manager.setCurrentI18n('es');
            resources = manager.getCurrentResourceStrings();
            expect(Object.keys(resources).length).equal(1);
            expect(resources.action_strip_button_more_title).equal('Más');
        });
    });

    describe('onResourceChange', () => {
        let onResourceChangeEvent: {
            numTriggered: number;
            args: IResourceChangeEventArgs[];
        };
        beforeEach(() => {
            onResourceChangeEvent = {
                numTriggered: 0,
                args: []
            };
            manager.addEventListener('onResourceChange', (args: CustomEvent<IResourceChangeEventArgs>) => {
                onResourceChangeEvent.numTriggered++;
                onResourceChangeEvent.args.unshift(args.detail);
            });
        });

        it('should trigger onResourceChange when current locale is changed', () => {
            manager.setCurrentI18n('bg');
            manager.setCurrentI18n('en-US');

            expect(onResourceChangeEvent.numTriggered).equal(2);
            expect(onResourceChangeEvent.args[0].oldLocale).equal('bg');
            expect(onResourceChangeEvent.args[0].newLocale).equal('en-US');
        });

        it('should not trigger onResourceChange when current locale is changed to the same value', () => {
            manager.setCurrentI18n('en-US');

            expect(onResourceChangeEvent.numTriggered).equal(0);
        });

        it('should trigger onResourceChange when new resource strings are registered for the current locale', () => {
            manager.registerI18n(ActionStripResourceStringsEN, manager.currentLocale);
            expect(onResourceChangeEvent.numTriggered).equal(1);
            expect(onResourceChangeEvent.args[0].oldLocale).equal('en-US');
            expect(onResourceChangeEvent.args[0].newLocale).equal('en-US');
        });

        it('should not trigger onResourceChange when new resource strings are registered for the current locale, but all strings are the same', () => {
            manager.registerI18n(ActionStripResourceStringsEN, manager.currentLocale);
            manager.registerI18n(ActionStripResourceStringsEN, manager.currentLocale);

            expect(onResourceChangeEvent.numTriggered).equal(1);
            expect(onResourceChangeEvent.args[0].oldLocale).equal('en-US');
            expect(onResourceChangeEvent.args[0].newLocale).equal('en-US');
        });

        it('shouldn not trigger onResourceChange when new resource strings are registered for different locale', () => {
            manager.registerI18n(ActionStripResourceStringsEN, 'bg');

            expect(onResourceChangeEvent.numTriggered).equal(0);
        });
    });
});
