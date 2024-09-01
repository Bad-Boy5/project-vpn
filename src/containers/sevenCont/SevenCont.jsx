import React from "react";
import "./sevencont.css";
import { Heading, Paragraph, Button } from "../../components";
import white from "../../components/images/whitecircles.svg";
import white2 from "../../components/images/whitecircle2.svg";
import Apple from "../../components/images/apple.svg"
import { star1, blackst } from ".";
import  upGrand  from "../../components/images/fullbl.png";
import  mobGrand  from "../../components/images/fullbl.png";
import  seventh  from "../../components/images/seventh.png";
function SevenCont() {
  const headings = "Ready To Get Started?";
  const para =
    "Risus habitant leo egestas mauris diam eget morbi tempus vulputate.";
  return (
    <div className="main-seven-cont">
      <div className="mob-blackst">
        <img src={blackst} alt="" />
      </div>
      <div className="mob-blackst2">
        <img src={blackst} alt="" />
      </div>
      <div className="mob-grand2 ">
        <img src={upGrand} alt="" />
      </div>
      <div className="white-cir">
        <img src={white} alt="elippes" />
      </div>
      <div className="white-cir2">
        <img src={white2} alt="elippes" />
      </div>
      <div className="seven-data ">
        <div className="seven-left">
          <Heading heading={headings} />
          <Paragraph paras={para} />
          <Button title="Download App" imgs={Apple} />
          <div className="mob-star2">
            <img src={star1} alt="" />
          </div>
        </div>
        <div className="seven-right flex justify-end  ">
<div className="mai-mob z-[30] helo ">
<img src={seventh} alt="" className="min-w-full"/>

</div>
          <div className="mob-grand w-[100%] opacity-[0.7] z-[1]">
            <img src={mobGrand} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SevenCont;
