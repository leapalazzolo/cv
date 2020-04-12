import React from 'react'
import siteConfig from '../../data/siteConfig'
import Home from '../components/home'
import { injectIntl } from 'gatsby-plugin-intl'

const Index = ({ intl }) => {
  const translatedJobs = [...Array(siteConfig.jobsNumber).keys()].map((i) => {
    return (
      {
        company: intl.formatMessage({ id: `jobs.${i}.company`,}),
        begin: {
          month: intl.formatMessage({ id: `jobs.${i}.begin.month`}),
          year: intl.formatMessage({ id: `jobs.${i}.begin.year`}),
        },
        duration: intl.formatMessage({ id: `jobs.${i}.duration`}),
        occupation: intl.formatMessage({ id: `jobs.${i}.occupation`}),
        description: intl.formatMessage({ id: `jobs.${i}.description`})
      }
    );
  })
  return (
    <Home
      siteConfig={siteConfig}
      siteTitle={intl.formatMessage({ id: 'siteTitle' })}
      authorDescription={intl.formatMessage({ id: 'authorDescription' })}
      jobs={translatedJobs}
    />
  )
}

export default injectIntl(Index)
