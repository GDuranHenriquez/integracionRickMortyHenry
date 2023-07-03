import Card from './Card';

export default function Cards(props) {
   return <div>
      {props.characters.map((elem) => 
         (<Card
            key ={elem.id}
            name={elem.name}
            status={elem.status}
            species={elem.species}
            gender={elem.gender}
            origin={elem.origin.name}
            image={elem.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />)
      )}
   </div>;
}
