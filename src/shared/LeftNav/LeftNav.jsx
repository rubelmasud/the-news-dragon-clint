import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fast from '../../assets/1.png'
import second from '../../assets/2.png'
import third from '../../assets/3.png'

const LeftNav = () => {

    const [categoris, setCategoris] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/cetagoris')
            .then(res => res.json())
            .then(data => setCategoris(data))

    }, [])

    return (
        <div>
            <h4 className=' fw-bold'>All Caterogy</h4>
            <h4 className='bg-secondary Regular shadow py-3 fw-bold text-center text-light rounded'>National News</h4>
            <div className="ms-5 ">
                {
                    categoris.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>
                    </p>)
                }
                <Row xs={1} md={1} lg={1} className="g-4 my-1">
                    <Col >
                        <Card>
                            <Card.Img variant="top" src={fast} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card>
                            <Card.Img variant="top" src={second} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card>
                            <Card.Img variant="top" src={third} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </div>
        </div>
    );
};

export default LeftNav;