import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provaider/AuthProvider';

const DragonNav = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Container>
            <Navbar className='my-5' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav ">
                        <Nav className="mx-auto d-flex align-items-center">
                            <Link className='text-decoration-none' to='/category/0'>Home</Link>
                            <Nav.Link href="">About</Nav.Link>
                            <Nav.Link href="">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user &&
                                <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            }
                            {user
                                ?
                                <Button onClick={handleLogOut} variant="secondary">Logout</Button>
                                :
                                <Link to='/login'>
                                    <Button variant="secondary">LogIn</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default DragonNav;