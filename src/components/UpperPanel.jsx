import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from './Search';
import Categories from "../components/Categories";
import React, {useState, useEffect} from "react";


import image_background from '../assets/images/poppy-hill-our.webp'

// testx

function UpperPanel(){


    return (
        <>
            <Container >

                
                <Row
                style={{
                    background: `url(${image_background})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: `center center`,
                    height: "100vh",
                    position: 'relative',
                    top: '0',
                    left: '0',
                    filter: `brightness(0.8)`}}
                    >
                    <Col md={12} className='d-flex flex-column justify-content-end align-items-center'>
                        <Search />
                        <Categories />
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default UpperPanel;