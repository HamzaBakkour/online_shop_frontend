import  Container  from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";






function PaymentSuccess(){

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
                    Payment Success
                </h4>

                <div className="d-inline px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="green" class="bi bi-check-lg" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                    </svg>
                </div  >

                </Card.Title>
                <Card.Text>
                Your payment has been successfully processed.
                </Card.Text>
                <Button variant="primary"
                onClick={() => navigate('/')}
                >Go back to home page</Button>
            </Card.Body>
            </Card>
        </Container>
    )
}



export default PaymentSuccess;