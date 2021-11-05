import React from 'react';
import { useState } from 'react/cjs/react.development';
import video from '../../assests/ThrobacLogoFIN.mp4'

const Home = () =>{
  const [mute,setMute] = useState(true);
  const toggleMute = () =>{
    setMute(!mute)
  }
  return(
    <div className="container">
      <div className="text-center">
        <video autoPlay muted={mute} loop src={video} className="col-12 px-0" />
        <button type="button" 
          className="btn btn-lg btn-black" 
          style={{color:'white'}}
          onClick={toggleMute}
        >{mute===true?'Unmute':'Mute'}</button>
      </div>
    </div>
  )
}
export default Home;