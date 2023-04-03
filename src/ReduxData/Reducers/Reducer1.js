import { v4 as uuidv4 } from 'uuid';
import { createSlice } from "@reduxjs/toolkit";
import { FetchApi } from '../../components/FetchApi';
import { useDispatch } from 'react-redux';

const initialState = {
  formData: [],
  editMyData: null,
  submitButtonText: "Submit",
  apiUser:[],
  usersInputs: {
    name: "",
    email: "",
    phone: "",
    image: null,
    personality: "",
  },
};

export const formSlice = createSlice({
  name:"form",
  initialState,
  reducers:{
    controlInput:(state, action) => {
  
      const { name, value, type, files } = action.payload
      const newValue = type === "file" ? URL.createObjectURL(files[0]):type==="radio" ?action.payload: value;
      return {
        ...state,
        usersInputs: {
          ...state.usersInputs,
          [name]:name==="personality"?value: newValue
        }
      };},
      
    submitForm:(state, action)=>{
      const { usersInputs } = action.payload;
      const { editMyData } = state;
     
      const updatedData = editMyData !== null
        ? state.formData.map(record =>
            record.id === editMyData ? { ...record, ...state.usersInputs } : record
          )
        : [...state.formData, { ...usersInputs, id: uuidv4() }];
        FetchApi.postUsers(usersInputs).then(response => {
          console.log(response);
        });
      return {
        ...state,
        formData: updatedData,
        apiUser:usersInputs,
        usersInputs: {
          name: "",
          email: "",
          phone: "",
          image: "",
          personality: "",
        },
        editMyData: null,
        
      };},
    deleteData:(state, action)=>{
      const newUserList = state.formData.filter(record => record.id !== action.payload)
      return {
        ...state,
        formData: newUserList
      };},
    editData:(state, action)=>{
      const editedId = action.payload;
      const editedData = state.formData.find(record => record.id === editedId);
      return({...state,
        editMyData: editedId,
        usersInputs: editedData}
)},
      fetchApiUsers:(state, action)=>{
        state.formData=action.payload
      }, 
      clearApiUser: (state) => {
        state.apiUser = [];
      }, 
      
    }})
    export const {submitForm,controlInput,deleteData,editData,fetchApiUsers,clearApiUser}=formSlice.actions
    export default formSlice.reducer
