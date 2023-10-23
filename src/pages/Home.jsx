import UpperPanel from "../components/UpperPanel";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CardsView from "../components/CardsView";
import React, { createContext, useMemo, useState } from "react";
import '../components/effects.css'
import PageFooter from "../components/PageFooter";

import NavigationBar from "../components/NavigationBar";

export const Context = createContext("unknown");


function Home(){




    const [ contextData, setContextData ] = useState({
        category: "",
        search: "",
        showNavBar: true,
        cartUpdates: 1,
    });


    const value = useMemo(() => ({
        contextData,
        setContextData,
        }),
        [contextData]);


    


    return(
        <>
        <Context.Provider value = {value}>

            <NavigationBar/> 
            <Container fluid >
                <Row>
                    <UpperPanel />
                </Row>

                {(contextData.search !== "" || contextData.category !== "") && 
                <Row className='d-flex flex-column justify-content-center align-items-center'>
                <Col style={{height: '1000px'}}  md={12} >
                    <CardsView  success/>
                </Col>
                </Row>
                }

                {(contextData.search === "" && contextData.category === "") && 
                <Row className='d-flex flex-column justify-content-center align-items-center'>
                <Col md={12} >
                    <CardsView  success/>
                </Col>
                </Row>
                }

                <Row>
                    <PageFooter />
                </Row>


            </Container>



        </Context.Provider>

        </>


        )
};

export default Home;




// style={{height: '1000px'}}