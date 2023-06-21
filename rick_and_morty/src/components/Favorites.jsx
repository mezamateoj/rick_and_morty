import { Card } from "./Card";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../redux/actions";
import { useState } from "react";

export function Favorites({myFavorites, onClose}) {
    const [aux, setAux] = useState(false)
    
    const dispatch = useDispatch();

    function handleOrder(e) {
        dispatch(orderCards(e.target.value))
    }

    function handleFilter(e) {
        dispatch(filterCards(e.target.value))
        setAux(!aux)
    }

    

    return (
        <>  
            <select onChange={handleOrder} name="" id="">
                <option value="A">Ascendent</option>
                <option value="D">Descendent</option>
            </select>
            <select onChange={handleFilter} name="" id="">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            {
                myFavorites?.map(e => <Card key={e.id} id={e.id} 
                    {...e} 
                    onClose={onClose}
                    myFavorites={myFavorites} 
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

export default connect(mapStateToProps, null)(Favorites);

