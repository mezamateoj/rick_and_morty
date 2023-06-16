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
            {/* <h1 className="title">Rick and Morty</h1> */}
            <SearchBar onSearch={onSearch} />
            <NavLink className={'about'} to={'/about'}>About</NavLink> 
            <NavLink className={'Home'} to={'/home'}>Home</NavLink> 
            <NavLink className={'LogOut'} to={'/'}>Log Out</NavLink>
        </nav>
    )

}

export default Nav;