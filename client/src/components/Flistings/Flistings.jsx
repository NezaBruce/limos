import React from 'react'
import CardHeader from '../cardHeader/CardHeader';
import CardInt from '../card/CardInt';
import { Link } from 'react-router-dom';

const Flistings = () => {
  return (
    <div>
     <CardHeader sectnme="Featured Listings"/>  
     <div className="grid grid-cols-4 gap-4 align-center mx-28 mb-16">
      <Link to="/bookit">
      <CardInt imgurl="https://legendmotorsuae.com/uploads/vehicle/colors/01e222798db83eff4f33275d0fc3029b81.jpg"
     imgname="MG - HS LUXURY - MG HS 20T A/T 1.5 2WD LUXURY"
     year="2022"
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
     </div>      
    </div>
  )
}

export default Flistings