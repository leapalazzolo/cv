import React from 'react'
import siteConfig from '../../data/siteConfig'
import Home from '../components/home'
import { injectIntl } from 'gatsby-plugin-intl'

const Index = ({ intl }) => {
  const translatedJobs = [...Array(siteConfig.jobsNumber).keys()].map(i => {
    return {
      company: intl.formatMessage({ id: `jobs.${i}.company` }),
      begin: {
        month: intl.formatMessage({ id: `jobs.${i}.begin.month` }),
        year: intl.formatMessage({ id: `jobs.${i}.begin.year` }),
      },
      duration: intl.formatMessage({ id: `jobs.${i}.duration` }),
      occupation: intl.formatMessage({ id: `jobs.${i}.occupation` }),
      description: intl.formatMessage({ id: `jobs.${i}.description` }),
    }
  })
  const translatedTitles = {
    about: intl.formatMessage({ id: 'titles.about' }),
    skills: intl.formatMessage({ id: 'titles.skills' }),
    experience: intl.formatMessage({ id: 'titles.experience' }),
    courses: intl.formatMessage({ id: 'titles.courses' }),
    certified: intl.formatMessage({ id: 'titles.certified' }),
  }
  return (
    <Home
      siteConfig={siteConfig}
      siteTitle={intl.formatMessage({ id: 'siteTitle' })}
      tabTitle={intl.formatMessage({ id: 'tabTitle' })}
      language={intl.formatMessage({ id: 'language' })}
      authorDescription={intl.formatMessage({ id: 'authorDescription' })}
      jobs={translatedJobs}
      titles={translatedTitles}
    />
  )
}

export default injectIntl(Index)
