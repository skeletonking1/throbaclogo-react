import React from 'react';


const Home = () =>{
  return(
    <div
      style={{width:'100%',height:'100%'}}
      dangerouslySetInnerHTML={{ __html: `
      <video
        muted
        autoplay
        loop
        playsinline
        src='./ThrobacLogoFIN.mp4'
      />
    ` }}
    >
    </div>
  )
}
export default Home;