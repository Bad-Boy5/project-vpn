import React from 'react'
import Advan from '../../components/images/advatnages.png'
import './thirdcont.css'
import paraPic1 from '../../components/images/notfication.png'
import paraPic2 from '../../components/images/bluestarc.png'
import paraPic3 from '../../components/images/bluestarc.png'
import circ from '../../components/images/Circles.svg'
import blackst from '../../components/images/blackstarmob.png'
import iphonee from '../../components/images/thirdright.png'
import iphonee1 from '../../components/images/thirdleft.png'
import iphonee2 from '../../components/images/thirdcen.png'
function ThirdCont() {
  
  return (
<>
    <div className='pt-[3pc] second-main sec-main-2 relative overflow-hidden'>
    <div className="right-txt mr-[3pc]">
      <img src={blackst} alt="" className=' w-[6%] absolute -bottom-9 left-[70%] rotate-[45deg] '/>
    <div className="right-txt-data right123">
    <div className="feature-img-sec">
        <img src={Advan} alt="featureimage" className='w-[25%]' />
      </div>
        <div className="main-heading22">Why Choose AlphaCrypt VPN?</div>


<div className="cards min-w-[100%]">
<div className=" min-w-[90%] max-w-sm rounded-lg font-[Inter] overflow-hidden mt-4">
  <div className="py-2">
    <div className="images flex items-center space-x-3">
  <img src={paraPic1} alt="" className="w-[40px]"/>
    <h3 className="text-lg font-semibold text-[18px]">Real-Time Alerts</h3>
    </div>
    <p className="mt-2 text-sm text-gray-500 leading-relaxed min-w-full">
    Receive instant updates on your connection and security with our smart notifications, keeping you informed and protected without any disruptions.
    </p>
  </div>
</div>

</div>
<div className="cards ">
<div className=" min-w-[90%] max-w-sm rounded-lg font-[Inter] overflow-hidden mt-4">
  <div className="py-2">
    <div className="images flex items-center space-x-3">
  <img src={paraPic2} alt="" className="w-[40px]"/>
    <h3 className="text-lg font-semibold text-[18px]">Effortless Connection</h3>
    </div>
    <p className="mt-2 text-sm text-gray-500 leading-relaxed min-h-full">
    Experience a hassle-free setup and dependable performance with AlphaCrypt VPN. Enjoy smooth and secure internet access anytime, anywhere.
    </p>
  </div>
</div>

</div>
<div className="cards ">
<div className=" min-w-[90%] max-w-sm rounded-lg font-[Inter] overflow-hidden mt-4">
  <div className="py-2">
    <div className="images flex items-center space-x-3">
  <img src={paraPic3} alt="" className="w-[40px]"/>
    <h3 className="text-lg font-semibold text-[18px]">Premium Features</h3>
    </div>
    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
    Upgrade to our premium plan for access to high-speed servers and enhanced security. Enjoy unparalleled performance and priority support for a top-tier VPN experience.
    </p>
  </div>
</div>

</div>

    </div>
      </div>
    <div className="left-img  for-the-third">
      
  <img src={circ} alt=""   className=' absolute min-w-[110%]  -top-[20%] right-[15%] circlesss' />
  <img src={iphonee} alt=""  className='absolute w-[80%] right-10  iph_m' />
  <img src={iphonee1} alt=""  className='absolute w-[80%]  right-[40%] top-[20%] iph_r' />
  <img src={iphonee2} alt=""  className='absolute w-[67%] left-[40%] top-[20%] iph_l' />

      </div>
</div>
</>
  )
}

export default ThirdCont