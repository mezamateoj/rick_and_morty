import React from 'react';
import axios from 'axios';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




function App() {
   const navigate = useNavigate()

   const [characters, setCharacters] = useState([])

   const [access, setAccess] = useState(false)

   const EMAIL = 'mezamateoj@gmail.com'
   const PASSWORD = 'Pepito13'

   function login(data) {
      if (data.email === EMAIL && data.password === PASSWORD) {
         setAccess(true)
         navigate('/home');
      } else {
         setAccess(false)
         navigate('/')
         alert('Wrong Credentials')
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access])

   // push which is not the correct way to update state in React. 
   // push modifies the original array and doesn't return a new array, 
   // which can lead to unpredictable state change
   function onSearch(id) {
      axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            if (characters.find((character) => character.id === data.id)) {
               return window.alert('Character already exists!');
            }
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('Please enter a valid ID!');
         }
      }).catch((error) => {  // handle if user inputs letters
         if(error.response) {
            console.log(error.response.status);
            alert('Please enter a valid ID!')
         }
      })
   }

   function onClose(id) {
      const numberId = Number(id);
      const filteredCharacters = characters.filter((character) => character.id !== numberId);
      setCharacters(filteredCharacters);
   }
   
   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail />}/>
         </Routes>
      </div>
   );
}

export default App;
