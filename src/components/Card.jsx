import React from "react";
import styled from "styled-components";
import imgBackName from '../assets/fondos/card/name.jpg'
import imgBackData from '../assets/fondos/card/data.jpg' 


const DivCard = styled.div`
   display: flex;
   flex-direction: column;
   position: relative;
   margin: 8px;
   width: 200px;
   height: 300px;
   color: white;
   border-radius: 10px;
   border: 1px solid rgba(255, 255, 255, 0.3);
   font-size: 10px;
   &:hover{
      box-shadow: 0px 0px 8px 8px rgba(255, 255, 255, 0.6);
   }

   .name-person {
      background-size: 100% 100%;
      background-repeat:no-repeat;
      background-size: cover;
      width: 100%;
      height: 50px;
      border-radius: 10px 10px 0 0;
      border-bottom: 1px solid;
      }

   button{
      pading: 2px;
      border-radius: 10px;
      border: 1px solid;
      background-color: #86F533;
      position: absolute;
      top: 1px; 
      right: 1px;
   }

   .data-person{
      background-size: 100% 100%;
      background-repeat:no-repeat;
      background-size: cover;
      width: 100%;
      height: 100%;
      border-radius: 0 0 10px 10px;
      }

   .data-person > img{
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 0 0 10px 10px;
      background-size: 100% 100%;
      background-repeat:no-repeat;
      background-size: cover;
   }

   .data-card{
      display: grid;
      grid-template-columns: 80px 1fr;
      grid-template-rows: 25px 1fr;
      width:100%;
      height:80px;
      bottom: 0px;
      opacity: 0.75;
      border-radius: 0 0 10px 10px;
      right:0px;
      position:absolute;
      font-size: 8px;
      font-weight: bold;
      grid-auto-rows: minmax(30%, 50%);
      align-items: center;
   }

   .data-card > .one {
      grid-column: 1;
      grid-row: 1;
      border-bottom: 1px solid;
      
    }
    .data-card > .two {
      grid-column: 2;
      grid-row: 1;
      border-bottom: 1px solid;
    }
    .data-card > .three {
      grid-column: 1;
      grid-row: 2;
      
    }
    .data-card > .four {
      grid-column: 2;
      grid-row: 2;
      
    }


`;

export default class Card extends React.Component {
   render(){
      const data = this.props;
      return (
         <DivCard>
            <button onClick={data.onClose}>X</button>
            <div className="name-person" style= {{backgroundImage: `url(${imgBackName})`}}>
               <h2>{data.name}</h2>         
            </div> 
            <div className="data-person" style= {{backgroundImage: `url(${data.image})`}}>
               {/* <img src = {data.image} alt= 'img'></img> */}
               <div className = 'data-card' style= {{backgroundImage: `url(${imgBackData})`}}>
                  <div className="one"><h2>{data.status}</h2></div>
                  <div className="two"><h2>{data.species}</h2></div>
                  <div className="three"><h2>{data.gender}</h2></div>
                  <div className="four"><h2>{data.origin}</h2></div>
                  
                  
                  
                  
               </div>
                          
            </div>           
         </DivCard>
      );
   }
}
