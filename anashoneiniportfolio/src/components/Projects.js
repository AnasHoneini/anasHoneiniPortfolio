import React from 'react'
import { ProjectCards } from './ProjectCards'
import { Row, Col } from 'react-bootstrap'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import downloadImage from '../assets/img/RoomBookingSystem.jpg'
import downloadImage2 from '../assets/img/BHospital-Management-System.png'
import downloadImage3 from '../assets/img/ocr2.webp'
import downloadImage4 from '../assets/img/schoolGuard.jpg'

export const Projects = () => {
  const projects = [
    {
      title: 'Meeting Room Booking System',
      description:
        'Developed from scratch a web platform for Room Booking System using HTML, CSS, JS, MySQL and ASP.NET Web API',
      imgUrl: downloadImage,
      githubLink: 'https://github.com/AnasHoneini/MeetingRoomBookingSystem',
    },
    {
      title: 'Hospital Management Database System',
      description:
        'Developed a web platform for Hospital Management System using HTML, CSS, JS, Python Flask and MySQL',
      imgUrl: downloadImage2,
      githubLink: 'https://github.com/AnasHoneini/COE418_DB_Project',
    },
    {
      title: 'OCR for the Lebanese ID',
      description:
        'Accurate data extraction from ID cards and implemented wit machine learning algorithms including KNN, SVC, MLP.',
      imgUrl: downloadImage3,
      githubLink: 'https://github.com/AnasHoneini/COE599E_DataScience_Project',
    },
    {
      title: 'School Guard',
      description:
        'Mobile application interface developed using Kotlin, and encompassing deep learning, pre-trained VGG19 CNN, LSTM neural networks, and machine learning algorithms.',
      imgUrl: downloadImage4,
      githubLink: 'https://github.com/AnasHoneini/COE416_SE_Project',
    },
  ]

  return (
    <section className="projects" id="projects">
      <div>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2 className="section-heading">My Projects</h2>
                  <div className="projs">
                    <Row>
                      {projects.map((project, index) => (
                        <Col key={index} sm={6} md={6}>
                          <div className="projcard">
                            <ProjectCards {...project} />
                            <div className="proj-title">{project.title}</div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </div>
    </section>
  )
}
