import React,{ useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; 
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Image from 'react-bootstrap/Image';
import { FaUserAlt } from 'react-icons/fa';
import { Button } from 'react-bootstrap';



const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    
    const handleLogOut = () =>{
        logOut()
         .then( () =>{})
         .catch( error => console.error(error))
    }
    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link to='/'>Dragon News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">All News</Nav.Link>
                    <Nav.Link href="#pricing">News</Nav.Link>
                    <Nav.Link href="#dropdown">Categories</Nav.Link>
                    
                </Nav>
                <Nav>
                    <>
                        {
                            user?.uid?
                            <>
                                <span className='text-white'>{user?.displayName}</span>
                                <Button variant="light" onClick={handleLogOut}>Log Out</Button>
                            </>
                            :
                            <>
                                <Link to='/login'>Login</Link>
                                <Link to='/register'>Register</Link>
                            </>
                        }

                    </>
                    <Link to='/profile'>
                    {user?.photoURL ?
                        <Image 
                            style={{height:'30px'}}
                            roundedCircle
                            src={user?.photoURL}
                        ></Image>
                        :
                        <FaUserAlt></FaUserAlt>
                }
                    </Link>
                </Nav>
                <div className='d-lg-none'> 
                    <LeftSideNav></LeftSideNav>
                </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;