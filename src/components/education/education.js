import React from 'react'
import styled from 'styled-components'

const Education = props => {
  return (
    <div className={props.className}>
      <h1>{props.title}</h1>
      {props.education && (
        <React.Fragment>
          <div className="education__content">
            {props.education.map(education => (
              <React.Fragment key={education.name}>
                <div className="education__course">
                  <strong>{education.name}</strong>
                  <div className="education__course-date">
                    {education.place} <br/>
                    {education.date.from + '-' + education.date.to}
                  </div>
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

export default styled(Education)`
  position: relative;
  .education__content {
    margin-bottom: 40px;
  }

  .education__course {
    position: relative;
  }

  .education__course-link {
    text-decoration: none;
    color: #25303b;
  }

  .education__course-date {
    font-size: 14px;
  }
  .education__course-license {
    color: #bbb;
    font-size: 10px;
  }

  .education__course-star {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 12px;
  }

  .education__loader {
    display: flex;
  }

  hr {
    margin-top: 16px;
  }
`
