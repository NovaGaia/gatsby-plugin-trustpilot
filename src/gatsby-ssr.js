/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'

export const onRenderBody = ({ setHeadComponents }) => {
  const scriptTrustPilot = React.createElement(`script`, {
    key: 'novagaiaTrustpilot',
    id: 'novagaiaTrustpilot',
    type: 'text/javascript',
    src: '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js',
    async: true,
  })

  const preconnectTrustpilot =
    ((
      <link
        rel="preconnect"
        key="preconnect-trustpilot"
        href="//widget.trustpilot.com"
      />
    ),
    (
      <link
        rel="dns-prefetch"
        key="dns-prefetch-trustpilot"
        href="//widget.trustpilot.com"
      />
    ))

  setHeadComponents([preconnectTrustpilot, scriptTrustPilot])
}
