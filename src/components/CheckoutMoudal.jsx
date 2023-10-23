import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import React, { useState, useContext } from "react";
import axios from "axios";
import Badge from 'react-bootstrap/Badge';
import { Context } from '../pages/Home';

function CheckoutMoudal(props){

    const { contextData, setContextData } = useContext(Context);
    const [ validated, setValidated ] = useState(false);
    const [ orderPlaced, setOrderPlaced ] = useState(false);
    const [ form, setForm ] = useState({
        first_name: '',
        last_name: '',
        email: '',
        address: '',
        postal_code: '',
        city: ''
    });



    const handleProceedToPayment = () => {
        axios.defaults.withCredentials = true

        axios.post(`${process.env.REACT_APP_BASE_URL}/api/payment/check_out_session/`,
        {mode: 'cors', withCredentials: true, headers: {"Content-type": "application/json",}})
        .then((resp) => {
            window.open(resp.data);
            props.setShow(false)
            setOrderPlaced(false);
        })
        .catch((error)=> console.log("error: ", error))

    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('form submitted');
        const checkoutForm = event.currentTarget;
        if(checkoutForm.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);
        const data = {
            first_name: form.first_name,
            last_name: form.last_name,
            email: form.email,
            address: form.address,
            postal_code: form.postal_code,
            city: form.city
        };


        axios.post(`${process.env.REACT_APP_BASE_URL}/api/order/`,
        data,
        {mode: 'cors',withCredentials: true, headers: {"Content-type": "application/json",}})
        .then((res) => {
            setContextData({...contextData, cartUpdates: contextData.cartUpdates++})
            setOrderPlaced(true);
        })
        .catch((err) => {
            console.log("err", err);
        })
    };


return(

    <Modal show={props.show}
    style={{height: '100%'}}
    backdrop="static"
    keyboard={false}
    onHide={() => props.setShow(false)}
    
    >
        <Container className='mt-3'>
            <Row>
                <Col md={3} >
                    <h4 className='my-0'>FunnyShop</h4>
                    <h5 className='px-4 mt-0 pt-0 my-0 text-danger'>Pokèmon</h5>
                </Col>
                <Col md={12}  className='d-flex align-items-center justify-content-center' >
                    <h3 className='d-flex' >
                        Checkout
                    </h3>
                </Col>
            </Row>
        </Container>

        <hr class="divider"></hr>



        <div style={{ height: '700px'}} className='d-flex flex-column align-items-center'>

            {orderPlaced ? 
            
            <Container style={{height: '500px'}} className='d-flex flex-column justify-content-center align-items-center'>
                <p className='text-center'>
                    Your order has been successfully placed.<span className='fs-3'>&#127881;</span><br />
                    An e-mail with order content has been sent to { form.email} <br /> <br />
                    You will be sent to a checkout page to pay for your order. <br />
                    Please <span className='text-danger fw-bold'>do not</span> use a real credit card info to complete your purchase. <br />
                    Instead use this test card with number <br /> 
                    <Badge pill   className='fw-normal fs-5 my-2 '>4242 4242 4242 4242 
                        <Button onClick={() =>  navigator.clipboard.writeText('4242424242424242')}>
                            Copy
                        </Button>
                    </Badge>
                    <br/>
                    Any expiration date and CVC code will work.
                </p>
                <Button
                style={{width: '80%'}}
                onClick={handleProceedToPayment}>Proceed</Button>
            </Container>

            :

            <Form
            variant={'dark'}
            style={{width: '95%'}}
            onSubmit = {handleSubmit}>
                <div  className='d-flex flex-column justify-content-top align-items-center border'>
                    <Form.Group style={{width: '60%'}}   className="my-3">
                    <Form.Label >First name</Form.Label>
                    <Form.Control
                    type="text"
                    value={form.first_name}
                    onChange={(e) => setForm({...form, first_name: e.target.value})}
                    />
                    </Form.Group>
                    
                    <Form.Group style={{width: '60%'}}   className="my-3">
                    <Form.Label >Last name</Form.Label>
                    <Form.Control type="text"
                    value={form.last_name}
                    onChange={(e) => setForm({...form, last_name: e.target.value})}
                    />
                    </Form.Group>

                    <Form.Group style={{width: '60%'}}   className="my-3">
                    <Form.Label >Email</Form.Label>
                    <Form.Control
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    />
                    </Form.Group>

                    <Form.Group style={{width: '60%'}}   className="my-3">
                    <Form.Label >address</Form.Label>
                    <Form.Control
                    type="text"
                    value={form.address}
                    onChange={(e) => setForm({...form, address: e.target.value})}
                    />
                    </Form.Group>

                    <Form.Group style={{width: '60%'}}  className="my-3">
                    <Form.Label >Postal code</Form.Label>
                    <Form.Control
                    type="number"
                    value={form.postal_code}
                    onChange={(e) => setForm({...form, postal_code: e.target.value})}
                    />
                    </Form.Group>

                    <Form.Group style={{width: '60%'}}   className="my-3">
                    <Form.Label >City</Form.Label>
                    <Form.Control
                    type="text"
                    value={form.city}
                    onChange={(e) => setForm({...form, city: e.target.value})}
                    />
                    </Form.Group>
                </div>

                <Container className='d-flex flex-row mb-4 mt-3 justify-content-end align-items-end'>
                    <Button
                    className='mx-2'
                    variant="secondary"
                    onClick={() => props.setShow(false)}>
                        Close
                    </Button>
                    <Button type="submit">Checkout</Button>
                </Container>
            </Form>
            }
        </div>
    </Modal>

    )

}


export default CheckoutMoudal;