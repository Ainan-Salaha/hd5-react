import React, { useState } from 'react'
import'../../Style/hoc.css'

const HoComponent = (WrappedComponent) => {
    function HoComponent(){
        const[Counter,setcounter]=useState(0);
        const UpdateCounter=()=>{
          setcounter(Counter+1)
        }
    
  return (
    <div className='card'>
      <WrappedComponent Counter={Counter} UpdateCounter={UpdateCounter}/>
    </div>
  )
}
return HoComponent
}


export default HoComponent