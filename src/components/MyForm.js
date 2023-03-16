import React, {useEffect} from 'react'
import SocialButton from "./SocialButton";
import { Form, Label, Col, FormGroup, Input, Button } from "reactstrap";



const MyForm = ( {handlesubmits,handlePersonality, controlInput, userInputs, imageURL}) => {

useEffect(() => {
 console.log("ffff", userInputs)
}, [userInputs]);


  return (
    <div>
    <Form className="form-section" onSubmit={handlesubmits}>
    <FormGroup row>
      <Label for="myname" sm={2}>
        Name
      </Label>
      <Col sm={10}>
        <Input
          onChange={controlInput}
          id="myname"
          name="name"
          placeholder="Type Your Name"
          type="text"
          value={userInputs.name}
        />
      </Col>
    </FormGroup>

    <FormGroup row>
      <Label for="myemail" sm={2}>
        Email
      </Label>
      <Col sm={10}>
        <Input
          onChange={controlInput}
          id="myemail"
          name="email"
          type="text"
          placeholder="Type Your email"
          value={userInputs.email}
        />
      </Col>
    </FormGroup>

    <FormGroup row>
      <Label for="myphone" sm={2}>
        Phone Number
      </Label>
      <Col sm={10}>
        <Input
          onChange={controlInput}
          className=""
          id="myphone"
          name="phone"
          type="text"
          value={userInputs.phone}
          placeholder="Type Your Phone Number"
        />
      </Col>
    </FormGroup>
    <FormGroup>
    <div className="pic">
    <div className="image-area active" id="preview" data-img="">
    <img 
      src={imageURL}
      name= "Image"
      className=" rounded-start"
      id="output"
      alt="..."
    />
       
      <i className="fa-solid fa-cloud-arrow-up icon"></i>
      <h3>Upload Image</h3>
    </div>
  </div>
    </FormGroup>
    <FormGroup>
      <Label for="exampleFile">File</Label>
      <Input id="exampleFile" name="MyImage" type="file" accept="image/*" 
      onChange={(e)=>{controlInput(e)}}/>
    </FormGroup>
    <FormGroup row tag="fieldset">
      <legend className="col-form-label col-sm-2">Personality</legend>
      <Col className="personalinput" sm={10}>
        <FormGroup check>
          <Input onChange={(e)=>handlePersonality(e)} value="personal" checked={userInputs.gender === "personal"} name="radio2" type="radio" />{" "}
          <Label >Personal</Label>
        </FormGroup>
        <FormGroup check>
          <Input onChange={(e)=>handlePersonality(e)} value="professional" checked={userInputs.gender === "professional"} name="radio2" type="radio" />{" "}
          <Label >Professional</Label>
        </FormGroup>
      </Col>
    </FormGroup>

    <FormGroup check row>
      <Col
        sm={{
          offset: 2,
          size: 10,
        }}
      >
        <Button type="submit">Submit</Button>
      </Col>
    </FormGroup>
    <div>
      <SocialButton/>
    </div>
  </Form>

    </div>
  )
}

export default MyForm
