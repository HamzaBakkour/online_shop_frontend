import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image_background from '../img/poppy-hill-our.gif';
import Search from './Search';
import Categories from "../components/Categories";

import React, {useState, useEffect} from "react";
// import ball_image from '../img/ball.png'
import ball_image from '../img/ball.png'



function UpperPanel(){

    const [ brightnessLevel, setBrightnessLevel ] = useState(1.7);

    const listenScrollEvent = (event) => {
        event.preventDefault();
        const position = window.scrollY / parseFloat(window.innerHeight)


        if (position > 0.1 && position < 0.2) {
        return setBrightnessLevel(1.6)
        } else if (position > 0.2 && position < 0.3) {
        return setBrightnessLevel(1.3)
        } else if (position > 0.3 && position < 0.4) {
        return setBrightnessLevel(1.2)
        } else if (position > 0.4 && position < 0.5) {
        return setBrightnessLevel(1.1)
        } else if (position > 0.5 && position < 0.6) {
        return setBrightnessLevel(1.0)
        } else if (position > 0.6 && position < 0.7) {
        return setBrightnessLevel(0.9)
        } else if (position > 0.7 && position < 0.8) {
        return setBrightnessLevel(0.8)
        } else if (position > 0.8 && position < 0.9) {
        return setBrightnessLevel(0.7)
        } else if (position > 0.9 && position < 1) {
        return setBrightnessLevel(0.6)
        } else if (position > 1) {
        return setBrightnessLevel(0.5)}
    }


    useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () =>
    window.removeEventListener('scroll', listenScrollEvent);
    }, []);


    return (
        <>
            <Container >
                
                <Row style={{background: require(`url(${image_background})`),
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: `center center`,
                    height: "100vh",
                    position: 'relative',
                    top: '0',
                    left: '0',
                    filter: `brightness(${brightnessLevel})`}}
                    >
                    <Col md={12} className='d-flex flex-column justify-content-end align-items-center'>
                        <Search className={brightnessLevel} />
                        <Categories />
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default UpperPanel;