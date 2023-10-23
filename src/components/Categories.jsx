import { Context } from '../pages/Home';

import React, { useContext } from "react";

import useSWR from "swr";
import { fetcher_no_auth } from "../helpers/axios";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Badge from 'react-bootstrap/Badge';

import Button from 'react-bootstrap/Button';


function Categories() {

    const { data: categories,
            error,
            isLoading } = useSWR(`${process.env.REACT_APP_BASE_URL}/api/category/`, fetcher_no_auth);

    const { contextData, setContextData } = useContext(Context);

    const categorySet = category => event => {
        event.preventDefault();

        setContextData({
            ...contextData, 
            category: category
        });
    }



    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    

return (
    <div className='d-flex my-2'>

<Badge
                    pill
                    as={Button}
                    bg= {"light"}
                    text={"dark"}
                    onClick={categorySet("")}
                    >
                        <Container>
                            <Row>
                                <Col className='px-0 my-0'>
                                
                                </Col>
                                <Col className='px-1 my-0' >
                                    <h6>All</h6>
                                </Col>
                            </Row>
                        </Container>
                    </Badge>
                    <div className='px-1' />



        {categories.results && categories.results.map(
            function(category, _index) {
                return (
                    <>
                    <Badge
                    pill
                    as={Button}
                    bg= {category.color}
                    onClick={categorySet(category.slug)}
                    >
                        <Container>
                            <Row>
                                <Col className='px-0 my-0'>
                                <Card.Img
                                    variant="top"
                                    src={category.image}
                                    height={25}
                                    width={30}
                                    
                                    />
                                </Col>
                                <Col className='px-1 my-0' >
                                    <h6>{category.name}</h6>
                                </Col>
                            </Row>
                        </Container>
                    </Badge>
                    <div className='px-1' />
                    </>
                );
            }
        )}
    </div>
);
}

export default Categories;


