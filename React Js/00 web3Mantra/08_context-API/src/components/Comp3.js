import React, {useContext} from 'react'
import { AppState } from '../App'

// const Comp3 = ({data}) => {
const Comp3 = () => {
    const appData = useContext(AppState)
  return (
    <div className='comp3'>
        Comp3

        {/* <h1>{data}</h1> */}

        {/* <h1>{appData}</h1> */}
        <h1>{appData.data}</h1>
        <h1>{appData.name.name}</h1>
        <h1>{appData.name.age}</h1>
  
    </div>
  )
}

export default Comp3