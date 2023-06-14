import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";


function Detail() {
    const { id } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
            window.alert('No character with that ID')
            }
        })
        return setCharacter({});
    }, [id]);

    return (
        <div className="detail-container">
        <div className="detail-text">
            <h1>{character.id}</h1>
            <h3>{character.status}</h3>
            <h3>{character.species}</h3>
            <h3>{character.gender}</h3>
        </div>
        <img src={character.image} alt="" />
    </div>
    )
}

export default Detail;