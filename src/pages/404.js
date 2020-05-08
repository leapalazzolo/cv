import React from 'react'
import styled from 'styled-components'
import { injectIntl } from 'gatsby-plugin-intl'
import { useIntl } from 'gatsby-plugin-intl'

import { translateObject, translateId } from '../utils/translate'
import { useSiteMetadata } from '../hooks/use_site_metadata'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Wrapper from '../components/wrapper'
import SEO from '../components/SEO'
import ufoAndCow from '../images/ufo-and-cow.svg'

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
  const {
    notFound,
    siteMetadata: {
      headerLinks,
      error,
      keyWords,
      social: { linkedin },
    },
  } = useSiteMetadata()
  const translatedError = translateObject(error.name, error.keys, intl)
  const translatedLanguage = translateId('language', intl)
  return (
    <Layout
      headerLinks={headerLinks}
      location={location}
      noCover={true}
      url={linkedin}
    >
      <SEO
        title={translatedError.seo}
        lang={translatedLanguage}
        description={'Not found'}
        keyWords={keyWords}
      />
      <Hero heroImg={notFound.childImageSharp.original.src} title={'Not found'} />
      <Wrapper>
        <MainTitle>{translatedError.title}</MainTitle>
        <Icon>
          <img src={ufoAndCow} alt={'Not found'} />
        </Icon>
        <Text>{translatedError.description}</Text>
      </Wrapper>
    </Layout>
  )
}

export default injectIntl(NotFoundPage)
