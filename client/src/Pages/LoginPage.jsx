import React , {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import axios from 'axios'

export default function LoginPage() {
    const[formData, setFormData] = useState({
        user_name: "",
        user_password:""
    })

    const[errorMessage, setErrorMessage]= useState("")

    function handleChange(event){
        const {name, value} = event.target
        setFormData({...formData, [name]:value})
    }

    async function handleClick(event){
        setErrorMessage("")
        try {
           const result = await axios.post ("http://localhost:4000/users/", {user_name:formData.user_name, user_password:formData.user_password})
           console.log(result.data)
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
                        <Form.Group className="mb-3" controlId="formBasicEmail">
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
                                type="text"
                                placeholder="Password"
                                name="user_password"
                                onChange={(event)=>handleChange(event)}/>
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={(event)=>handleClick(event)}>Log In</Button>
                        {errorMessage && (<p style={{ color: "red" }}>{errorMessage}</p>)}
                    </Form>
              </Col>
          </Row>
        </Container>
    </> 
  )
}

