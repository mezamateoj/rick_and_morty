import React from "react";

export default function SearchBar({ onSearch }) {
   const [id, setId] = React.useState('')

   function handleChange(e) {
      setId(e.target.value)
   }

   // Remember to reset id after calling onSearch, 
   // so that the input field gets cleared after each search
   // This will clear the input field once the button is clicked
   function handleOnClick() {
      onSearch(id)
      setId('')
   }

   
   return (
      <div>
         <input className="field-search" 
            type='search' 
            placeholder="id.." 
            value={id}
            onChange={handleChange}
         />
         <button onClick={handleOnClick}>Add</button>
      </div>
   );
}

