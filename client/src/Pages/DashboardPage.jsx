import React , {useState, useEffect} from 'react'
import axios from "axios"
import {Container, Row, Col, Button, Card} from "react-bootstrap"

export default function DashboardPage() {
  const [categories,setCategories]= useState([])
  const [questions, setQuestions] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(()=>{
    async function fetchCategories() {
      const result = await axios.get('http://localhost:4000/category/')
      console.log("Categories from backend", result.data)
      setCategories(result.data)
    }
    fetchCategories()  
  }, [])

  const loadQuestions = (categoryID) =>{
    setSelectedCategory(categoryID)
    axios.get(`http://localhost:4000/question/${categoryID}`)
      .then(res=> setQuestions(res.data))
      .catch(err=> console.log(err))
  }



  return (
    <>
      <Container className="mt-4">
        <h2 className="mb-3">Categories</h2>
        {categories.map(category =>(
          <Row key={category.category_id} className="mb-3">
            <Col xs={12}>
              <Card className="shadow-sm">
                <Card.Body className="d-grid">
                  <Button variant="primary" size="lg" onClick={()=> loadQuestions(category.category_id)}>{category.category_name}</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  )
}
