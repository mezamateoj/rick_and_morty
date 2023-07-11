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
// import Pagination from './components/Pagination';
// import Create from './components/Create';




function App({removeFav, logOut}) {
   const navigate = useNavigate()

   const [characters, setCharacters] = useState([])

   const [access, setAccess] = useState(false)

   // // where the user is in the app
   // const [currentPage, setCurrentPage] = useState(1)
   // // number of characters per page
   // const [charsPerPage] = useState(8)


   // // index of the last character of the page
   // const lastCharIndex = currentPage * charsPerPage
   // // index of the first character of the page
   // const firstCharIndex = lastCharIndex - charsPerPage
   // // // calculate the number of pages
   // // const pages = Math.ceil(characters.length / charsPerPage)
   // // records to be displayed on the current page
   // const currentChars = characters.slice(firstCharIndex, lastCharIndex)

   // const paginate = (pageNumber) => {
   //    setCurrentPage(pageNumber);
   // };


   async function login(userData) {
      const { email, password } = userData;

      try {
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const response = await axios(URL + `?email=${email}&password=${password}`)
         const { data } = response

         if(data.access === false) {
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


   // push which is not the correct way to update state in React. 
   // push modifies the original array and doesn't return a new array, 
   // which can lead to unpredictable state change
   // function onSearch(id) {
   //    axios.get(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
   //       if (data.name) {
   //          if (characters.find((character) => character.id === data.id)) {
   //             return window.alert('Character already exists!');
   //          }
   //          setCharacters((oldChars) => [...oldChars, data]);

   //       } else {
   //          window.alert('Please enter a valid ID!');
   //       }
   //    }).catch((error) => {  // handle if user inputs letters
   //       if(error.response) {
   //          console.log(error.response.status);
   //          alert('Please enter a valid ID!')
   //       }
   //    })
   // }
   // async function onSearch(id) {
   //    // check if id client is not a number
   //    if (isNaN(id)) {
   //       return alert('Please enter a numeric ID!');
   //    } 
   //    try {
   //       const response = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)

   //       if (response.data && response.data.name) {
   //          console.log(response.data)
   //          const character = response.data

   //          // case when character already exists
   //          if (characters.find((char) => char.id === character.id)) {
   //                return alert('Character already exists!')
   //          }
   //          // add the new character to the array
   //          setCharacters((oldChar) => [...oldChar, response.data])

   //       } else {
   //          return alert('Character Not Found')
   //       }

   //    } catch (error) {
   //       console.log(error.response?.status  || error.message)
   //       alert('Error');
         
   //    }
   // }
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
         if(error.response) {
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
         <Nav onSearch={onSearch} onLogout={logout}/>
         {/* <Pagination pages={pages} setCurrentPage={setCurrentPage} /> */}
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            {/* <Route path='/home' element={<Pagination charsPerPage={charsPerPage} totalPosts={characters.length} paginate={paginate} />} /> */}
            <Route path='/about' element={<About/>} />
            <Route path='/favorites' element={<Favorites onClose={onClose}/>} />
            {/* <Route path='/create' element={<Create/>} /> */}
            <Route path='/detail/:id' element={<Detail />}/>
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


