import React , {useState} from 'react'
import {Button, Form, Container, Row, Col} from 'react-bootstrap';
import axios from 'axios'

export default function SignUpPage() {

    const [formData, setFormData] = useState ({
            user_name: "",
            user_password:"",
            user_email: ""
        }) 
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    
        function handleChange (event) {
            const{ name,value } = event.target 
            setFormData ({...formData, [name]:value})
        }

        async function handleClick(event){
            event.preventDefault()
            setErrorMessage("");
            setSuccessMessage("");
            try {
                const result = await axios.post ("http://localhost:4000/users/signup",{user_name:formData.user_name,user_password:formData.user_password})
                setSuccessMessage(result.data.message);
                setFormData({ user_name: "", user_password: "" })
    
            } catch (error) {
                if (error.response) {
                    setErrorMessage(error.response.data.message)
                } else {
                    setErrorMessage("Server not responding");
                }
            }

        }

  return (
    <>
        <h2 className="text-center mb-4">Sign Up</h2>
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6} lg={4}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicUserName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" placeholder="User Name" name="user_name"
                              onChange={(event)=>handleChange(event)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                             <Form.Control type="text" placeholder="Email Address" name="user_email"
                              onChange={(event)=>handleChange(event)} />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                             <Form.Control type="text" placeholder="Password"name="user_password"
                              onChange={(event)=>handleChange(event)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleClick}>Submit</Button>
                        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
                     </Form>
                </Col>
            </Row>
        </Container>
    </>
    
  )
}
