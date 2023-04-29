import React from 'react';
import Home from '../pages/Home/Home/Home';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import LeftNav from '../shared/LeftNav/LeftNav';
import RightNav from '../shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import DragonNav from '../shared/DragonNav/DragonNav';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <DragonNav></DragonNav>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;