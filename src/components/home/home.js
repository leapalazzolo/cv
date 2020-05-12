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

class Home extends React.Component {
  render() {
    const title = this.props.siteTitle
    const tabTitle = this.props.tabTitle
    const { keywords } = this.props.siteConfig
    return (
      <Layout
        location={this.props.location}
        headerLinks={this.props.siteConfig.headerLinks}
        url={this.props.siteConfig.social.linkedin}
      >
        <SEO
          title={tabTitle}
          keywords={keywords}
          lang={this.props.language}
          description={this.props.authorDescription}
          author={this.props.siteConfig.twitterUsername}
        />

        <Hero heroImg={this.props.siteConfig.siteCover} title={title} />

        <Wrapper className={this.props.className}>
          <Container className="page-content" fluid>
            <Row>
              <Col xs={4} className="avatar">
                <img
                  className="avatar__image"
                  src={this.props.avatar}
                  alt="user avatar"
                />
                <div className="social">
                  {this.props.siteConfig.social.github && (
                    <a
                      className="social-link github"
                      href={this.props.siteConfig.social.github}
                    >
                      <FaGithub className="social-icon" size="32" />
                    </a>
                  )}
                  {this.props.siteConfig.social.linkedin && (
                    <a
                      className="social-link linkedin"
                      href={this.props.siteConfig.social.linkedin}
                    >
                      <FaLinkedin className="social-icon" size="32" />
                    </a>
                  )}
                  {this.props.siteConfig.social.twitter && (
                    <a
                      className="social-link twitter"
                      href={this.props.siteConfig.social.twitter}
                    >
                      <FaTwitter className="social-icon" size="32" />
                    </a>
                  )}
                  {this.props.siteConfig.social.email && (
                    <a
                      className="social-link email"
                      href={`mailto:${this.props.siteConfig.social.email}`}
                    >
                      <FaEnvelope className="social-icon" size="32" />
                    </a>
                  )}
                  {this.props.siteConfig.cellphone && (
                    <a
                      className="social-link whatsapp"
                      href={`https://wa.me/${
                        this.props.siteConfig.cellphone
                      }?text=${encodeURIComponent(this.props.whatsappMessage)}`}
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
                  title={this.props.titles.about}
                  text={this.props.authorDescription}
                />
              </Col>
              <Col xs={4} sm={4}>
                <Skills
                  title={this.props.titles.skills}
                  skills={this.props.siteConfig.skills}
                />
              </Col>
            </Row>
            <Separator />
            <Education
              education={this.props.education}
              title={this.props.titles.education}
            />
            <Timeline
              jobs={this.props.jobs}
              title={this.props.titles.experience}
            />
            <Separator />
            <Courses
              legend={this.props.titles.certified}
              courses={this.props.siteConfig.courses}
              title={this.props.titles.courses}
            />
          </Container>
        </Wrapper>
      </Layout>
    )
  }
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
