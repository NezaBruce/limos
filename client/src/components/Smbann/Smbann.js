import React from 'react'

import Select from 'react-select'

const Smbann = () => {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]

  return (

    <div className='bg-gray-700 flex w-24'>
        <div>
    <h3>All Make</h3>
  <Select options={options} />
        </div>
        <div>
        <h3>All Models</h3>
  <Select options={options} />
        </div>
        <div>
        <h3>Fuel Type</h3>
  <Select options={options} />
        </div>
        <div>
        <h3>Transmisioin</h3>
  <Select options={options} />
        </div>
        <div>

        </div>


    </div>
  )
}

export default Smbann