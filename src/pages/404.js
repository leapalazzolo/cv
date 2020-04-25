import React from 'react'
import styled from 'styled-components'
import { injectIntl } from 'gatsby-plugin-intl'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Wrapper from '../components/wrapper'
import SEO from '../components/SEO'

import siteConfig from '../../data/siteConfig'

const MainTitle = styled.h1`
  line-height: 1.5;
  text-align: center;
  font-size: 3rem;
`

const Icon = styled.div`
  width: 150px;
  margin: 0 auto;
`

const Text = styled.p`
  text-align: center;
`

const NotFoundPage = (props) => {
  const title = props.intl.formatMessage({ id: '404.title' })
  const description = props.intl.formatMessage({ id: '404.description' })
  const seo = props.intl.formatMessage({ id: '404.seo' })
  const headerLinks = siteConfig.headerLinks
  return (
    <Layout
      headerLinks={headerLinks}
      location={props.location}
      noCover={true}
    >
      <SEO title={seo} />
      <Hero heroImg={siteConfig.error.image} title={siteConfig.error.title} />
      <Wrapper>
        <MainTitle>{title}</MainTitle>
        <Icon>
          <img src={siteConfig.error.icon} alt={siteConfig.error.altIcon} />
        </Icon>
        <Text>{description}</Text>
      </Wrapper>
    </Layout>
  )
}

export default injectIntl(NotFoundPage)
