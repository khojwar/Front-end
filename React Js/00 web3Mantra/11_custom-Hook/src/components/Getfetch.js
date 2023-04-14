
import { useState, useEffect } from 'react'



const Getfetch = (url) => {
    const [data, setData] = useState([])


    useEffect(() => {
        async function getData() {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data);

            setData(data)
        }

        getData()

    },[])
    return [ data ]
}

export default Getfetch