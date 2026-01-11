import React , {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SignUpPage() {

     const [formData, setFormData] = useState ({
            user_name: "",
            user_password:"",
            user_email: ""
        })
    
        function handleChange (event) {
            const{ name,value } = event.target 
            setFormData ({...formData, [name]:value})
        }

        function handleClick(event){
            event.preventDefault()
            
        }

  return (
    <>
        <h2 className="text-center mb-4">Sign Up</h2>
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6} lg={4}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" placeholder="User Name" name="user_name"
                              onChange={(event)=>handleChange(event)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
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
                     </Form>
                </Col>
            </Row>
        </Container>
    </>
    
  )
}
