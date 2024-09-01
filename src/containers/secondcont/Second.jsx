import React from "react";
import circles from "../../components/images/Circles.svg";
import mobR from "../../components/images/iPhone-13-Pro-FrontFromt.png";
import feature from "../../components/images/features.png";
import paraPic1 from "../../components/images/star-05.png";
import paraPic2 from "../../components/images/cube-02.png";
import paraPic3 from "../../components/images/cube-04.png";
import blackst from "../../components/images/blackstarmob.png";
import grand from "../../components/images/fullbl.png";
import "./second.css";
function Second() {


  return (
    <div className="second-main mb-[3pc] overflow-hidden">
      <div className="left-img ">
        <img src={circles} alt="" className="circles w-full" />
        <img src={mobR} alt="" className="mobR absolute" />
        <img src={grand} alt="" className="grandss" />
        <img src={blackst} alt="" className="grandss22" />
      </div>
      <div className="right-txt flex-col">
        <div className="right-txt-data ">
          <div className="feature-img-sec">
            <img src={feature} alt="featureimage"/>
          </div>
          <div className="main-heading22">Alpha Crypt Vpn</div>



        </div>
        <img src={grand} alt="" className="grandss1" />
<div className="cards min-w-full ">
<div className=" min-w-[90%] max-w-sm rounded-lg font-[Inter] overflow-hidden mt-4">
  <div className="py-2">
    <div className="images flex items-center space-x-2">
  <img src={paraPic1} alt="" className="w-[20px]"/>
    <h3 className="text-lg font-semibold text-[18px]">Fast Connection</h3>
    </div>
    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
    Experience lightning-fast internet speeds with AlphaCrypt VPN. Our advanced technology ensures you can stream, browse, and download with minimal lag, giving you the speed you need for an optimal online experience.
    </p>
  </div>
</div>

</div>
<div className="cards min-w-full">
<div className=" w-full max-w-sm rounded-lg font-[Inter] overflow-hidden mt-4">
  <div className="py-2">
    <div className="images flex items-center space-x-2">
  <img src={paraPic2} alt="" className="w-[20px]"/>
    <h3 className="text-lg font-semibold text-[18px]">Advanced Security</h3>
    </div>
    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
    Stay protected with top-notch encryption and security protocols. AlphaCrypt VPN shields your data from prying eyes, safeguarding your online activities and personal information against potential threats.
    </p>
  </div>
</div>

</div>
<div className="cards min-w-full">
<div className="bg-white w-full max-w-sm rounded-lg font-[Inter] overflow-hidden mt-4">
  <div className="py-2">
    <div className="images flex items-center space-x-2">
  <img src={paraPic3} alt="" className="w-[20px]"/>
    <h3 className="text-lg font-semibold text-[18px]">Worldwide Connectivity</h3>
    </div>
    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
    Unlock a world of content with AlphaCrypt VPN. Connect to servers around the globe and access your favorite websites and services without geographic limitations.
    </p>
  </div>
</div>

</div>



      </div>
    </div>
  );
}

export default Second;
