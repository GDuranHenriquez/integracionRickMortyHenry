import React from "react";

export default function BackgroundVideo(props){
  return (<div className='backgroundVideo'>
    <video 
      src = {props.url} 
      autoPlay 
      loop 
      muted 
      width="100%" 
      height="100%"/>
  </div>)
}