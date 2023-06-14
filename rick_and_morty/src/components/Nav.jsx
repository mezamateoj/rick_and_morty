import SearchBar from "./SearchBar";
// import About from "./About";
import { NavLink } from "react-router-dom";


function Nav ({onSearch}) {
    return (
        <nav className="nav">
            {/* <h1 className="title">Rick and Morty</h1> */}
            <SearchBar onSearch={onSearch} />
            <NavLink className={'about'} to={'/about'}>About</NavLink> 
            <NavLink className={'Home'} to={'/'}>Home</NavLink> 
        </nav>
    )

}

export default Nav;