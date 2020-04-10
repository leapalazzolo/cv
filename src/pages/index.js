import React from 'react'
import siteConfig from '../../data/siteConfig'
import Home from '../components/home'
import { injectIntl } from 'gatsby-plugin-intl'

const Index = ({ intl }) => {
  return (
    <Home
      siteConfig={siteConfig}
      siteTitle={intl.formatMessage({ id: 'siteTitle' })}
      authorDescription={intl.formatMessage({ id: 'authorDescription' })}
    />
  )
}

export default injectIntl(Index)
