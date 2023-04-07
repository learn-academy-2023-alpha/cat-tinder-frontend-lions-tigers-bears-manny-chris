import React, {useState} from 'react'
import { FormGroup,Label,Form,Col,Input,FormText,Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'



const BeastNew = ({createBeast}) => {

  const [newBeast, setNewBeast] = useState({
    name: "",
    age: "",
    description: "",
    image: ""
  })
  const handleChange = (e) => {
    setNewBeast({...newBeast, [e.target.name]: e.target.value})
 
  }
  const handleSubmit = () => {
   if (newBeast.name === "" || newBeast.age === "" || newBeast.description === "" || newBeast.image === "") {
    window.alert("Please fill out the form")
  }
  else {  
    createBeast(newBeast)
    navigate('/beastindex')}
   
  }
  const navigate = useNavigate()
 


  return (
    <div className='content'>  
    <h2>Expand your Tribe</h2> 
    <Form>
  <FormGroup row >
    <Label
      for="name"
      sm={2}
    >
      Name
    </Label>
    <Col sm={10}>
      <Input
        id="name"
        name="name"
        placeholder="name"
        type="text"
        onChange={handleChange}
      />
    </Col>
  </FormGroup>
  <FormGroup row >
    <Label
      for="age"
      sm={2}
    >
      Age
    </Label>
    <Col sm={10}>
      <Input
        id="age"
        name="age"
        placeholder="age"
        type="number"
        onChange={handleChange}
      />
    </Col>
  </FormGroup>
 
  
  <FormGroup row>
    <Label
      for="description"
      sm={2}
    >
      Description
    </Label>
    <Col sm={10}>
      <Input
        id="description"
        name="description"
        type="textarea"
        onChange={handleChange}
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="file"
      sm={2}
    >
      Image
    </Label>
    <Col sm={10}>
      <Input
        id="file"
        name="file"
        type="file"
        // onChange={handleChange} need to update function for uploading images
      />
      <FormText>
       You can upload a file or use the above to input an address for your image.
      </FormText>
    </Col>
  </FormGroup>
  <FormGroup row >
    <Label
      for="image"
      sm={2}
    >
      Image URL
    </Label>
    <Col sm={10}>
      <Input
        id="image"
        name="image"
        placeholder="url"
        type="url"
        onChange={handleChange}
      />
    </Col>
  </FormGroup>
 
    
 
  <FormGroup
    check
    row
  >
    <Col
      sm={{
        offset: 2,
        size: 10
      }}
    >
      <Button onClick={handleSubmit}> 
        Spawn
      </Button>
    </Col>
  </FormGroup>
</Form>
    
    
    </div>
  )
}

export default BeastNew