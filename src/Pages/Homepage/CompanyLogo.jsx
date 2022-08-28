import React from 'react'
import { Link } from 'react-router-dom'
import logostyle from  "./CompanyLogo.module.css"
const CompanyLogo = () => {
  return (
    <div className={logostyle.companylogo_main_div}>
        <div >
            <img  style={{width:"100%"}} src="https://i.postimg.cc/d34DDP24/comp-logo.png" alt="" />
           <div style={{background:"#2C1338",height:"150px", marginLeft:"500px"}}><Link to="/track/pricing"><button className={logostyle.logobtn1}>Start Tracking for free</button></Link><span style={{color:"violet",marginLeft:"20px",fontWeight:"bold"}}>or book a demo</span></div> 
        </div>
       <div><img style={{width:"100%"}}  src="https://i.postimg.cc/rFDXskyP/watch.png" alt="" />
   <img style={{width:"100%"}} src="https://i.postimg.cc/bJwV5xsB/inter.png" alt="" /></div>

    </div>
  )
}

export default CompanyLogo