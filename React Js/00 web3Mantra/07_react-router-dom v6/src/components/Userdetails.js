import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Userdetails = () => {
    const {userId} = useParams()
    const [data, setData] = useState({})
  
  
    useEffect(() => {
      async function getData() {
        const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${userId}`)
        const res = await get.json()
  
        setData(res[0])
        console.log(res);
      }
  
      getData()
  
    }, [])


  return (
    <div className='userdetails'>
        <img src={data.imageUrl} alt="" />
        <h4>UserId: {data.id}</h4>
        <h4>First Name: {data.firstName}</h4>
        <h4>Last Name: {data.lastName}</h4>
        <h4>Email: {data.email}</h4>
        <h4>Contact No. : {data.contactNumber}</h4>
        <h4>Age: {data.age}</h4>
        <h4>DOB: {data.dob}</h4>
    </div>
  )
}

export default Userdetails