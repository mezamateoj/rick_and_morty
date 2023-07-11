import SearchBar from "./SearchBar";
// import About from "./About";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import Form from "./Form";


function Nav ({onSearch, onLogout }) {
    const location = useLocation()

    if (location.pathname === '/') {
        // return <Form />
        return null
    }

    function handleLogout() {
        onLogout()
    }


    return (
        <nav className="nav">
            <div class="container">
                <h2 class="title">
                    <span class="title-word title-word-1">Rick</span>
                    <span class=""> </span>
                    <span class="title-word title-word-2">and</span>
                    <span class=""> </span>
                    <span class="title-word title-word-3">Morty</span>
                    
                </h2>
            </div>
            
            <ul className="nav-items">
                <li> <SearchBar className='search-nav' onSearch={onSearch} /> </li>
                <li><NavLink style={{ textDecoration: 'none', color: '#181818' }} className='home' to={'/home'}>Home</NavLink></li>
                <li><NavLink style={{ textDecoration: 'none', color: '#181818'}} className='fav' to={'/favorites'}>Favorites</NavLink></li>
                <li><NavLink style={{ textDecoration: 'none', color: '#181818'}} className="create" to={'/create'}>Create</NavLink></li> 
                <li><NavLink style={{ textDecoration: 'none', color: '#181818'}} className="about" to={'/about'}>About</NavLink></li> 
                <li><NavLink style={{ textDecoration: 'none', color: '#181818' }} className='logout' to={'/'} onClick={handleLogout}>Log Out</NavLink></li>
            </ul>
        </nav>
    )

}

export default Nav;