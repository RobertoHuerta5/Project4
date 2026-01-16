import React , {useState} from 'react'
import {Button, Col ,Form, Row, Container} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export default function LoginPage({setIsLoggedIn}) {
    const navigate = useNavigate()

    const[formData, setFormData] = useState({
        user_name: "",
        user_password:""
    })

    const[errorMessage, setErrorMessage]= useState("")

    const [successMessage, setSuccessMessage] = useState("")

    function handleChange(event){
        const {name, value} = event.target
        setFormData({...formData, [name]:value})
    }

    async function handleClick(event){
        setErrorMessage("")
        setSuccessMessage("")
        try {
           const result = await axios.post ("http://localhost:4000/users/", {user_name:formData.user_name, user_password:formData.user_password})
           console.log(result.data)
           setSuccessMessage("Login successful")
           setIsLoggedIn(true)
           navigate("/dashboard")
        }
        catch(error) {
          if (error.response) {
            setErrorMessage(error.response.data.message);
        } else {
            setErrorMessage("Server not responding");
        }
        } 
    }

  return (
    <>
      <div className="text-center mb-4">
        <h2 className="fw-bold">Log In</h2>
        <p className="text-muted">Sign in to continue</p>
      </div>  
        <Container className="mt-5">
          <Row className="justify-content-center">
              <Col md={6} lg={4}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicUserName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control 
                              required
                              type="text"
                              placeholder="User Name"
                              name="user_name"
                              onChange={(event)=>handleChange(event)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                required
                                type="password"
                                placeholder="Password"
                                name="user_password"
                                onChange={(event)=>handleChange(event)}/>
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={(event)=>handleClick(event)}>Log In</Button>
                        {errorMessage && (<p style={{ color: "red" }}>{errorMessage}</p>)}
                        {successMessage && (<p style={{ color: "green" }}>{successMessage}</p>)}
                    </Form>
              </Col>
          </Row>
        </Container>
    </> 
  )
}

