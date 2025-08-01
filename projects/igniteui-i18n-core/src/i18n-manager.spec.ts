import { beforeEach, describe, it, expect, } from 'vitest';
import { igI18nManager } from './i18n-manager';
import { ActionStripResourceStringsEN } from './i18n/EN/action-strip-resources';
import { ActionStripResourceStringsBG } from 'igniteui-i18n-resources';


describe('i18n tests', () => {
    let manager: igI18nManager;
    beforeEach(() => {
        manager = new igI18nManager();
    });

    describe('registerI18n', () => {
        it('should register new resource string to default locale', () => {
            manager.registerI18n(ActionStripResourceStringsEN, manager.defaultLocale);

            const resources = manager.getCurrentResourceStrings();
            console.log(document.documentElement.getAttribute('lang'))
            expect(manager.currentLocale).equals("en-US");
            expect(Object.keys(resources).length).equals(1);
            expect(resources.action_strip_button_more_title).equals('More');
        })

        it('should override old resource string to default locale', () => {
            manager.registerI18n(ActionStripResourceStringsEN, manager.currentLocale);
            manager.registerI18n(ActionStripResourceStringsBG, manager.currentLocale);

            const resources = manager.getCurrentResourceStrings();
            expect(manager.currentLocale).equal('en-US');
            expect(Object.keys(resources).length).equal(1);
            expect(resources.action_strip_button_more_title).equal('Още');
        })

        it('should register for current locale if not provided and the current locale is changed', () => {
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
        })

        it('should register for specified locale provided and the current locale is changed', () => {
            manager.registerI18n(ActionStripResourceStringsBG, 'bg');

            let resources = manager.getCurrentResourceStrings();
            expect(manager.currentLocale).equal('en-US');
            expect(Object.keys(resources).length).equal(0);

            manager.setCurrentI18n('bg');
            resources = manager.getCurrentResourceStrings();
            expect(Object.keys(resources).length).equal(1);
            expect(resources.action_strip_button_more_title).equal('Още');
        })

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
        })

    })
})