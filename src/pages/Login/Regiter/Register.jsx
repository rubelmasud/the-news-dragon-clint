import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provaider/AuthProvider';

const Register = () => {
    const [accept, setAccept] = useState(false);
    const { createUser } = useContext(AuthContext)


    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error);
            })

    }

    const handleAccept = (event) => {
        setAccept(event.target.checked);
    }

    return (
        <div>
            <Container className='w-50 mx-auto '>
                <h2 className=''>Place Register</h2>
                <Form onSubmit={handleRegister} className='border p-3 rounded shadow'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Photo Url" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            onClick={handleAccept}
                            type="checkbox"
                            label={<>Accept <Link to='/terms'>Term & Conditions</Link></>} />
                    </Form.Group>
                    <Button variant="primary" disabled={!accept} type="submit">
                        Register
                    </Button><br />
                    <Form.Text >
                        Already Have An Account? <Link className="text-warning" to='/login'>login</Link>
                    </Form.Text>
                    <br></br>
                    <Form.Text className="text-danger">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    <Form.Text className="text-success">
                        We'll never share your email with anyone else.
                    </Form.Text>

                </Form>
            </Container>
        </div>
    );
};

export default Register;