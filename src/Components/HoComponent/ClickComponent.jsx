import React from 'react'
import HoComponent from './HoComponent'


function ClickCounter(props) {
  const {Counter,UpdateCounter}=props
  return (
    <>
    <h1 className='text'>Higher Order Component</h1>
    <h2 className='text'>On-Click</h2>
    <div className='count'>{Counter}
    <div><button onClick={UpdateCounter} className='btn1'>On Click Counter</button></div>
      </div>
    </>
  )
}

export default HoComponent(ClickCounter)