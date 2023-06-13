export default function Card(props) {
   return (
      <div className="card">
         <button className="btn-close" onClick={() => props.onClose(props.id)}>X</button>
         <h2>{props.id}</h2>
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img id="image" src={props.image} alt='' />
      </div>
   );
}
