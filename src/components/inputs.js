import React, { createContext, useReducer  } from "react";

import "../App.css";

const initialState= {
  formData:[],
  editMyData:"",
  submitButtonText:"Submit",
  userInputs:{
    name:"",
    email:"",
    phone:"",
    personality:"",
    image:""
  }
}

const reducer=(state, action)=>{
switch(action.type){
  case "user_input":
    return{...state, userInputs:action.payload}
  case "submit_Text":
    return{...state, submitButtonText: action.payload}
  case   "form_data":
    return{...state, formData: action.payload }
  case "edi_users_data":
    return{...state, editMyData: action.payload} 
    default:
      return state 
}
}
 const AppContext = createContext();
  const AppContextProvider = ({children}) => {
  const [state, dispatch]= useReducer(reducer, initialState)

const controlInput=({target})=>{
 
  dispatch({type:"user_input", payload: {...state.userInputs, [target.name]: target.type==="file" ? URL.createObjectURL(target.files[0]):target.value}})
}

const submitForm =(event)=>{
  event.preventDefault();
  if(state.editMyData===null){
    dispatch({type:"submit_Text", payload:"Submit"})
  const newData = {...state.userInputs, id: state.formData.length}
dispatch({type: "form_data", payload:[...state.formData, newData]})

}else{
  const myEditedData= state.formData.map((record)=> record.id===state.editMyData ? {...state.userInputs, id:state.editMyData}:record)
dispatch({type:"form_data", payload: myEditedData})

}
dispatch({type:"user_input",
payload:{
  myname: "",
  myemail:"",
  myphone:"",
  radio2:"",
  image:null,}
})
document.getElementById("myImages").value=null
}

 
  
const editUserInputs=(id)=>{
  dispatch({type:"edi_users_data", payload:id})
  dispatch({type:"submit_Text", payload: "Edit"})
  
 const editedData= state.formData.find((record)=> record.id===id)
 dispatch({type:"user_input", payload:editedData})
}
const deleteRecord=(id)=>{
  if (window.confirm("Are you sure to delete record")){
  const deleteData= state.formData.filter((record)=> record.id !==id )
  dispatch({type:"form_data",payload:deleteData})}
}


  return (
    <AppContext.Provider value={{submitButtonText:state.submitButtonText,deleteRecord,controlInput,submitForm,userInputs:state.userInputs, editUserInputs, formData:state.formData,dispatch}}>
  <div >
  {children}
       
       </div>
      </AppContext.Provider> 
    
  );
};

export {AppContext, AppContextProvider}


