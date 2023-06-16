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
            <div className="img-container">
                <img src={character.image} alt="" />
            </div>
            <div className="detail-text">
                <h1>ID {character.id}</h1>
                <h3>Status {character.status}</h3>
                <h3> Specie {character.species}</h3>
                <h3>Gender {character.gender}</h3>
            </div>
        </div>
    )
}

export default Detail;