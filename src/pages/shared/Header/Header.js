import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth);
    };
    return (
        <div >
            <Navbar bg="light" expand="lg" className='py-0' >
                <Container>
                    <Navbar.Brand to="/home">
                        <div className='d-flex align-items-center'>
                            <img height={30} src={logo} alt="" />
                            <p className='mt-3'>Teeth-Zone</p>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ms-3 fw-bold">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <Navbar.Text>
                                        <Nav.Link className='d-flex align-items-center'>
                                            <p className='mt-2 px-3'> User: {user.email}</p>
                                            <Button variant="outline-dark" onClick={handleLogout}>Sign out</Button>
                                        </Nav.Link>
                                    </Navbar.Text>
                                    :
                                    <Navbar.Text>
                                        <Nav.Link as={Link} to="/signin"><Button variant="outline-dark">Sign in</Button></Nav.Link>
                                    </Navbar.Text>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;