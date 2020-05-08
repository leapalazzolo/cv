import React from 'react'
import styled from 'styled-components'
import { Col, Row } from 'react-awesome-styled-grid'

const Courses = props => {
  return (
    <div className={props.className}>
      <h1>{props.title}</h1>
      {props.courses && (
        <React.Fragment>
          <div className="courses__content">
            {props.courses.map(course => (
              <div className="courses__course">
                <React.Fragment key={course.name}>
                  <Row>
                    <Col xs={3} md={7}>
                      <strong>{course.name}</strong>
                    </Col>
                    {course.certification && (
                      <Col xs={1} md={1}>
                        <div className="courses__course-star">
                          <a className="courses__course-link" href={course.url}>
                            {props.legend}
                          </a>
                          {' ★'}
                        </div>
                      </Col>
                    )}
                  </Row>

                  <Row>
                    <Col xs={4} sm={4}>
                      <div className="courses__course-date">{course.date}</div>
                    </Col>
                  </Row>

                  <hr />
                </React.Fragment>
              </div>
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  )
}

export default styled(Courses)`
  .courses__content {
    margin-bottom: 40px;
  }

  .courses__course {
    position: relative;
  }

  .courses__course-link {
    text-decoration: none;
    color: #25303b;
  }

  .courses__course-date {
    font-size: 14px;
  }
  .courses__course-license {
    color: #bbb;
    font-size: 10px;
  }

  .courses__course-star {
    font-size: 12px;
  }

  hr {
    margin-top: 16px;
  }
  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a:active {
    text-decoration: underline;
  }
`
