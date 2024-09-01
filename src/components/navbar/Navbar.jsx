import React from 'react'
import './navbar.css'
import mainlg from '../../components/images/main-logo-icon.png'
import mainlgTxt from '../../components/images/main-logo-icon-2.png'
import mainlgTxt2 from '../../components/images/main-logo-icon-3.png'
function Navbar() {


  return (
    <div className='nav_bar h-nav'>
 <div className="left-sec">
 <div className="main-img max-h-[36px] flex items-center space-x-4  " >

<div className="left-g flex items-center space-x-2">


<div className="max-w-[36px]"> <img src={mainlg} alt="Logo"   /></div>
<div className="w-full h-full ">  <img src={mainlgTxt } alt="Logo"  className='min-w-full'/></div>

</div>
<div className="right-g  min-h-[36px]">
  
<div className="w-[10px] h-ful  py-2">  <img src={mainlgTxt2 } alt="Logo"  /></div>

</div>
  
  
  </div>
 <div className='ul-list'>
        <li style={{color:'#687CFE'}}>Home</li>
        <li>About Us</li>
        <li>Pricing</li>
        <li>Features</li>
    </div>
 </div>
 <div className="right-sec">
 <button className="btn1122 header_btn">Download</button>
 </div>
  
    </div>
  )
}

export default Navbar