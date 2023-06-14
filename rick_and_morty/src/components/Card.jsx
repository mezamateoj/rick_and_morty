export default function Card(props) {
   return (
      <div className="card">
         <img className="card-img" src={props.image} alt='' />

         <div className="card-text">      
            <h2>ID: {props.id}</h2>
            <h2>Name: {props.name}</h2>
            <h2>{props.status} - <span>{props.species}</span></h2>
            <h2>{props.gender}</h2>
         </div>
         <button className="btn-close" onClick={() => props.onClose(props.id)}>X</button>

      </div>
   );
}
