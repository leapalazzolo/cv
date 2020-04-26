import React from 'react'
import styled from 'styled-components'

const Courses = props => {
  return (
    <div className={props.className}>
      <h1>{props.title}</h1>
      {props.courses && (
        <React.Fragment>
          <div className="courses__content">
            {props.courses.map(course => (
              <React.Fragment key={course.name}>
                <div className="courses__course">
                  <a className="courses__course-link" href={course.url}>
                    <strong>{course.name}</strong>
                  </a>
                  <div className="courses__course-date">{course.date}</div>
                    {course.license && (
                      <div className="courses__course-license">
                        {course.license}
                      </div>
                    )}
                  {course.certification && (
                    <div className="courses__course-star"> {props.legend + " ★"} </div>
                  )}
                </div>
                <hr />
              </React.Fragment>
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  )
}

export default styled(Courses)`
  position: relative;
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
    position: absolute;
    top: 0;
    right: 0;
    font-size: 12px;
  }

  .courses__loader {
    display: flex;
  }

  hr {
    margin-top: 16px;
  }
`
