import moment from 'moment/moment';
import React from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { FaBookmark, FaEye, FaRegBookmark, FaRegStar, FaShare, FaShareAlt, FaShieldAlt, FaStar } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const NewsCart = ({ news }) => {
    const { _id, title, details, image_url, author, rating, total_view } = news
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center '>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className="ms-2  flex-grow-1">
                    <p className='mb-0 fw-semibold'>{author?.name}</p>
                    <p><small>{moment(author?.published_date).format('yyyyy-mm-d')}</small></p>
                </div>
                <div className="d-flex gap-1">
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link> </>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center gap-1">
                <Rating style={{ maxWidth: 80 }} value={Math.round(rating?.number || 0)} readOnly />
                <div className="flex-grow-1">
                    <small>{rating?.number}</small>
                </div>
                <div className="d-flex gap-1 align-items-center">
                    <FaEye></FaEye>{total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCart;