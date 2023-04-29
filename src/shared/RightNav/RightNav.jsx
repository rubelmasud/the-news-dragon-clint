
import { Button } from 'bootstrap';
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../assets/bg.png'
import './RightNav.css'

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <button className='bg-light p-1 m-1 text-primary rounded '> <FaGoogle /> Login with google</button>
            <button className='bg-light p-1 m-1 text-primary rounded'><FaGithub />  Login with github</button>
            <div className="text-danger my-4">
                <h4>Find us on</h4>
                <ListGroup >
                    <ListGroup.Item className='text-primary'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='text-primary'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='text-primary'><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className="Qzone-bg text-center  text-light p-2">
                <h4 className='fw-bold mt-4'>Create an <br /> Amazing <br /> Newspaper</h4>
                <p className='my-5'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className='fw-bold px-3 py-2 bg-danger rounded mb-5 text-light border-0'>Learn More</button>
            </div>
        </div>
    );
};

export default RightNav;