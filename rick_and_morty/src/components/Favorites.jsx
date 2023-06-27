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
                <select  onChange={handleOrder} name="" id="">
                    <option value="A">Ascendent</option>
                    <option value="D">Descendent</option>
                </select>
                <select  onChange={handleFilter} name="" id="">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
                <button onClick={handleReset} >Reset</button>
                {
                    myFavorites?.map(e => <Card key={e.id} id={e.id} 
                        {...e} 
                        onClose={onClose}
                        myFavorites={myFavorites} 
                        addFav={addFav}
                        removeFav={removeFav}
                        />)
                }
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

