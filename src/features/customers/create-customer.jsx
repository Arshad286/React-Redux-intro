import React, { useState } from 'react'

const CreateCustomer = () => {
 
    const [fullName, setFullName] = useState("");
    const [nationalId, setNationalId] = useState("");
    
    
   function handleClick() {
    
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