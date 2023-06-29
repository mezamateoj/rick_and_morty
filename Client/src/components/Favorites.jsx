    import { Card } from "./Card";
    import { connect } from "react-redux";
    import { useDispatch } from "react-redux";
    import { filterCards, orderCards } from "../redux/actions";
    import { useState } from "react";
    import { addFav, removeFav,resetFilters} from "../redux/actions";


    /// currently there is a bug when i go back to the filter remove fav in fav
    export function Favorites({myFavorites, onClose, addFav, removeFav}) {
        const [aux, setAux] = useState(false)
        
        const dispatch = useDispatch();

        function handleOrder(e) {
            dispatch(orderCards(e.target.value))
        }

        function handleFilter(e) {
            dispatch(filterCards(e.target.value))
            setAux(!aux)
        }

        function handleReset() {
            dispatch(resetFilters())
        }


        return (
            <>  
                <div className="filters-fav">
                    {/* <h1>Favorite cards</h1> */}
                    <select  onChange={handleOrder} name="" id="" className="order-filter">
                        <option value="A">Ascendent</option>
                        <option value="D">Descendent</option>
                    </select>
                    <select  onChange={handleFilter} name="" id="" className="gender-filter">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">unknown</option>
                    </select>
                    <button className="reset-filters" onClick={handleReset} >Reset</button>
                </div>
                <div className="cards-container">
                {
                    myFavorites?.map(e => 
                    
                    <Card key={e.id} id={e.id} 
                        {...e} 
                        onClose={onClose}
                        myFavorites={myFavorites} 
                        addFav={addFav}
                        removeFav={removeFav}
                        />)
                }
                </div>
            </>
        )
    }


    function mapStateToProps(state) {
        return {
            myFavorites: state.myFavorites
        }
    }

    function mapDispatchToProps(dispatch) {
        return {
        addFav: (character) => dispatch(addFav(character)),
        removeFav: (id) => dispatch(removeFav(id)),
        resetFilters: () => dispatch(resetFilters())
        }
    }
    

    export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

