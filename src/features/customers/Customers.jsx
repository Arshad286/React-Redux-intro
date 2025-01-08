import React from 'react'
import { useSelector } from 'react-redux'

const Customers = () => {

  const customer = useSelector((store) => store.customer.fullName);
  return (
    <div>
        <h2>👋 Welcome, {customer}</h2>;
    </div>
  )
}

export default Customers