import React from 'react';
import {ProjectCards} from './ProjectCards';
import { Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      imgUrl: 'project-img1.png',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      imgUrl: 'project-img2.png',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3',
      imgUrl: 'project-img3.png',
    },
    {
        title: 'Project 4',
        description: 'Description of Project 4',
        imgUrl: 'project-img4.png',
      },
  ];

  return (
    <section className="project" id="projects">
  <div>
    <Row>
      <Col size={12}>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h2 className="section-heading">My Projects</h2>
              <div className="projs">
                <Row>
                  {projects.map((project, index) => (
                    <Col key={index} sm={6} md={6}>
                      <div className='projcard'>
                      <ProjectCards {...project} />
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