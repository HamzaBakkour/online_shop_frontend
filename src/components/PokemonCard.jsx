import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Context } from '../pages/Home';
import React, { useContext } from "react";
import axios from "axios";
import Badge from 'react-bootstrap/Badge';



const styles = {
    card: {
        width: '16rem',
        borderRadius: '20px',
        shadowOffset: { width: 20, height:20 },
        shadowOpacity: 5,
        shadowRadius: 5,
        boxShadow: '0px 0px 19px #F4AAB9',
    }
    }




function PokemonCard(props){

    const { name,
            hb,
            attack,
            defense,
            speed,
            image,
            category_image,
            category_color,
            _id,
            price,
            } = props;

            const { contextData, setContextData } = useContext(Context);

            const handleAddToCart = () =>{

            axios.get(`${process.env.REACT_APP_BASE_URL}/api/cart/`,{mode: 'cors',withCredentials: true, headers: {"Content-type": "application/json",}})

            .then((res) => {

                const itemFound = Object.keys(res.data).find(item => item == _id);

                let data = {}
                if (itemFound){
                        data = {
                        "product_id": _id,
                        "quantity": res.data[_id].quantity + 1,
                    }
                } else {
                    data = {
                        "product_id": _id,
                        "quantity": 1,
                    }
                }

                axios.post(`${process.env.REACT_APP_BASE_URL}/api/cart/`, data,{mode: 'cors',withCredentials: true,})
                .then(() => setContextData({...contextData, cartUpdates: contextData.cartUpdates++}))
                .catch(err => console.log(err))

            })
            .catch(err => console.log(err))
            }

    return (
        <div className='px-5 pt-4'>
            <Card
            style={styles.card}
            bg={category_color}
            text={'white'}>
                <Card.Img
                variant="top"
                height={130}
                src={image} />
                <Card.Body>
                    <Container>
                        <Row>
                            <Col md={9} >
                                <Card.Title>{name}</Card.Title>
                            </Col>

                            <Col md={3}>
                            <Card.Img
                            variant="top"
                            height={20}
                            src={category_image}/>
                            </Col>

                        
                        </Row>
                    </Container>
                </Card.Body>
                    <ListGroup className="list-group-flush">


                        <Container>
                            <Col>
                            <Row>
                                <ListGroup.Item variant="success"  active>
                                        HB: {hb}
                                    </ListGroup.Item>
                            </Row>
                            <Row>
                                <ProgressBar
                                className='px-0 my-0'
                                style={ { height: '3px', } }
                                variant="success" now={hb}/>
                            </Row>    
                            </Col>
                        </Container>
                        


                        <Container>
                            <Col>
                            <Row>
                                <ListGroup.Item variant="danger"  active>
                                    Attack: {attack}
                                </ListGroup.Item>
                            </Row>
                            <Row>
                                <ProgressBar
                                className='px-0 my-0'
                                style={ { height: '3px', } }
                                variant="danger" now={attack}/>
                            </Row>    
                            </Col>
                        </Container>
                        


                        <Container>
                            <Col>
                            <Row>
                                <ListGroup.Item variant="warning"  active>
                                    Defense: {defense}
                                </ListGroup.Item>
                            </Row>
                            <Row>
                                <ProgressBar
                                className='px-0 my-0'
                                style={ { height: '3px', } }
                                variant="warning" now={defense}/>
                            </Row>    
                            </Col>
                        </Container>


                        <Container>
                            <Col>
                            <Row>
                                <ListGroup.Item variant="info"  active>
                                    Speed: {speed}
                                </ListGroup.Item>
                            </Row>
                            <Row>
                                <ProgressBar
                                className='px-0 my-0'
                                style={ { height: '3px', } }
                                variant="info" now={speed}/>
                            </Row>    
                            </Col>
                        </Container>


                    </ListGroup>
                <Card.Body
                className='d-flex justify-content-between my-1 py-0'
                style={{ height: '40px' }}
                >
                
                <Button
                className='me-2'
                variant="light"
                style={{ height: '35px' }}
                onClick={handleAddToCart}>Add to cart</Button>


                <div className='d-flex mb-1 justify-content-center align-items-center'>
                        <p className='fw-1 fs-5 text-center mt-3 px-2'>
                            {price} kr
                        </p>
                </div>
                
                </Card.Body>
            </Card>
        </div>
        );
};

export default PokemonCard;


