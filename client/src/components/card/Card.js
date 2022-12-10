import React from "react";
import { Link } from "react-router-dom";
import CardHeader from "../cardHeader/CardHeader";
import CardInt from "./CardInt";

const Card = () => {
  return (
    <div className="mb-24">
    <CardHeader sectnme="New Arrivals"/>
    <div className="grid grid-cols-4 gap-4 align-center mx-28 mb-16">
      <Link to="/bookit">

     <CardInt imgurl="https://legendmotorsuae.com/uploads/vehicle/colors/007f05461948a4180a7c0914545427ee01.jpg"
     imgname="Wuling - Golf Cart"
     year="2010"
     />
     </Link>
     <CardInt imgurl="https://legendmotorsuae.com/uploads/vehicle/colors/018c40bccebecb4cd88a8d54c1c1e17b0f.jpg"
     imgname="Mercedes Benz - V250 - VIP"
     year="2013"
     />
     <CardInt imgurl="https://legendmotorsuae.com/uploads/vehicle/colors/019661078008e17a95047d7189ff7d2752.jpg"
     imgname="Mercedes - MayBach - 6.0L S680 AT"
     year="2022"
     />
     <CardInt imgurl="https://legendmotorsuae.com/uploads/vehicle/colors/0069d7bcacdf035d51fb2406df2d67c791.jpg"
     imgname="JETOUR - X70 - S"
     year="2022"
     />
     <CardInt imgurl="https://legendmotorsuae.com/uploads/vehicle/colors/00fc8daac7281508a31239b2f917f47924.jpg"
     imgname="JETOUR - X70 - SToyota - Camry - LE"
     year="2022"
     />
     <CardInt imgurl="https://legendmotorsuae.com/uploads/vehicle/colors/01e222798db83eff4f33275d0fc3029b81.jpg"
     imgname="MG - HS LUXURY - MG HS 20T A/T 1.5 2WD LUXURY"
     year="2022"
     />
     <CardInt imgurl="https://legendmotorsuae.com/uploads/vehicle/colors/01f2e014ea0ca67d4405481043f96ae496.jpg"
     imgname="Toyota - Hilux - Double Cabin Petrol"
     year="2022"
     />
     <CardInt imgurl="https://legendmotorsuae.com/uploads/vehicle/colors/11f6ec246871de5247d0a3b9f641ee9608.jpg"
     imgname="Toyota - Prado - TXLC"
     year="2022"
     />
    </div>
     </div>
  );
};

export default Card;
