# Ignite UI Internationalization (i18n) Resources

This package contains translated resources used commonly in Ignite UI components for Angular, WebComponents and React.

## Usage

Install the modules:

```
npm install igniteui-i18n-resources --save
```

Import the resources you want to use:

```
import { ResourceStringsBG, ResourceStringsDE } from 'igniteui-i18n-resources';
```

Register the resources you would like to use in the Ignite UI components on the platform you are using:

```
registerI18n(ResourceStringsBG, 'bg');
registerI18n(ResourceStringsDE, 'de');
```

Now changing the global locale for Ignite UI components should use the resources for that locale, if they are registered:

```
setCurrentI18n('de');
```

## Available languages

- `Bulgarian`
- `Czech`
- `Danish`
- `Dutch`
- `English`
- `French`
- `German`
- `Hungarian`
- `Italian`
- `Japanese`
- `Korean`
- `Norwegian`
- `Polish`
- `Portuguese`
- `Romanian`
- `Spanish`
- `Swedish`
- `Turkish`
- `Traditional Chinese (zh-Hant)`
- `Simplified Chinese (zh-Hans)`
