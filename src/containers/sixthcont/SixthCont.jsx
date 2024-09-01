import React from 'react'
import './sixthcont.css'
import faq from '../../components/images/faq.png'
import blackst from '../../components/images/blackstarmob.png'
import {Heading} from '../../components'
function SixthCont() {
    const headings="Frequently Asked Question"
  return (
    <div className='card-container pt-[6pc] '>
        <div className="heading-sec">
            <div className="faq-img"><img src={faq} alt=""style={{marginBottom:"0.5pc"}} className='w-[4%] munja'  /></div>
            <Heading heading={headings}/>
            <img src={blackst} alt="" className='blacksyt'/>
        </div>
        <div className="card-section">
            <div className="card-left">
             <div className="sup">
             <div className="adding h-[180px] flex flex-col justify-center max-w-sm p-3 bg-[#687CFEB2]  border-gray-200 rounded-lg text-white  my-3 min-w-full ">
  <h5 className="mb-2 text-2xl font-[Inter] font-semibold tracking-tight text-white">
  Reliable and Easy to Use!
  </h5>
  <p className="font-normal text-white">
  AlphaCrypt VPN is incredibly user-friendly. I connected in seconds, and it’s been a flawless experience ever since.
  </p>
</div>

             </div>
             <div className="adding h-[180px] flex flex-col justify-center  max-w-sm p-3 bg-white  border-gray-200 rounded-lg text-black border-2 border-solid my-3 min-w-full border-[#687CFEB2]">
  <h5 className="mb-2 text-2xl font-[Inter] font-semibold tracking-tight text-black w-[80%] leading-6 my-2">
  A game-changer for online security!
  </h5>
  <p className="font-normal text-black">
  AlphaCrypt VPN makes me feel secure and connected no matter where I am. It's the best investment I've made for my digital safety.
  </p>
</div>
             <div className="sup">
             <div className="adding h-[180px] flex flex-col justify-center min-w-full max-w-sm p-6 bg-[#687CFEB2] border border-gray-200 rounded-lg">
  <h5 className="mb-2 text-2xl font-semibold font-[Inter] tracking-tight text-white">
  Outstanding VPN Experience!
  </h5>
  <p className="font-normal text-white">
  AlphaCrypt VPN has transformed how I browse online. The speed and security are top-notch, making it my trusted choice for all my devices.
  </p>
</div>
             </div>
            </div>
            <div className="card-right">
             <div className="sup">
      
             <div className="adding h-[180px] flex flex-col justify-center  max-w-sm p-3 bg-white  border-gray-200 rounded-lg text-black border-2 border-solid my-3 min-w-full border-[#687CFEB2]">
  <h5 className="mb-2 text-2xl font-[Inter] font-semibold tracking-tight text-black">
  Unmatched Peace of Mind!
  </h5>
  <p className="font-normal text-black">
  With AlphaCrypt VPN, I can browse the web freely and securely. It’s like having a personal shield protecting my online activities.
  </p>
</div>

             </div>
   
             <div className="adding h-[180px] flex flex-col justify-center min-w-full max-w-sm p-6 bg-[#687CFEB2] border border-gray-200 rounded-lg">
  <h5 className="mb-2 text-2xl leading-6  font-semibold font-[Inter] tracking-tight text-white my-2">
  The Perfect Blend of Speed and Security!
  </h5>
  <p className="font-normal text-white">
  AlphaCrypt VPN delivers fast connections without compromising on security. It's the best tool for a smooth and safe online experience.
  </p>
</div>
             <div className="sup">
             <div className="adding h-[180px] flex flex-col justify-center  max-w-sm p-3 bg-white  border-gray-200 rounded-lg text-black border-2 border-solid my-3 min-w-full border-[#687CFEB2]">
  <h5 className="mb-2 text-2xl font-[Inter] font-semibold tracking-tight text-black">
  Top-Notch Protection!
  </h5>
  <p className="font-normal text-black">
  AlphaCrypt VPN delivers exceptional performance. It’s my go-to for protecting my personal information and enjoying a fast, secure internet experience.
  </p>
</div>    
             </div>
            </div>
            
        </div>

    </div>
  )
}

export default SixthCont