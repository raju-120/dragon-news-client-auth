import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
    const {providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
         .then( result =>{
            const user = result.user;
            console.log(user);
         })
         .catch( error => {
            console.error(error);
         })
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} variant="outline-primary"> <FaGoogle></FaGoogle> Login With Google</Button>
                <Button variant="outline-dark"> <FaGithub></FaGithub> Login With Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find Us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter />  Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch />   Twitcher</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;