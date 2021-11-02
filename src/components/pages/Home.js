import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube'

const Home = () =>{
  const [mutable,setMutable] = useState(false);
  return(
   <div>
     <ReactPlayer
        className='react-player'
        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        width='100%'
        height='100%'
        muted={mutable}
        playing={true}
        loop={true}
        controls={true}
    />
   </div>
    
  )
}
export default Home;