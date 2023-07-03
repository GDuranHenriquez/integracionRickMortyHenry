import React from 'react';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters, { Rick } from './data.js';


export default function Main() {
   return (
      <div className='App'>
         <BackgroundVideo url = 'https://videos.files.wordpress.com/df9rs4O0/rick-1.mp4'></BackgroundVideo>

         <div className='content'>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
            <Cards characters={characters} />
            <Card
               id={Rick.id}
               name={Rick.name}
               status={Rick.status}
               species={Rick.species}
               gender={Rick.gender}
               origin={Rick.origin.name}
               image={Rick.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
            />
		   </div>       
      </div>
   );
}

