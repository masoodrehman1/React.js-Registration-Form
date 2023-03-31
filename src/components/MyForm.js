import React  from 'react'
import SocialButton from "./SocialButton";
import { Form, Label, Col, FormGroup, Input, Button } from "reactstrap";
import { useSelector, useDispatch } from 'react-redux';
import { submitForm,controlInput } from '../ReduxData/Reducers/Reducer1';


import "../App.css";



const MyForm = () => {
  const dispatch= useDispatch()
    const usersInputs= useSelector((state)=>state.users.usersInputs)
    console.log("usersInputs", usersInputs)

  const controlInputsHandler = (event)=>{
   
    const { name, value, type, files } = event.target;
    dispatch(controlInput({ name, value, type, files }));
    console.log("event", event);}
  
  const handlesubmitForm=(event)=>{
    event.preventDefault();
    
    dispatch(submitForm({usersInputs}))}  
  return (
    <div className="form">
      
    <div className='maindiv' >  <Form className="form-section" onSubmit={(event)=>handlesubmitForm(event)} >
    <FormGroup row>
      <Label for="name" sm={2}>
        Name
      </Label>
      <Col sm={10}>
        <Input
          onChange={controlInputsHandler}
          id="name"
          name="name"
          placeholder="Type Your Name"
          type="text"
          value={usersInputs.name}
        />
      </Col>
    </FormGroup>

    <FormGroup row>
      <Label for="email" sm={2}>
        Email
      </Label>
      <Col sm={10}>
        <Input
          onChange={controlInputsHandler}
          id="email"
          name="email"
          type="text"
          placeholder="Type Your email"
          value= {usersInputs.email}
        />
      </Col>
    </FormGroup>

    <FormGroup row>
      <Label for="phone" sm={2}>
        Phone Number
      </Label>
      <Col sm={10}>
        <Input
          onChange={controlInputsHandler}
          className=""
          id="phone"
          name="phone"
          type="text"
          value={usersInputs.phone}
          placeholder="Type Your Phone Number"
        />
      </Col>
    </FormGroup>
    <FormGroup>
      <div className="pic">
        <div className="image-area active" id="preview" data-img="">
          {usersInputs && (<img

            src={usersInputs.image }
            name="myimage"
            className=" rounded-start"
            id="output"
            alt="..."
           
          
          />)}

          <i className="fa-solid fa-cloud-arrow-up icon"></i>
          <h3>Upload Image</h3>
        </div></div>
    </FormGroup>
    <FormGroup>
      <Label for="exampleFile">File</Label>
      <Input id="myImages" name="image" type="file" accept="image/*"
        onChange={(event)=>controlInputsHandler(event)} />
    </FormGroup>
    <FormGroup row tag="fieldset">
      <legend className="col-form-label col-sm-2">Personality</legend>
      <Col className="personalinput" sm={10}>
        <FormGroup check>
          <Input onChange={(event)=>controlInputsHandler(event)} value="personal" checked={usersInputs && usersInputs.personality === "personal"} name="personality" type="radio" />{" "}
          <Label for='personal'>Personal</Label>
        </FormGroup>
        <FormGroup check>
          <Input onChange={(event)=>controlInputsHandler(event)} value="professional" checked={usersInputs && usersInputs.personality === "professional"} name="personality" type="radio" />{" "}
          <Label for='professional' >Professional</Label>
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
        <Button  type="submit" id='submit'>submit</Button>
      </Col>
    </FormGroup>
    <div className="social">
      <SocialButton />
    </div>
  </Form></div></div>
  )
}

export default MyForm