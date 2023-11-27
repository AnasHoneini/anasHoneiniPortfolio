import React from 'react'
import TrackVisibility from 'react-on-screen'

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="containerSkills">
        <TrackVisibility>
        {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__rotateInDownLeft' : ''
                  }
                >
        <h2 className="section-heading">My Skills</h2>

        {/* Programming Languages */}
        <div className="skills-section">
          <h3>Programming Languages</h3>
          <div className="skills-container">
            <div className="skill">Java</div>
            <div className="skill">Python</div>
            <div className="skill">Assembly</div>
            <div className="skill">C++</div>
            <div className="skill">VHDL</div>
            <div className="skill">C</div>
            <div className="skill">C#</div>
            <div className="skill">Dart</div>
            <div className="skill">Kotlin</div>
          </div>
        </div>

        {/* Web and Mobile */}
        <div className="skills-section">
          <h3>Web and Mobile</h3>
          <div className="skills-container">
            <div className="skill">JavaScript</div>
            <div className="skill">HTML5</div>
            <div className="skill">CSS3</div>
            <div className="skill">ReactJS</div>
            <div className="skill">NodeJS</div>
            <div className="skill">ASP.NET Web API</div>
            <div className="skill">Python Flask</div>
            <div className="skill">Flutter</div>
            <div className="skill">MySQL</div>
            <div className="skill">NoSQL</div>
          </div>
        </div>

        {/* Tools and Libraries */}
        <div className="skills-section">
          <h3>Tools and Libraries</h3>
          <div className="skills-container">
            <div className="skill">Firebase</div>
            <div className="skill">Figma</div>
            <div className="skill">MATLAB</div>
            <div className="skill">Android Studio</div>
            <div className="skill">Simulink</div>
            <div className="skill">Rasa Chatbot</div>
          </div>
        </div>

        {/* Machine Learning */}
        <div className="skills-section">
          <h3>Machine Learning</h3>
          <div className="skills-container">
            <div className="skill">Jupyter</div>
            <div className="skill">Google Colab</div>
            <div className="skill">Keras</div>
            <div className="skill">Pandas</div>
            <div className="skill">Matplotlib</div>
            <div className="skill">Scikit-Learn</div>
            <div className="skill">Linear/Logistic Regression</div>
            <div className="skill">Clustering</div>
          </div>
        </div>
      </div>)} 
      </TrackVisibility>
      </div>
    </section>
  )
}
