import SearchBar from "./SearchBar";
// import About from "./About";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import Form from "./Form";


function Nav ({onSearch}) {
    const location = useLocation()
    if (location.pathname === '/') {
        // return <Form />
        return null
    }
    return (
        <nav className="nav">
            <h1>Rick and Morty</h1>
            <ul className="nav-items">
                <li> <SearchBar className='search-nav' onSearch={onSearch} /> </li>
                <li><NavLink style={{ textDecoration: 'none'}} className="about" to={'/about'}>About</NavLink></li> 
                <li><NavLink style={{ textDecoration: 'none' }} className='home' to={'/home'}>Home</NavLink></li>
                <li><NavLink style={{ textDecoration: 'none' }} className='fav' to={'/favorites'}>Favorites</NavLink></li>
                <li><NavLink style={{ textDecoration: 'none' }} className='logout' to={'/'}>Log Out</NavLink></li>
            </ul>
        </nav>
    )

}

export default Nav;