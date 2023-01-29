import React from 'react';
import HoComponent from './HoComponent'

function HoverCounter(props) {
  const {Counter,UpdateCounter}=props;
  return (
    <>
     <h1 className='text'>Higher Order Component</h1>
    <h2 className='text'>On-Hover</h2>
    <div  className='count'>{Counter}
    <div><button onMouseOver={UpdateCounter} className='btn1'>HoverCounter</button></div>
      </div>
    </>
  )
}

export default HoComponent(HoverCounter);
