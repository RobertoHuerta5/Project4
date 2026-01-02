import React, { useState } from 'react'

export default function AddUserComp() {
    const [formData, setFormData] = useState ({
        student_name: "", 
        student_email: ""
    })

    function handleChange (event) {
        const{ name,value } = event.target 
        setFormData ({...formData, [name]:value})
    }
  return (
    <div>AddUserComp</div>
  )
}
