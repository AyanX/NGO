import {PuffLoader} from "react-spinners"


import React from 'react'

const Loader = () => {
  return (
    <div style={{height:"40vh" ,width:"100%", display:"flex", alignItems:"center", justifyContent:"center"  }}>
        <PuffLoader size={60}/>
    </div>
  )
}

export default Loader