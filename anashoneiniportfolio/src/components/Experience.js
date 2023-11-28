import React from 'react'
import { ExperienceCard } from './ExperienceCard'
import { Row, Col } from 'react-bootstrap'

export const Experience = () => {
  const experiences = [
    {
      title: '.NET Full Stack Developer Intern',
      company: 'Integrated Digital Systems',
      duration: 'June 2023 - September 2023',
      description:
        'Developed from scratch a web platform for Room Booking System using HTML, CSS, JS, MySQL and ASP.NET Web API',
    },
    {
      title: 'Information Technology Intern',
      company: 'Jubaili Bros',
      duration: 'July 2023 - Augest 2023',
      description:
        'Configured and managed Sophos Firewalls and Tessian Email Security to enhance network security, while also acquiring expertise in network systems administration and cloud computing using Microsoft Azure.',
    },
    {
      title: 'Mobile Developer Intern',
      company: 'Ogero Lebanon',
      duration: 'May 2023 - July 2023',
      description:
        'Developed a mobile application for Internal communication in Ogero using Flutter, NodeJS and MySQL',
    },
    {
      title: 'Software Developer Intern',
      company: 'Lemonade Fashion',
      duration: 'June 2022 - September 2022',
      description:
        "Contributed to the enhancement of the company's e-commerce website, utilizing ReactJS to develop and optimize user interfaces and functionality, and consistently delivering on assigned frontend tasks.",
    },
  ]
  

  return (
    <section className="experience" id="experience">
                <h2 className="section-heading">My Experience</h2>
                <div className="projs">
                  <Row>
                    {experiences.map((experience, index) => (
                      <Col key={index} sm={6} md={6}>
                        <div className="projcard">
                          <ExperienceCard {...experience} />
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
    </section>
  );
};