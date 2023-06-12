import React from 'react';
import Card from './Card';
// https://react.dev/learn/passing-props-to-a-component

export default function Cards(props) {
   return (
   <div>
      {
         React.Children.toArray(props.characters.map(character => {
            return (
             <>
               <Card 
               {...character}
               onClose={() => window.alert('Emulamos que se cierra la card')}

               />
             </>  
            )
         }))
      }
   </div>
   ); 
}
