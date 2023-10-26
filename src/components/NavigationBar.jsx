import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Image  from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import CartItem from './CartItem';
import CheckoutMoudal from './CheckoutMoudal';
import axios from "axios";

import React, { useContext, useState, useEffect } from "react";
import { Context } from '../pages/Home';

import ball_image from '../assets/images/ball.png'













function NavigationBar(){


    const { contextData, setContextData } = useContext(Context);
    const [dropDownShow, setDropDownShow] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState();
    const [cartTotalCost, setCartTotalCost] = useState();
    const [cartTotalItemsCount, setCartTotalItemsCount] = useState();
    
    
    
    const [show, setShow] = useState(false);



    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/cart/`,{mode: 'cors',withCredentials: true, headers: {"Content-type": "application/json"}})
        .then(response => {
            let count = 0;
            Object.values(response.data).forEach(function (arrayItem) {
                count = count + arrayItem.quantity
            });
            setCartTotalItemsCount(count);

            setCartItems(response.data);

            axios.get(`${process.env.REACT_APP_BASE_URL}/api/cart/get_total_price/`,{mode: 'cors',withCredentials: true, headers: {"Content-type": "application/json"}})
            .then((res) => {
                setCartTotalCost(res.data);
            })


        setLoading(false);
        });
    }, [contextData]);



    const [ showNavBar, setShowNavBar ] = useState(false);




    const listenScrollEvent = (event) => {
        event.preventDefault();
        if ( window.scrollY > 10){
            setShowNavBar(true)}
        else if (window.scrollY == 0){
            setShowNavBar(false)
        }


    }
    useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () =>
    window.removeEventListener('scroll', listenScrollEvent);
    }, []);









    if (isLoading) {
        return <div className="App">Loading...</div>;
    }



    return(
        <>
        {showNavBar && 
        
        <Navbar
        className="bg-body-tertiary"
        fixed="top"
        >
            <Container>
                <Navbar.Brand>
                        <h4 className='my-0'>FunnyShop</h4>
                        <h5 className='px-4 mt-0 pt-0 my-0 text-danger'>Pokèmon</h5>
                </Navbar.Brand>
            
                <Container 
                className='d-flex px-0 my-0 justify-content-end'>
                    <div className='d-flex flex-column px-0 my-0 justify-content-center align-items-end'>
                        <NavDropdown
                        drop = "start"
                        as={Button}
                        onClick={() => {dropDownShow ? setDropDownShow(false) : setDropDownShow(true)}}
                        title="Cart"

                        style={{width: '60px', height: '40px'}}
                        show={dropDownShow}
                        >

                            <div className='d-flex  flex-column px-2' style={{width: "500px"}}>
                                { Object.entries(cartItems).map((cartItem,index) => 
                                        <CartItem 
                                            id = {cartItem[0]}
                                            product_image={cartItem[1].product_image}
                                            quantity = {cartItem[1].quantity}
                                            price = {cartItem[1].price}
                                            name = {cartItem[1].name}
                                        />
                                    )
                                }
                            </div >

                            {cartTotalItemsCount !== 0 ?
                            <>
                                <hr class="divider"></hr>
                                <div className='d-flex  flex-column px-2' style={{width: "500px"}}>
                                    <Container className="d-flex flex-column mb-1 align-content-center border border-primary mt-1 shadow bg-white"
                                    style={{height: "65px"}}
                                    >
                                        

                                        <Row>
                                            <Col md={3}  className='d-flex flex-row justify-content-end align-items-center'>
                                                <div>
                                                    Total:
                                                </div>
                                            </Col>

                                            <Col md={4} className='d-flex flex-column px-3 justify-content-center align-items-end'>
                                                <div>
                                                    {cartTotalCost} kr
                                                </div>
                                            </Col>


                                            <Col className='d-flex flex-column mt-1 justify-content-center align-items-end'>
                                                <Button
                                                onClick={() => {setShow(true)}}>
                                                    Place order
                                                </Button>
                                            </Col>
                                            
                                        </Row>
                                        <Row className='px-1'>
                                            <small>
                                            You will be provided with a test credit card to complete your purchase.
                                            </small>
                                        </Row>

                                    </Container>
                                </div>
                            </>
                            :
                            <div className='d-flex px-2'>
                            <Container className="d-flex flex-column align-content-center justify-content-center border shadow bg-white"
                                style={{height: "150px"}}
                            >
                                <div
                                className="text-center">
                                    Your cart is empty. <br/>
                                    Added items will appear here.
                                
                                </div>
                            </Container>
                            </div>
                            }


                        </NavDropdown>
                    </div>
                    
                    <div>
                        <div className='px-5 mb-0'
                        style={{
                            position: 'absolute',
                        }}>
                            <h5>
                                {cartTotalItemsCount !== 0 && <>{cartTotalItemsCount}</>}
                            </h5>
                        </div>
                        <Image
                        src={ball_image}
                        alt="ball"
                        className='px-0 my-0'
                        width={60}
                        height={60}
                        />
                    </div>
                </Container>
            </Container>
        </Navbar>
        }


    <CheckoutMoudal setShow={setShow} show={show}/>



        </>











    )
}

export default NavigationBar;













