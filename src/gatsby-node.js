import React from 'react'
import reporter from 'gatsby-cli/lib/reporter'

exports.onCreateWebpackConfig = (
  { plugins, actions },
  { templateID, businessunitID, username }
) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        __GATSBY_PLUGIN_TRUSTPILOT_TEMPLATEID__: JSON.stringify(templateID),
        __GATSBY_PLUGIN_TRUSTPILOT_BUSINESSUNITID__: JSON.stringify(
          businessunitID
        ),
        __GATSBY_PLUGIN_TRUSTPILOT_USERNAME__: JSON.stringify(username),
      }),
    ],
  })
}

exports.pluginOptionsSchema = ({ Joi }) => {
  reporter.info('gatsby-plugin-trustpilot initialisation...')
  return Joi.object({
    templateID: Joi.string()
      .required()
      .description(`TemplateID of your TrustBox.`)
      .messages({
        'any.required': `"templateID" needs to be specified as a string. Get the correct value from your dashboard settings.`,
      }),
    businessunitID: Joi.string()
      .required()
      .description(`BusinessunitID of your TrustBox.`)
      .messages({
        'any.required': `"businessunitID" needs to be specified as a string. Get the correct value from your dashboard settings.`,
      }),
  })
}
