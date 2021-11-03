import React from 'react';
import video from '../../assests/ThrobacLogoFIN.mp4'

const Home = () =>{
  return(
   <div className="container">
    <video autoPlay playsInline controls={true} muted loop src={video} />
   </div>
  )
}
export default Home;