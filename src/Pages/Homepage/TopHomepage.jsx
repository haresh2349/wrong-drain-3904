import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./TopHomepage.module.css"

const TopHomepage = () => {
  return (
    <div>
        <div className={styles.main}>
             <div className={styles.container1}>
                <div className={styles.innerDiv1}>
                    <div className={styles.Box1}>
                        <p>Meet Toggl. Three products; One mission</p>
                    </div>
                    <div className={styles.Box2}>
                        <p>We build work tools to elevate productivity and eliminate stress.</p>
                    </div>
                </div>
                <div className={styles.innerDiv2}>
                    <div className={styles.Box3}>
                            <div><p style={{color:"#e57cd8", fontSize:"45px"}}><i>Toggle</i> track</p>
                                <p style={{color:"black", lineHeight:"30px", padding:"0px 150px 0px 0px"}}>Effortless time tracking and reporting</p>
                                <p style={{color:"gray", fontSize:"18px", marginTop:"10px", padding:"0px 100px 0px 0px"}}>Save time and money with the time tracker trusted by more than 70,000 organizations.</p>
                            </div>
                            <img style={{width:"100px", height:"100px", paddingTop:"20px"}} src="https://zapier-images.imgix.net/storage/services/fc1fea4b46a1f2e08afc9d636aab8562.png?auto=format&ixlib=react-9.0.2&ar=undefined&fit=crop&h=90&w=90&q=50&dpr=5" alt="togglLogo" />
                    </div>
                    <div className={styles.Box4}>
                        <Link to="/track/signup"><button className={styles.btn}>Start tracking for free</button></Link>
                        <p style={{color:"#e57cd8", margin:"28px 0px 0px 20px", fontSize:"16px"}}>Or explore Toggle Track</p>
                    </div>
                    <div className={styles.Box5}>
                        <p>“Toggl Track is really good for me, because at the end of the day, I can say how much time I spent on each area of my life.”</p>
                        <p style={{fontSize:"13px", marginTop:"20px"}}> — Serena Williams, Professional Tennis Icon</p>
                    </div>
                </div>
             </div>

             <div className={styles.container2}>
                <div className={styles.innerDiv3}>
                        <div className={styles.Box3}>
                                <div><p style={{color:"#a876f5", fontSize:"45px"}}><i>Toggle</i> plan</p>
                                    <p style={{color:"white", lineHeight:"40px", padding:"0px 150px 0px 0px", fontSize:"35px"}}>Simple team and project planning</p>
                                    <p style={{color:"white", fontSize:"18px", marginTop:"10px", padding:"10px 100px 0px 0px"}}>Plan, track, and deliver work on time without burnout.</p>
                                </div>
                                <img style={{width:"140px", height:"140px", paddingTop:"20px"}} src="https://play-lh.googleusercontent.com/WSH8uEWXFeVY8z7o2dReMC9UOY78zUP7paaqSi5gOY3yyPfB1uS2RsRF14Y8Png58DmZ=s180" alt="togglLogo" />
                        </div>
                        <div className={styles.Box4}>
                            <Link to="/track/signup"><button className={styles.btn2}>Start planing for free</button></Link>
                            <p style={{color:"#a876f5", margin:"100px 0px 0px 20px", fontSize:"16px"}}>Or explore Toggle Track</p>
                        </div>
                    </div>
                    <div className={styles.innerDiv4}>
                        <div className={styles.Box3}>
                                <div><p style={{color:"#ff8a7a", fontSize:"45px"}}><i>Toggle</i> hire</p>
                                    <p style={{color:"white", lineHeight:"40px", padding:"0px 150px 0px 0px", fontSize:"35px"}}>Skills-based candidate screening and hiring</p>
                                    <p style={{color:"white", fontSize:"18px", marginTop:"10px", padding:"10px 100px 0px 0px"}}>Evaluate job applicants on their skills, hire top talent effortlessly.</p>
                                </div>
                                <img style={{width:"100px", height:"100px", paddingTop:"20px"}} src="https://i.pinimg.com/originals/32/51/9f/32519f4d219763e358c702ac217f4eb4.png" alt="togglLogo" />
                        </div>
                        <div className={styles.Box4}>
                            <Link to="/track/signup"><button className={styles.btn3}>Start hiring for free</button></Link>
                            <p style={{color:"#ff8a7a", margin:"80px 0px 0px 20px", fontSize:"16px", padding:"30px 100px 0px 0px"}}>Or explore Toggle Track</p>
                        </div>
            
                    </div>
             </div>
        </div>
    </div>
  )
}

export default TopHomepage