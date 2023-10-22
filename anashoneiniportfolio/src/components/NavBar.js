import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () =>{
            if (window.scrollY >50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onscroll);

        return() => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink =(value) =>{
        setActiveLink(value);
    } 

    return (
        <Navbar expand="md" className={scrolled ? "scrolled": ""}>
        <Container>
        <Navbar.Brand className='portfolio' href="/">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>     
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        <Nav.Link href="#home" className={activeLink ==='home' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
        <Nav.Link href="#skills" className={activeLink ==='skills' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
        <Nav.Link href="#projects" className={activeLink ==='projects' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
        <Nav.Link href="#experience" className={activeLink ==='experience' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('experience')}>Experience</Nav.Link>
        <Nav.Link href="#contact" className={activeLink ==='contact' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('contact')}>Contact</Nav.Link>
        </Nav>
        <span className='navbar-text'>
                <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>        
        </span>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}