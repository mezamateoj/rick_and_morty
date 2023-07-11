import { useState } from "react";
import axios from "axios";



export default function Create() {
    const [prompt, setPrompt] = useState("");
    const [imageUrl, setImage] = useState('');

    async function createImg() {
        const url = "http://localhost:3001/rickandmorty/create";
        const data = { prompt };
        const response = await axios.post(url, data);
        const imgSrc = response.data.src;
        // const response = await axios.post('http://localhost:3001/rickandmorty/create', {
        //         prompt,
        //     });
        //     console.log('Response:', response.data);
        //     setImage(response.data.src) 
        setImage(imgSrc) 
    }

    const handleChange = (e) => {
        setPrompt(e.target.value);
    };

    return (
        <div>
            <h1>CREATE</h1>
            <input type="text" onChange={handleChange} placeholder="Enter img description" />
            <button type="submit" onClick={createImg}>Submit</button>
            {imageUrl && <img src={imageUrl} alt="prompt"  />}
        </div>   
    )

}