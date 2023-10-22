import {Container, Row, Col} from "react-bootstrap"
import { useEffect, useState } from "react";
import { FileText } from 'react-bootstrap-icons';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IconContext } from "react-icons";



export const Banner = () =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Mobile Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() *100);
    const period = 500;

    useEffect(() =>{
        let ticker = setInterval(() =>{
            tick();
        }, delta)

        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1): fullText.substring(0, text.length +1);
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(200);
        }
    }

    return(
        <section className="banner" id="home">
           <Container>
               <Row className="align-items-center">
                <Col xs={12} md={5} xl={7}>
                    <h1 className="fixed-height">{`Hi, I am Anas Honeini `}<span className="wrap">{text}</span></h1>
                    <p>I'm a Senior Computer Engineering Student at Lebanese American Univeristy.</p>
                    <div className="button-container">
                        <button onClick={() => console.log('connect')}>Hire Me</button>
                        <button onClick={() => console.log('connect')}>Resume<span style={{ marginLeft: '10px' }}></span><FileText size={25} /></button></div> 
                </Col>
                </Row>
                <Row className="align-items-center">

                <Col xs={12} md={6} xl={5}>
                <div className="social-icon">
                <IconContext.Provider value={{ color: "black" }}>
                    <a href="https://github.com">
                    <FaGithub size={40} />
                    </a>
                    <a href="https://linkedin.com" >
                    <FaLinkedin size={40} />
                    </a>
                    <a href="https://facebook.com" >
                    <FaFacebook size={40} />
                    </a>
                    <a href="https://instagram.com" >
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