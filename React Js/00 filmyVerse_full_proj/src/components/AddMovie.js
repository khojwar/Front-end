import React, { useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { addDoc } from 'firebase/firestore'
import { moviesRef } from '../firebase/firebase'
import swal from 'sweetalert'


const AddMovie = () => {
    const [form, setForm] = useState({
        title: "",
        year: "",
        description: "",
        image: "",
        rated: 0,
        rating: 0
    })

    const [loading, setLoading] = useState(false)

    const addMovie = async () => {
        setLoading(true)
        await addDoc(moviesRef, form)
        swal({
            title: "Successfully Added",
            icon: "Success",
            buttons: false,
            timer: 3000
        })
        setForm({
            title: "",
            year: "",
            description: "",
            image: ""
        })
        setLoading(false)
    }

  return (
    <div>
        <section class="text-gray-600 body-font relative">
            <div class="container px-5 py-8 mx-auto">
                <div class="flex flex-col text-center w-full mb-6">
                    <h1 class="sm:text-3xl text-xl font-medium title-font mb-4 text-white">Add Movie</h1>
                </div>
                <div class="lg:w-1/2 md:w-2/3 mx-auto">
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="name" class="leading-7 text-sm text-gray-300">Title</label>
                                <input value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="email" class="leading-7 text-sm text-gray-300">Year</label>
                                <input value={form.year} onChange={(e) => setForm({...form, year: e.target.value}) } type="number" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="message" class="leading-7 text-sm text-gray-300">Image Url</label>
                                <input value={form.image} onChange={(e) => setForm({...form, image: e.target.value})} id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="message" class="leading-7 text-sm text-gray-300">Description</label>
                                <textarea value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <button onClick={addMovie} class="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-800 rounded text-lg">{loading ? <TailSpin height={25} color="white" /> : 'Submit'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default AddMovie