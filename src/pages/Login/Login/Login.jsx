import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provaider/AuthProvider';

const Login = () => {

    const { singIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/category/0'
    console.log(from);

    const handleSingIn = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        singIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <Container className='w-50 mx-auto '>
            <h2 className=''>Place Login</h2>
            <Form onSubmit={handleSingIn} className='border p-3 rounded shadow '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button><br />
                <Form.Text >
                    Dont’t Have An Account ? <Link className="text-warning" to='/register'>Register</Link>
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
    );
};

export default Login;