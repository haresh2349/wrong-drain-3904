import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div>
        <div className={styles.footer}>
           <div className={styles.footer1Div}>
              <img style={{width: "120px", height:"120px", marginLeft:"20px"}} src="https://s3.eu-central-1.amazonaws.com/production.images.hundred5.com/public/jabdd28cd8ea8j24fa419ca33340iog00mnk9k6opjabdd28cd905h3cb4ef99e8f1ooalfcd3359773270.png" alt="toggle" /></div>
            <div className={styles.innerContent}>
              <div className={styles.innerBox}>
                <h4 className={styles.heading}>TOGGL GLOBAL</h4>
                <p className={styles.para}>Blog</p>
                <p className={styles.para}>Our Mission</p>
                <p className={styles.para}>Working at Toggl 4</p>
                <p className={styles.para}>Legal Terms</p>
              </div>
              <div className={styles.innerBox}>
                 <h4 className={styles.heading}>TOGGL TRACK</h4>
                 <p className={styles.para}>Features</p>
                 <p className={styles.para}>Pricing</p>
                 <p className={styles.para}>Integrations</p>
                 <p className={styles.para}>Case Studies</p>
                 <p className={styles.para}>Mobile Apps</p>
                 <p className={styles.para}>Desktop Apps</p>
                 <p className={styles.para}>Anti-surveilance</p>
                 <p className={styles.para}>Knowledge Base</p>
                 <p className={styles.para}>timesheet Templates</p>
              </div>
              <div className={styles.innerBox}>
                 <h4 className={styles.heading}>TOGGL PLAN</h4>
                 <p className={styles.para}>Product</p>
                 <p className={styles.para}>Pricing</p>
                 <p className={styles.para}>Solutions</p>
                 <p className={styles.para}>Customer Stories</p>
                 <p className={styles.para}>Project Management</p>
                 <p className={styles.para}>Knowledge Base</p>
              </div>
              <div className={styles.innerBox}>
                 <h4 className={styles.heading}>TOGGL HIRE</h4>
                 <p className={styles.para}>Product</p>
                 <p className={styles.para}>Pricing</p>
                 <p className={styles.para}>Skill Tests</p>
                 <p className={styles.para}>Customer Stories</p>
                 <p className={styles.para}>Candidate Experience</p>
                 <p className={styles.para}>Manifesto</p>
                 <p className={styles.para}>Knowledge Base</p>
              </div>
              <div className={styles.innerBox}>
                  <h4 className={styles.heading}>RESOURCES</h4>
                  <p className={styles.para}>Fun & Games</p>
                  <p className={styles.para}>Work From Home Hub</p>
                  <p className={styles.para}>Time Management Hub</p>
                  <p className={styles.para}>Business Resources</p>
                  <p className={styles.para}>Productivity Resources</p>
                  <p className={styles.para}>Blueprint Magazine</p>
                  <p className={styles.para}>Timesheets Magazine</p>
              </div>
           </div>
          </div>
        <div>
        <div className={styles.footerBox2}>
              <div style={{width:"250px", height:"120px", color:"#fff", margin :"40px 20px"}}>
               <p>Discover all three</p>
               <p>Toggl tools:</p> 
              </div>
              <div style={{width:"200px", height:"150px"}}>
                <img style={{width: "180px", height:"200px", marginLeft:"10px", paddingBottom:"100px"}} src="https://public-assets.toggl.com/b/static/9e32f4f0f2d8c5041c49c63a3671b74e/6f8c6/download-media-logo-horizontal.jpg" />
                <p style={{color:"#fff"}}>Effortless time tracking</p>
              </div>
              <div style={{width:"200px", height:"150px"}}>
                <img style={{width: "120px", height:"100px", marginLeft:"20px", paddingTop:"0px"}} src="https://www.howtoweb.co/wp-content/uploads/2020/06/Logos-website-15-1200x667.png" />
                <p style={{color:"#fff", fontSize:"13px"}}>Beautifully simple work</p>
              </div>
              <div style={{width:"200px", height:"150px"}}>
                <img style={{width: "120px", height:"90px", marginLeft:"20px"}} src="https://www.howtoweb.co/wp-content/uploads/2020/06/Logos-website-12.png" />
                <p style={{color:"#fff", paddingTop:"0px", fontSize:"13px"}}>Skills-based hiring</p>
              </div>
        </div>
        <div className={styles.footerBox3}>
          <p style={{color:"#fff", padding:"18px 20px", fontSize:"15px"}}>© 2022 Toggl. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer