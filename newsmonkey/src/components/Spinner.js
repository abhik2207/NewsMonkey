import React from 'react'
import loading from './loader.gif'

const Spinner = () => {
  return (
    <div className='text-center'>
      <img src={loading} height={"70px"} style={{margin:"50px 0px"}} alt="loading" />
    </div>
  )
}

export default Spinner
