import axios from "axios";
import  Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import  Button  from "react-bootstrap/Button";
import { Context } from '../pages/Home';
import React, { useContext } from "react";


function CartItem(props){

    const {
        id,
        product_image,
        quantity,
        price,
        name
        } = props;

        const { contextData, setContextData } = useContext(Context);


        function deleteItem(){
            axios.delete(`${process.env.REACT_APP_BASE_URL}/api/cart/${id}`, {mode: 'cors',withCredentials: true, headers: {"Content-type": "application/json"}})
            .then(() => setContextData({...contextData, cartUpdates: contextData.cartUpdates++}))
            .catch(err => console.log(err))
        }


    return(
    <Container className="d-flex flex-column align-content-center border border-primary rounded-1  my-1 shadow  bg-white rounded">
        <Row className="align-items-center">
            <Col>
                <Image
                src={product_image}
                width={50}
                hight={50}
                roundedCircle
                />
            </Col>

            <Col >
                {name}
            </Col>

            <Col >
                {price} kr
            </Col>

            <Col >
                {quantity}
            </Col>

            <Col className="d-flex justify-content-center align-items-center">
                <Button
                variant="outline-danger"
                style={{width: '30px'}}
                size="sm"
                className="d-flex justify-content-center align-items-center  px-0 my-0"
                onClick={deleteItem}
                >
                x
                </Button>
            </Col>

        </Row>
    </Container>)

}

export default CartItem;


// Name: {productDetailes.name} ID: {product_id}, Quantity: {quantity}, Price: {price}, HB: {productDetailes.hb}
