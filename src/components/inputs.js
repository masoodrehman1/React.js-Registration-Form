import React, { useState, useEffect} from "react";
import { Form, Label, Col, FormGroup, Input, Button } from "reactstrap";
import SocialButton from "./SocialButton";
import "../App.css";
import CardSection from "./CardSection";
import MyNavbar from "./navbar";





const Inputs = () => {
  const [imageFile, setImageFile] = useState(null)
  const [showImage, setShowImage] = useState(null)
  const [editMyRecord, setEditMyRecord] = useState(null)
  const [radioInput, setRadioInput] = useState("");
  
  
 

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response=> response.json())
  
  .then(res => setMyRecord(res))
   
},[] );


  

  const imageHandler=(e)=>{
   const selectedFile = e.target.files[0]
    setImageFile(selectedFile);
    const reader = new FileReader();
     reader.onload =()=>{
      setShowImage(reader.result)
     }
     reader.readAsDataURL(selectedFile)
  }

  const [userInputs, setUserInputs] = useState({
    myname: "",
    myemail: "",
    myphone: "",
    gender: "",
    image: null,
    
  });

  const [myRecord, setMyRecord] = useState([]);
  const controlInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInputs({ ...userInputs, [name]: value });
  };
 
  const handlesubmits = (e) => {
    e.preventDefault();
    if(editMyRecord ===null){

      
    const newRecord = { ...userInputs, gender: radioInput, image:showImage, id: new Date().getTime().toString() };

    setMyRecord([...myRecord, newRecord]); }else{  const updatedRecord = {
      ...userInputs,
      
      image: showImage,
      id: editMyRecord,
      personality: radioInput,
      
    };
    const updatedRecords = myRecord.map((record) =>
      record.id === editMyRecord ? updatedRecord : record
    );
    setMyRecord(updatedRecords);
    setEditMyRecord(null);
  }

    setUserInputs({ myname: "", myemail: "", myphone: "",  });
    setShowImage(null)
    setRadioInput("")
    
  };
  const editRecord = (id) => {
   console.log(id);
    setEditMyRecord(id);
    
    const recordToEdit = myRecord.find((record) => record.id === id);
    setUserInputs(recordToEdit);
    // setShowImage(recordToEdit.image);
    // setRadioInput(recordToEdit.personality);
    
    
  };
  
  const deleteRecord = (id) => {
    const updatedRecords = myRecord.filter((record) => record.id !== id);
    setMyRecord(updatedRecords);
    
  };

  const handleGenderChange = (e) => {
    const personality= e.target.value;
    setRadioInput( personality);
  };
  // https://jsonplaceholder.typicode.com/users
  
 
  return (
    <div>
      <MyNavbar />
      <div className="form">
        <div className="maindiv">
          <Form className="form-section" onSubmit={handlesubmits}>
            <FormGroup row>
              <Label for="myname" sm={2}>
                Name
              </Label>
              <Col sm={10}>
                <Input
                  onChange={controlInput}
                  id="myname"
                  name="myname"
                  placeholder="Type Your Name"
                  type="text"
                  value={userInputs.myname}
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
                  name="myemail"
                  type="text"
                  placeholder="Type Your email"
                  value={userInputs.myemail}
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
                  name="myphone"
                  type="text"
                  value={userInputs.myphone}
                  placeholder="Type Your Phone Number"
                />
              </Col>
            </FormGroup>
            <FormGroup>
            <div className="pic">
            <div className="image-area active" id="preview" data-img="">
            {showImage && <img 
              
              src={showImage}
              name= "myimage"
              className=" rounded-start"
              id="output"
              alt="..."
            />}
              
              <i className="fa-solid fa-cloud-arrow-up icon"></i>
              <h3>Upload Image</h3>
            </div></div>
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input id="exampleFile" name="file" type="file" accept="image/*" 
              onChange={(e)=>{imageHandler(e)}}/>
            </FormGroup>
            <FormGroup row tag="fieldset">
              <legend className="col-form-label col-sm-2">Personality</legend>
              <Col className="personalinput" sm={10}>
                <FormGroup check>
                  <Input onChange={(e)=>handleGenderChange(e)} value="personal" checked={userInputs.gender === "personal"} name="radio2" type="radio" />{" "}
                  <Label >Personal</Label>
                </FormGroup>
                <FormGroup check>
                  <Input onChange={(e)=>handleGenderChange(e)} value="professional" checked={userInputs.gender === "professional"} name="radio2" type="radio" />{" "}
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
        

          <div className="cardsection">
         
          {myRecord.map(record => {
            const { id } = record;
            return (
              <CardSection
                key={id}
                id={id}
                
                deleteRecord={() => deleteRecord(id)}
                editRecord={()=>editRecord(id)}
                myRecord={record}
                
               
              
           /> );
          })}
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
