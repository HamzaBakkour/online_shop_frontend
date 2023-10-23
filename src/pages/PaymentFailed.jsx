import  Container  from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";






function PaymentFailed(){

    const navigate = useNavigate();

    return(
        <Container
        className="d-flex flex-column justify-content-center align-items-center"
        style={{height: '60vh'}}
        >
            <Card
            className="text-center"
            style={{
                shadowOffset: { width: 20, height:20 },
                shadowOpacity: 5,
                shadowRadius: 5,
                boxShadow: '0px 0px 19px #F4AAB9'
            }}
            >
            <Card.Body>
                <Card.Title >

                <h4 className="d-inline">
                    Payment Failed
                </h4>

                <div className="d-inline px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="red" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>

                </div  >
                </Card.Title>
                <Card.Text>
                Something went wrong while processing your payment.
                </Card.Text>
                <Button variant="primary"
                onClick={() => navigate('/')}
                >Go back to home page</Button>
            </Card.Body>
            </Card>
        </Container>
    )
}



export default PaymentFailed;