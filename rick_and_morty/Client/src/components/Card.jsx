import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { connect } from 'react-redux';
import { useState } from "react";
import { useEffect } from "react";


export function Card(props) {
   const [isFav, setIsFav] = useState(false)

   useEffect(() => {
      const isFav = props.myFavorites.find((fav) => fav.id === props.id);
      setIsFav(!!isFav);
   }, [props.myFavorites, props.id]);

   function handleFavorite() {
      if (isFav) {
         props.removeFav(props.id)
         setIsFav(false)
      } else {
         props.addFav({
            id: props.id,
            name: props.name,
            status: props.status,
            species: props.species,
            gender: props.gender,
            image: props.image
         });
         setIsFav(true);
      }
   }

   return (
      <div className="card">
         <img className="card-img" src={props.image} alt='' />

         <div className="card-text">
            {isFav ? (
               <button onClick={handleFavorite}>❤️</button>) : 
               (<button onClick={handleFavorite}>🤍</button>)
            }      
            <h2>ID: {props.id}</h2>
            <Link to={`/detail/${props.id}`}>
               <h2>Name: {props.name}</h2>
            </Link>
            <h2>{props.status} - <span>{props.species}</span></h2>
            <h2>{props.gender}</h2>
         </div>
         <button className="btn-close" onClick={() => props.onClose(props.id)}>X</button>

      </div>
   );
}

function mapStateToProps(state) {
   return {
       myFavorites: state.myFavorites
   }
}

function mapDispatchToProps(dispatch) {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

