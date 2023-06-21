import { Card } from "./Card";
import { connect } from "react-redux";
// import { addFav, removeFav } from "../redux/actions";

export function Favorites({myFavorites, addFav, removeFav, onClose}) {
    return (
        <>
            {
                myFavorites?.map(e => <Card key={e.id} id={e.id} 
                    {...e} 
                    onClose={onClose}
                    addFav={addFav}
                    removeFav={removeFav}
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

