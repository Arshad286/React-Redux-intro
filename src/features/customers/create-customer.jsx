import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {createCustomer} from './customer-slice'

const CreateCustomer = () => {
 
    const [fullName, setFullName] = useState("");
    const [nationalId, setNationalId] = useState("");

    const dispatch = useDispatch();
    
   function handleClick() {
       
    if(!fullName || !nationalId) return;
    
    dispatch(createCustomer(fullName, nationalId));
   }

  return (


    <div>
        <h2>Create new Customer</h2>
        <div>
            <div>
                <label>Customer full name</label>
                <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                />
            </div>
        </div>

        <div>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
    </div>
  )
}

export default CreateCustomer