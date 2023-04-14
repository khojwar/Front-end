import React, { useContext } from 'react'
import Transation from './Transation'

import { GlobalContext } from '../context/GlobalState'



export const TransationList = () => {
  const { transactions } = useContext(GlobalContext)


  return (
    <div>
        <h3>History</h3>
        <ul className='list'>
          {transactions.map(transaction => (<Transation key={transaction.id} transaction={transaction} />))}
        </ul>
    </div>
  )
}

export default TransationList