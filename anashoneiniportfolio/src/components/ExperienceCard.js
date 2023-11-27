import React from 'react'
import { Col } from 'react-bootstrap'

export const ExperienceCard = ({ title, company, duration, description }) => {
  return (
    <Col size={12} sm={6} md={6}>
      <div className="projcardExperience">
        <div className="proj-tit">
          <span>{title}</span>
        </div>
        <div className="proj-company">
          <span>{company}</span>
        </div>
        <div className="proj-duration">
          <span>{duration}</span>
        </div>
        <div className="proj-desc">
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
