import React, { useState, createContext  } from "react";

import "../App.css";
// import CardSection from "./CardSection";
// import MyForm from "./MyForm";

 const AppContext = createContext();
  const AppContextProvider = ({children}) => {
  const [formData, setFormData] = useState([])
  const [editMyData, setEditMyData] = useState(null)
  const [submitButtonText, setsubmitButtonText] = useState("Submit")
const [userInputs, setUserInputs] = useState({
  name:"",
  email:"",
  phone:"",
personality:"",
image: null
})
const controlInput=({target})=>{
 
  setUserInputs({...userInputs, [target.name]: target.type==="file" ? URL.createObjectURL(target.files[0]):target.value})
}

const submitForm =(event)=>{
  event.preventDefault();
  if(editMyData===null){
    setsubmitButtonText("Submit")
  const newData = {...userInputs, id: formData.length}
setFormData([...formData, newData])

}else{
  const myEditedData= formData.map((record)=> record.id===editMyData ? {...userInputs, id:editMyData}:record)
setFormData(myEditedData)

}
setUserInputs({
  myname: "",
  myemail:"",
  myphone:"",
  radio2:"",
  image:null,
})
document.getElementById("myImages").value=null
}

 
  
const editUserInputs=(id)=>{
  setEditMyData(id)
  setsubmitButtonText("Edit")
  
 const editedData= formData.find((record)=> record.id===id)
 setUserInputs(editedData)
}
const deleteRecord=(id)=>{
  if (window.confirm("Are you sure to delete record")){
  const deleteData= formData.filter((record)=> record.id !==id )
  setFormData(deleteData)}
}


  return (
    <AppContext.Provider value={{submitButtonText,deleteRecord,controlInput,submitForm,userInputs, editUserInputs, formData,setFormData}}>
  <div >
  {children}
       
       </div>
      </AppContext.Provider> 
    
  );
};

export {AppContext, AppContextProvider}


