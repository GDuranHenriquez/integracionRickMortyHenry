import Card from './Card';
import styled from "styled-components";

const DivContainer = styled.div`
   max-width: 80%;
   display: flex;
   padding: 10px;
   margin: 0px auto;
   justify-content: center;
   flex-wrap: wrap;

   .container-cards {
      max-width: 100%;
      display: flex;
   }
`

export default function Cards(props) {
   return <DivContainer>
      
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
      
   </DivContainer>;
}
