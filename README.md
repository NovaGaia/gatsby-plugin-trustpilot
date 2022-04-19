# gatsby-plugin-trustpilot-trustbox

Gatsby plugin to display your Trustpilot reviews on your website.

### Changelog

**More informations in [`CHANGELOG.md`](https://github.com/NovaGaia/gatsby-plugin-trustpilot/blob/main/CHANGELOG.md)**

## Installation

Use this commmand `npm i --save gatsby-plugin-trustpilot-trustbox` or `yarn install gatsby-plugin-trustpilot-trustbox`

## Usage

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-trustpilot-trustbox`,
      options: {
        templateID: process.env.TRUSTPILOT_TEMPLATE_ID, // the value of `data-template-id`
        businessunitID: process.env.TRUSTPILOT_BUSINESSUNIT_ID, // the value of `data-businessunit-id`
      },
    },
  ],
}
```

Add import to your file :

`import { TrustPilotBox } from 'gatsby-plugin-trustpilot-trustbox'`

Add component to your file :

```javascript
<TrustPilotBox
  locale="fr-FR"
  defaultRevueURL={process.env.GATSBY_TRUSTPILOT_REVUE_URL}
/>
```

- `locale` TrustBox locale, default 'en-EN'
- `styleHeight` TrustBox styleHeight, default '24px'
- `styleWidth` TrustBox styleWidth, default '100%'
- `theme` TrustBox theme ('dark', 'light'), default 'light'
- `minReviewCount` TrustBox minReviewCount (null, 10, 20, 50), default 'null'
- `defaultRevueURL` TrustBox fallback link URL
- `defaultLabel` TrustBox fallback link label
- `defaultClassName` TrustBox fallback link className
