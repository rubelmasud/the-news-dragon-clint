import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import IditorsInsights from '../IditorsInsights/IditorsInsights';

const News = ({ }) => {
    const newsDetails = useLoaderData()
    const { title, details, image_url, category_id } = newsDetails

    return (
        <div>
            <h2 className='fw-semibold'>Dragon News</h2>
            <Card >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}> <Button variant="danger"><FaArrowLeft></FaArrowLeft> All news in this category</Button></Link>
                </Card.Body>
            </Card>
            <IditorsInsights></IditorsInsights>
        </div>

    );
};

export default News;