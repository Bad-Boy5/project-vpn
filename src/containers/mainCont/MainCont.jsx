import React from 'react'
import './maincont.css'
import maicirc from '../../components/images/cir.png'
import img1 from '../../components/images/Group 3.svg'
import img2 from '../../components/images/Vector 1.svg'
import grad from '../../components/images/gradient.png'
import blackst from '../../components/images/blackstarmob.png'
import grad2 from '../../components/images/3mobss.png'
import mainTop from '../../components/images/main-top-img.png'
import medium from '../../components/images/mid.png'
import mainMd from '../../components/images/bottom.png'
import {Button } from '../../components/'
function MainCont() {

  return (
    <div className='main_cont mb-[3pc]'>
<div className="left_main_sec">
 <div className="left-data">
 <div className="heading_sec"> <div className='main-con-heading'>
 Secure Your Digital World with AlphaCrypt
    </div></div>
   <div className="para_sec">
   <div className='para1'style={{ fontSize:'18px',lineHeight:'28px',fontWeight:'500',color:'#000000' ,maxWidth:'95%'}}>
      <p>
      Protect your digital world with AlphaCrypt VPN. Enjoy a Seamless, secure browsing experience that keeps your data private and your connection safe. Your online security is our top priority.
      </p>
    </div>
   </div>
   <div className="main_buttons_sec"><div className="btn1"><Button title="Get Started" imgs={img2}/></div>
   <div className="btn2"><Button title="Watch Video" imgs={img1}/>
   <div className="img-g"><img src={grad} alt="images gradient" /></div>
   </div>
   </div>
  <img src={blackst} alt="" className='blackst3 absolute   w-12  cursor-pointer hover:w-14 hover:shadow-lg hover:rotate-0'/>
  <img src={blackst} alt="" className='blackst6 absolute   w-12  cursor-pointer hover:w-14 hover:shadow-lg hover:rotate-0'/>
 </div>
   </div>
<div className="right_main_sec">
  <img src={blackst} alt="" className='blackst_mob absolute right-5 -top-[6%] w-[8%] '/>
  <img src={blackst} alt="" className='blackst_mob2 absolute bottom-0 left-[12%] w-[8%] '/>
<div className="main-circ-cont">
 <img src={mainTop} alt="" className='maintop' />
 <img src={mainMd} alt="" className='mainmd' />
 <img src={medium} alt="" className='medium_main' />
<img src={maicirc} alt=""className='circlesss' />
</div>
  
  <img src={grad2} alt="" className='blackst4'/>
</div>


    </div>
  )
}

export default MainCont