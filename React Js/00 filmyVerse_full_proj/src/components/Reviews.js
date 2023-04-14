import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { reviewRef, db } from '../firebase/firebase'
import { addDoc, doc, updateDoc, query, where, getDocs } from 'firebase/firestore'
import { TailSpin, ThreeDots } from 'react-loader-spinner'
import swal from 'sweetalert'

const Reviews = ({ id, prevRating, userRated }) => {
    const [rating, setRating] = useState(0)
    const [loading, setLoading] = useState(false)
    const [reviewsLoading, setReviewsLoading] =useState(false)
    const [form, setForm] = useState("")
    const [data, setData] = useState([])

    const sendReview = async() => {
      setLoading(true)
      try {
        await addDoc(reviewRef, {
          movieid: id,
          name: "Tika Ram",
          rating: rating,
          thought: form,
          timestamp: new Date().getTime()
        })

        const ref = doc(db, "movies", id)
        await updateDoc(ref, {
          rating: prevRating + rating,
          rated: userRated + 1
        })

        setRating(0)
        setForm("")
        
        swal({
          title: "Review Sent",
          icon: "success",
          buttons: false,
          timer: 3000
        })

      } catch (error) {
        swal({
          title: error.message,
          icon: "error",
          buttons: false,
          timer: 3000
        })
      }
      setLoading(false)
    }

    useEffect(() => {
      async function getData() {
        setReviewsLoading(true)
        let quer =query(reviewRef, where('movieid', '==', id))
        const querySnapShot = await getDocs(quer)

        querySnapShot.forEach((doc) => {
          setData((prev) => [...prev, doc.data()])
        })

        setReviewsLoading(false)
      }
      getData()
    },[])

  return (
    <div className='mt-4 border-t-2 border-gray-700 w-full'>
        <ReactStars
            size={30}
            half={true}
            value={rating}
            onChange={(rate) => setRating(rate)}
        />
        <input 
          value={form}
          onChange={(e) => setForm(e.target.value)}
          type="text" 
          placeholder='Share your thoughts...' 
          className='w-full p-2 outline-none header' 
        />
        <button onClick={sendReview} className='bg-green-600 flex justify-center w-full p-2 mt-4'>
          {loading ? <TailSpin height={10} color="white" /> : 'Share'}
        </button>

        {
          reviewsLoading ? 
          <div className='mt-3 flex justify-center'><ThreeDots height={25} color='white' /></div>
          :
          <div className='mt-4 p-2' >
            {data.map((e,i) => {
              return(
                <div className='border-b header border-gray-600 p-2 w-full mt-2' key={i}>
                  <div className='flex items-center'>
                    <p className='text-blue-500'>{e.name}</p>
                    <p className='ml-4 text-xs'>({new Date(e.timestamp).toDateString()})</p>
                  </div>
                  <ReactStars
                    size={15}
                    half={true}
                    value={e.rating}
                    edit={false}
                  />
                  <p>{e.thought}</p>
                </div>
              )
            })}
          </div>
        }
    </div>
  )
}

export default Reviews