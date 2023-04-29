import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import frist from '../../../../assets/editorsInsight1.png'
import second from '../../../../assets/editorsInsight2.png'
import third from '../../../../assets/editorsInsight2.png'

const IditorsInsights = () => {
    return (
        <div className="">
            <h1 className='mt-4 mb-0 fw-semibold'>Editors Insight</h1>
            <Row xs={1} md={2} lg={3} className="g-4 my-1">
                <Col >
                    <Card>
                        <Card.Img variant="top" src={frist} />
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
    );
};

export default IditorsInsights;