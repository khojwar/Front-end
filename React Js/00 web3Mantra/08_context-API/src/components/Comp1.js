import React from 'react'
import Comp2 from './Comp2'

// const Comp1 = ({data}) => {
const Comp1 = () => {
  return (
    <div className='comp1'>
        Comp1

        {/* <Comp2 data={data} /> */}

        <Comp2 />

    </div>
  )
}

export default Comp1