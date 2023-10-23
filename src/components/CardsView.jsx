import { Context } from '../pages/Home';
import React, { useState, useContext } from "react";
import PokemonCard from './PokemonCard';

import useSWR from "swr";
import { fetcher_no_auth } from "../helpers/axios";

function CardsView(){

    const { contextData } = useContext(Context);


    const { data: cards,
        error,
        isLoading } = useSWR(
            ()=> contextData.category ?
            [`${process.env.REACT_APP_BASE_URL}/api/product?category=${contextData.category}`] : 
            [`${process.env.REACT_APP_BASE_URL}/api/product/`],
            fetcher_no_auth
            );



    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>



    let cardArray = Array.from(cards.results);


    return(
        <div class="d-flex justify-content-center flex-wrap">
            {
                cardArray.filter(card => {


                    if (contextData.category || typeof contextData.search === 'undefined'){
                        return card
                    }

                    else if (card.name.toLowerCase().includes(contextData.search)){
                        return card
                    }
                    else{
                        return null
                    }


                }).map((card, _index) => (
                    <PokemonCard
                    name= {card.name}
                    hb = {card.hb}
                    attack = {card.attack}
                    defense = {card.defense}
                    speed = {card.speed}
                    image = {card.image}
                    category_image = {card.category_image}
                    category_color = {card.category_color}
                    _id = {card.id}
                    price = {card.price}
                    />
                ))
            }


        </div>
    )
}


export default CardsView;


