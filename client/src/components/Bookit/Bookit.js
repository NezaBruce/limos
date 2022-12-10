import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Slider from './Slider'

const Bookit = () => {
  return (
    <div>
        <Navbar/>
        <div className='mt-8'>
            <p className='mx-20 text-2xl'>
            Wuling - Golf Cart - 4 Seats | Electric (2021)
            </p>
        <div className='border-2 b-gray w-5/6 mx-20 mt-4'></div>
        </div>
        <div className='flex mt-16'>
            <Slider/>
            
        <div class="w-full max-w-xs border b-black-686">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <input className="username shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="name"/>
    </div>
    <div class="mb-6">
      <input className="email shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email"/>
    </div>
    <div className="message mb-6 border b-black-688 px-2 focus:border focus:b-black-700" contentEditable>
      {/* <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" value="I am interested in a price quote on this vehicle. Please contact me at your earliest convenience with your best price for this vehicle." aria-expanded/> */}
      I am interested in a price quote on this vehicle. Please contact me at your earliest convenience with your best price for this vehicle.
    </div>
    <div class="flex items-center justify-between">
      <button className="anorder bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Send a message
      </button>  
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
</div>
<Footer/>
    </div>
  )
}

export default Bookit