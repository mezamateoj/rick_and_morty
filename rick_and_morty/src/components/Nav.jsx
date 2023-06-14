import SearchBar from "./SearchBar";


function Nav ({onSearch}) {
    return (
        <nav className="nav">
            <h1 className="title">Rick and Morty</h1>
            <SearchBar onSearch={onSearch} />
        </nav>
    )

}

export default Nav;