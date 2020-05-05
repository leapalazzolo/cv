import React from 'react'
import styled from 'styled-components'
import { injectIntl } from 'gatsby-plugin-intl'
import { useIntl } from 'gatsby-plugin-intl'
import { translateObject } from '../utils/translate'
import { useSiteMetadata } from '../hooks/use_site_metadata'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Wrapper from '../components/wrapper'
import SEO from '../components/SEO'

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

const NotFoundPage = ({ location }) => {
  const intl = useIntl()
  const { headerLinks, error } = useSiteMetadata()
  const translatedError = translateObject(error.name, error.keys, intl)
  return (
    <Layout headerLinks={headerLinks} location={location} noCover={true}>
      <SEO title={translatedError.seo} />
      <Hero heroImg={error.notFound} title={'Not found'} />
      <Wrapper>
        <MainTitle>{translatedError.title}</MainTitle>
        <Icon>
          <img src={error.ufoAndCow} alt={'Not found'} />
        </Icon>
        <Text>{translatedError.description}</Text>
      </Wrapper>
    </Layout>
  )
}

export default injectIntl(NotFoundPage)
