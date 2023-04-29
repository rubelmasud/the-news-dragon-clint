import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Term & Conditions</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, eligendi deserunt autem corrupti est possimus voluptas officia officiis nisi tempora repellendus mollitia nulla dolorum. Alias error iste cumque sunt quisquam.</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </Container>
    );
};

export default Terms;