import React from 'react';
import axios from 'axios';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from './components/Favorites'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFav, logOut } from './redux/actions';
import SearchBar from './components/SearchBar';
// import Pagination from './components/Pagination';
// import Create from './components/Create';




function App({ removeFav, logOut }) {
   const navigate = useNavigate()

   const [characters, setCharacters] = useState([])

   const [access, setAccess] = useState(false)

   async function login(userData) {
      const { email, password } = userData;

      try {
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const response = await axios(URL + `?email=${email}&password=${password}`)
         const { data } = response

         if (data.access === false) {
            return alert('Wrong Credentials!')
         }

         setAccess(data.access)
         data.access && navigate('/home')

      } catch (error) {
         console.log(error)
      }
   }

   function logout() {
      setAccess(false)
      logOut()
      navigate('/')
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate])


   async function onSearch(id) {
      // check if id client is not a number
      if (isNaN(id)) {
         return alert('Please enter a numeric ID!');
      }

      try {
         const response = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`);
         const character = response.data;

         // If the character does not have a name or does not exist
         if (response.data.status === 404) {
            return alert('Please enter a valid ID!');
         }

         // If character already exists in the array
         if (characters.find((char) => char.id === character.id)) {
            return alert('Character already exists!');
         }

         // If character does not exist, add it to the array
         setCharacters((oldChars) => [...oldChars, character]);


      } catch (error) {
         if (error.response) {
            console.log(error.response.status);
            return alert('Please enter a valid ID!')
         }
      }
   }


   function onClose(id) {
      const numberId = Number(id);
      const filteredCharacters = characters.filter((character) => character.id !== numberId);
      setCharacters(filteredCharacters);
      removeFav(numberId)
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} onLogout={logout} />
         {/* <Pagination pages={pages} setCurrentPage={setCurrentPage} /> */}

         <SearchBar className="search-nav" onSearch={onSearch} onLogout={logout} />

         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            {/* <Route path='/home' element={<Pagination charsPerPage={charsPerPage} totalPosts={characters.length} paginate={paginate} />} /> */}
            <Route path='/about' element={<About />} />
            <Route path='/favorites' element={<Favorites onClose={onClose} />} />
            {/* <Route path='/create' element={<Create/>} /> */}
            <Route path='/detail/:id' element={<Detail />} />
         </Routes>
      </div>
   );
}

function mapDispatchToProps(dispatch) {
   return {
      removeFav: (id) => dispatch(removeFav(id)),
      logOut: () => dispatch(logOut())
   }
}

export default connect(null, mapDispatchToProps)(App);


