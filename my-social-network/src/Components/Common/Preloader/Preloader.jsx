import React from 'react';
import preloader from './../../../assets/images/preloader.svg'

const Preloader = (props) => {
  return ( 
    <div style={{backgroundColor: 'white'}}>
      <img src={preloader} alt='img'/> 
    </div>   
  )
}

export default Preloader; 