import React , { useContext} from 'react'
import SocialButton from "./SocialButton";
import { Form, Label, Col, FormGroup, Input, Button } from "reactstrap";
import { AppContext } from './inputs';
import "../App.css";



const MyForm = () => {
    const {userInputs, controlInput, submitForm, submitButtonText} = useContext(AppContext)
  
    
  return (
    <div className="form">
      
    <div className='maindiv' > <Form className="form-section" onSubmit={(event)=>submitForm(event)} >
    <FormGroup row>
      <Label for="name" sm={2}>
        Name
      </Label>
      <Col sm={10}>
        <Input
          onChange={controlInput}
          id="name"
          name="name"
          placeholder="Type Your Name"
          type="text"
          value={userInputs.name}
        />
      </Col>
    </FormGroup>

    <FormGroup row>
      <Label for="email" sm={2}>
        Email
      </Label>
      <Col sm={10}>
        <Input
          onChange={controlInput}
          id="email"
          name="email"
          type="text"
          placeholder="Type Your email"
          value= {userInputs.email}
        />
      </Col>
    </FormGroup>

    <FormGroup row>
      <Label for="phone" sm={2}>
        Phone Number
      </Label>
      <Col sm={10}>
        <Input
          onChange={controlInput}
          className=""
          id="phone"
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
          {userInputs && (<img

            src={userInputs?.image || ''}
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
        onChange={(event)=>controlInput(event)} />
    </FormGroup>
    <FormGroup row tag="fieldset">
      <legend className="col-form-label col-sm-2">Personality</legend>
      <Col className="personalinput" sm={10}>
        <FormGroup check>
          <Input onChange={(event)=>controlInput(event)} value="personal" checked={userInputs.personality === "personal"} name="radio2" type="radio" />{" "}
          <Label for='personal'>Personal</Label>
        </FormGroup>
        <FormGroup check>
          <Input onChange={(event)=>controlInput(event)} value="professional" checked={userInputs.personality === "professional"} name="radio2" type="radio" />{" "}
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
        <Button  type="submit" id='submit'>{submitButtonText}</Button>
      </Col>
    </FormGroup>
    <div className="social">
      <SocialButton />
    </div>
  </Form></div></div>
  )
}

export default MyForm