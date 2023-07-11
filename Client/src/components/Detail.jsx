import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";


function Detail() {
    const { id } = useParams()
    const [character, setCharacter] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert('No character with that ID')
                }
            } catch (error) {
                console.error("Error fetching character:", error);
            } finally {
                setLoading(false);  // Set loading to false when finished fetching
            }
        }

        fetchCharacter();
    }, [id]);

    // if (loading) return ;



    return (
        <div className="detail-container">
            { loading ?
                (
                    <div class="loader">
                        <div data-glitch="Loading..." class="glitch">Loading...</div>
                    </div>

                ) :
                
                (<div className="card-container">
                        <img src={character.image} alt="" />
                        <div className="shade"></div>
                        <div className="detail-text">
                            <h2>{character.name}</h2>
                            <p>
                                <h3>ID: {character.id}</h3>
                                {character.species}<br></br>
                                {character.gender}
                            </p>
                            <h4>Status: {character.status}</h4>
                        </div>
                    </div>) 
            }
        </div>
    )
}

export default Detail;