import React from 'react'

const SkilsItem = ({img}) => {
  return (
    <div className='p-2  rounded-lg shadow-lg shadow-gray-400 items-center justify-center flex dark:shadow-gray-600'>
        <img src={img} alt="" />
    </div>
  )
}

export default SkilsItem