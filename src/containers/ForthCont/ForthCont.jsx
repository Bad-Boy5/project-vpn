import React from 'react'
import './forthcont.css'
import paraPic3 from '../../components/images/bluestarc.png'
import grands from '../../components/images/gradient.png'
import blackst from '../../components/images/blackstarmob.png'
import circ from '../../components/images/Circles.svg'
import iphonee from '../../components/images/meter.png'
function ForthCont() {
  

  return (

    <div className='second-main min-h-[719px] py-16'>
    <div className="left-img left-img2">
    <img src={circ} alt="" className='circless' />
  <img src={iphonee} alt=""className='absolute iphonee2222' />
      <img src={grands} alt="" className='grands'/>
      </div>
    <div className="right-txt pb-[2pc]">
    <div className="right-txt-data right123 flex items-center w-full">
    <div className="cards min-w-full">
<div className="bg-white min-w-[80%] max-w-sm rounded-lg font-[Inter] overflow-hidden mt-3">
  <div className="py-2">
    <div className="images flex items-center space-x-3 min-w-full">
  <img src={paraPic3} alt="" className="w-[38px]"/>
    <h3 className=" font-bold text-[30px]">Check Your Connection Speed</h3>
    </div>
    <p className="mt-2 text-gray-500 leading-relaxed min-w-full pt-3 text-[20px] ">
    Monitor and optimize your internet speed with AlphaCrypt VPN’s built-in speed testing feature. Easily evaluate your connection performance to ensure you’re getting the best possible speed for a smooth and efficient browsing experience.
    </p>
  </div>
</div>

</div>

    </div>
      <img src={blackst} alt="" className='blackst2'/>
      </div>
</div>
  )
}

export default ForthCont