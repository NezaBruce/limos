import React from 'react'
import Navbar from './Navbar/Navbar'
import SliderComponent from './Banner/Banner'
import Footer from './Footer/Footer'
import Card from './card/Card'
import Pmonth from './Pmonth/Pmonth'
import Flistings from './Flistings/Flistings'
const Home = () => {
  return (
    <div className='black'>
        <Navbar/>
        {/* <B2/>
        <B4/> */}
        <SliderComponent/>
        <Card/>
        {/* <Banner/> */}
        <Pmonth/>
        <Flistings/>
        <Footer/>
    </div>
  )
}

export default Home;