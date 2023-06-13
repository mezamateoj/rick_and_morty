import React from 'react';
import axios from 'axios';
import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
// import SearchBar from './components/SearchBar.jsx';
// import characters from './data.js';

const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};


function App() {
   const [characters, setCharacters] = React.useState([])

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
            window.alert('ID does not exist! Please enter a valid ID!');
         }
      });
   }

   function onClose(id) {
      const numberId = Number(id);
      const filteredCharacters = characters.filter((character) => character.id !== numberId);
      setCharacters(filteredCharacters);
   }
   
   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
