import React from 'react';
import ReactPlayer from 'react-player/youtube'

const Home = () =>{
  return(
   <div>
     <ReactPlayer
        className='react-player'
        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        width='100%'
        height='100%'
        muted={true}
        loop={true}
    />
   </div>
    
  )
}
export default Home;