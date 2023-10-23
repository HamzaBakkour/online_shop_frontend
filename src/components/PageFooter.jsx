import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';







function PageFooter()


{


return(



<Container className='d-flex flex-column mt-4 pt-2 justify-content-center align-items-center'  style={{background: 'white'}}>

    <Row className='mt-4'>
        <div>
            <h4 className='my-0'>FunnyShop</h4>
            <h5 className='px-4 mt-0 pt-0 my-0 text-danger'>Pokèmon</h5>
        </div>
    </Row>

    <Row className='mt-2'>
        <p>
            Hamza Bakkour 2023
        </p>
    </Row>

    <Row>
        <hr className='mb-2'/>
        <p>
            <a href="#" className="link-primary  p-3 text-decoration-none">API</a>
            <a href="#" className="link-primary  p-3 text-decoration-none">Backend</a>
            <a href="#" className="link-primary  p-3 text-decoration-none">Frontend</a>
        </p>
    </Row>

    <Row className='mb-5'>
        <div className='d-flex flex-inline'>
            <div className='px-2'>
            Pokèmon images: <span> <a href="https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_category"
            target="_blank"
            rel="noreferrer"
            className="link-primary px-1 text-decoration-none">bulbagarden.net</a> </span>
            </div>

            <div className='px-2 mb-2'>
            Animated background: <span> <a href="https://moewalls.com/"
            target="_blank"
            rel="noreferrer"
            className="link-primary px-1 text-decoration-none">moewalls.com</a> </span>
            </div>
        </div>
    </Row>

</Container>

)

}




export default PageFooter;