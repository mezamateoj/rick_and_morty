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
            <div className="card-container">
                <img src={character.image} alt="" />
                <div className="shade"></div>
                <div className="detail-text">
                    <h2>Name : {character.name}</h2>
                    <p>
                        <h3>ID: {character.id}</h3>
                        Specie: {character.species}<br></br>
                        Gender: {character.gender}
                    </p>
                    <h4>Status: {character.status}</h4>
                </div>
            </div>
        </div>
    )
}

export default Detail;