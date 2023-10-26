import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

export const ProjectCards = ({ description, imgUrl, githubLink }) => {
  return (
    <Col size={12} sm={6} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="test" />
        <div className="proj-txtx">
          <div className="proj-description">
            <span>{description}</span>
          </div>
          <div className="proj-button">
            <Button
              variant="link"
              href={githubLink}
              target="_blank"
              className="github-button" // Add a custom class
            >
              <FaGithub /> <span className="github-text">Code on GitHub</span>
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};
