import React , {useEffect, useLayoutEffect, useState} from 'react'
import axios from 'axios'

export default function FirstComp() {

    const [students,setStudents] = useState ([
        {student_name: "rob", student_email: "abc@gmail.com"}
    ])

   useEffect(()=>{
    const fetchStudents = async () => {
        const response = await axios.get ("https:/localhost:4000")
        console.log (response) //response is an object
        console.log (response.data) //gets the data
        setStudents(response.data)
    }
    //Call function here
   }, [])

  return (
    <div>FirstComp</div>
  )
}
