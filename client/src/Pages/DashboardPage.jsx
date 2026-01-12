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
    if(selectedCategory === categoryID){
      setSelectedCategory(null)
      setQuestions([])
      return
    }
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
            <React.Fragment key={category.category_id}>
              <Row  className="mb-3">
                <Col xs={12}>
                  <Card className="shadow-sm">
                    <Card.Body className="d-grid">
                      <Button variant="primary" size="lg" onClick={()=> loadQuestions(category.category_id)}>{category.category_name}</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
          
          {selectedCategory === category.category_id && (
            <Row className="mb-4">
              <Col xs={12}>
                {category.image_name && (
                  <Card className="mb-3">
                    <Card.Img variant="top" src={`/images/${category.image_name}`} alt={category.category_name}/>
                  </Card>
                )}
                {questions.length === 0 ?(<p className="text-muted ms-3">No Questions.</p>)
                  :(questions.map(question=>(
                  <Card key= {question.question_id} className="mb-3 ms-3">
                    <Card.Body>
                      <Card.Title>
                        Q: {question.question_text}
                      </Card.Title>
                      <Card.Text>
                        <strong>A:</strong> {question.answer_text}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))
              )}  
              </Col>
            </Row>
          )}
          </React.Fragment>
        ))}
      </Container>
    </>
  )
}
