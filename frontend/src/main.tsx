import { useState } from 'react';
import myImage from './/JoelHiltonHeadsho.jpg';

function Mains() {
  return (
    <div className="Main">
      <h1>Welcome to My Website!</h1>
      <img src={myImage} alt="Joel" />
      <h3> You have entered to my page of AWESOMENESSS</h3>
      <h3>
        {' '}
        Go to the Podcasts page to see my awesome podcasts! Hed over to my
        Movies page to see the best move database you could ever imagane!
      </h3>
    </div>
  );
}

export default Mains;
