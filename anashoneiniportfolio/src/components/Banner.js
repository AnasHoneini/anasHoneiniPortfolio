import { Container, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { FileText } from 'react-bootstrap-icons'
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import CVPDF from '../assets/documents/Anas_Honeini_CV.pdf'

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ['Web ', 'Mobile ']
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 500

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  })

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)
    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(200)
    }
  }
  const redirectToLinkedIn = () => {
    window.open('https://www.linkedin.com/in/anas-honeini/', '_blank')
  }
  const downloadResume = async () => {
    const link = document.createElement('a')
    link.href = CVPDF
    link.download = 'Anas Honeini Resume'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={5} xl={7}>
            <div>
              <h1 className="fixed-height">{`Hi, I am Anas Honeini`}</h1>
            </div>
            <br />
            <div>
              <h1 className="wrap">
                <span className="wrap">{text}</span>
                {`Developer`}
              </h1>
            </div>
            <div>
              <br />
              <p>
                I'm a Senior Computer Engineering Student at Lebanese American
                Univeristy.
              </p>
            </div>
            <div className="button-container">
              <button onClick={redirectToLinkedIn}>Hire Me</button>
              <button onClick={downloadResume}>
                Resume<span style={{ marginLeft: '10px' }}></span>
                <FileText size={25} />
              </button>
            </div>
          </Col>
        </Row>
        <br />
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <div className="social-icon">
              <IconContext.Provider value={{ color: 'black' }}>
                <a
                  href="https://github.com/AnasHoneini"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={40} />
                </a>
                <a
                  href="https://www.linkedin.com/in/anas-honeini/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={40} />
                </a>
                <a
                  href="https://www.facebook.com/anas.hneineh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook size={40} />
                </a>
                <a
                  href="https://www.instagram.com/anas_honeini/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram size={40} />
                </a>
              </IconContext.Provider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
