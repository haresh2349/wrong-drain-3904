import React from 'react'
import { Link } from 'react-router-dom'

const Middle = () => {
  return (
    <div>
        <div style={{backgroundColor:"rgb(44,19,56)", border:"1px solid black", width:"100%", height:"400px"}}>
             <p style={{color:"white", textAlign:"center",marginTop:"120px", fontSize:"48px"}}>Everyone works <i style={{color:"#FFDE91"}}>differently</i>.</p>
             <p style={{color:"white", textAlign:"center",fontSize:"20px"}}>It is why our fully-remote team is commited to flexible work and to building tools that fit into any workflow.</p>
             <Link to="/track/signup"><button style={{color:"black", border:"1px solid black", borderRadius:"25px", width:"280px", height:"50px", margin:"30px 0px 0px 600px", backgroundColor:"#ffde91"}}>Read about Toggle's mission</button></Link>
        </div>
    </div>
  )
}

export default Middle