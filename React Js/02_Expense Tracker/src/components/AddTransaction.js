import React from 'react'
import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)

    const { AddTransaction } = useContext(GlobalContext)

    const onSubmitt = e => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random()*100000000),
            text,
            amount: +amount
        }
        
        AddTransaction(newTransaction)
    }

  return (
    <div>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmitt}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input value={text} onChange={(e) => setText(e.target.value)} type="text" id='text' placeholder='Enter Text...' />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br />
                (negative - expense, positive - income)</label>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" id='amount' placeholder='Enter Amount...' />
            </div>
            <button className='btn'>Add transaction</button>
        </form>
    </div>
  )
}

export default AddTransaction