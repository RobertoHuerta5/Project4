import React, { useState } from 'react'

export default function AddUserComp() {
    const [formData, setFormData] = useState ({
        user_name: "",
        user_password:"",
        user_email: ""
    })

    function handleChange (event) {
        const{ name,value } = event.target 
        setFormData ({...formData, [name]:value})
    }
  return (
    <div>AddUserComp</div>
  )
}
