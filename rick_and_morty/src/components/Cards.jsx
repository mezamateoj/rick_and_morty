import React from 'react';
import Card from './Card';
// https://react.dev/learn/passing-props-to-a-component

export default function Cards(props) {
   return (
   <div className='cards-container'>
      {
         React.Children.toArray(props.characters.map(character => {
            return (
             <>
               <Card 
               id={character.id}
               {...character}
               onClose={props.onClose}

               />
             </>  
            )
         }))
      }
   </div>
   ); 
}
