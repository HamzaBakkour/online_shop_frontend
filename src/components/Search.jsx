import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Context } from '../pages/Home';
import React, { useContext } from "react";


function Search(){

    const { contextData, setContextData } = useContext(Context);

    return(
            <InputGroup
            style={{width: '20vw'}}
            className="my-0 pr-1"
            >
                <Form.Control
                aria-label="Text input with dropdown button"
                onChange={(e) => setContextData({...contextData, category: ''  , search: e.target.value})}/>
            </InputGroup>
    )
}

export default Search;