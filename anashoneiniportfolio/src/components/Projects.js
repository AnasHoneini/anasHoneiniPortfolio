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
      imgUrl: '../assets/img/banner-bg.png',
      githubLink: 'https://github.com/yourusername/repo1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      imgUrl: 'project-img2.png',
      githubLink: 'https://github.com/yourusername/repo2',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3',
      imgUrl: 'project-img3.png',
      githubLink: 'https://github.com/yourusername/repo3',
    },
    {
        title: 'Project 4',
        description: 'Description of Project 4',
        imgUrl: 'project-img4.png',
        githubLink: 'https://github.com/yourusername/repo4',
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