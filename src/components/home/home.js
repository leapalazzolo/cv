import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa'
import { useIntl } from 'gatsby-plugin-intl'
import {
  translateObject,
  translateObjectList,
  translateId,
} from '../../utils/translate'

import { useSiteMetadata } from '../../hooks/use_site_metadata'
import Layout from '../layout'
import Hero from '../hero'
import SEO from '../SEO'
import Wrapper from '../wrapper'
import About from '../about'
import Skills from '../skills'
import Timeline from '../timeline'
import Courses from '../courses'
import Education from '../education'

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
`

const Home = ({ className }) => {
  const {
    tabTitle,
    keyWords,
    headerLinks,
    social,
    siteCover,
    authorAvatar,
    skills,
    courses,
    jobs,
    education,
    titles,
  } = useSiteMetadata()
  const intl = useIntl()
  const translatedtitles = translateObject('titles', titles.keys, intl)
  const translatedJobs = translateObjectList(
    'jobs',
    jobs.keys,
    intl,
    jobs.number
  )
  const translatedEducation = translateObjectList(
    'education',
    education.keys,
    intl,
    education.number
  )
  const translatedAuthorDescription = translateId('authorDescription', intl)
  const translatedLanguage = translateId('language', intl)
  return (
    <Layout headerLinks={headerLinks} url={social.linkedin}>
      <SEO
        title={tabTitle}
        keyWords={keyWords}
        lang={translatedLanguage}
        description={translatedAuthorDescription}
      />

      <Hero heroImg={siteCover} title={translateId('siteTitle', intl)} />

      <Wrapper className={className}>
        <Container className="page-content" fluid>
          <Row>
            <Col xs={social.length} className="avatar">
              <img
                className="avatar__image"
                src={authorAvatar}
                alt="Author avatar"
              />
              <div className="social">
                {social.github && (
                  <a className="social-link github" href={social.github}>
                    <FaGithub className="social-icon" size="32" />
                  </a>
                )}
                {social.linkedin && (
                  <a className="social-link linkedin" href={social.linkedin}>
                    <FaLinkedin className="social-icon" size="32" />
                  </a>
                )}
                {social.twitter && (
                  <a className="social-link twitter" href={social.twitter}>
                    <FaTwitter className="social-icon" size="32" />
                  </a>
                )}
                {social.email && (
                  <a
                    className="social-link email"
                    href={`mailto:${social.email}`}
                  >
                    <FaEnvelope className="social-icon" size="32" />
                  </a>
                )}
                {social.whatsApp && (
                  <a
                    className="social-link whatsapp"
                    href={`https://wa.me/${
                      social.whatsApp
                    }?text=${encodeURIComponent(
                      translateId('whatsappMessage', intl)
                    )}`}
                  >
                    <FaWhatsapp className="social-icon" size="32" />
                  </a>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={4} sm={4}>
              <About
                title={translatedtitles.about}
                text={translatedAuthorDescription}
              />
            </Col>
            <Col xs={4} sm={4}>
              <Skills title={translatedtitles.skills} skills={skills} />
            </Col>
          </Row>
          <Separator />
          <Education
            education={translatedEducation}
            title={translatedtitles.education}
          />
          <Timeline jobs={translatedJobs} title={translatedtitles.experience} />
          <Separator />
          <Courses
            legend={translatedtitles.certified}
            courses={courses}
            title={translatedtitles.courses}
          />
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(Home)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .avatar {
    align-items: center;
    margin-bottom: 24px;
    flex-direction: column;
  }

  .avatar__image {
    box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.75);
    max-width: 200px;
    border-radius: 100px;
    margin: 0 auto 24px;
  }

  .social {
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .social-link {
    padding: 8px;
    color: #555;
  }

  a.social-link.twitter:hover {
    color: #1da1f2;
  }

  a.social-link.github:hover {
    color: #24292e;
  }

  a.social-link.linkedin:hover {
    color: #0077b5;
  }

  a.social-link.email:hover {
    color: #c23a2b;
  }
  a.social-link.whatsapp :hover {
    color: #25d366;
  }
`
