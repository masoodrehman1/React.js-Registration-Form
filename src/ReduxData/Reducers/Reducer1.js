import { Control_Inputs, Submit_Form, Delete_Data, Edit_Data,fetch_API } from "../constants";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  formData: [],
  editMyData: null,
  submitButtonText: "Submit",
  usersInputs: {
    name: "",
    email: "",
    phone: "",
    image: null,
    personality: "",
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Control_Inputs:
      const { name, value, type, files } = action.payload.event.target;
      const newValue = type === "file" ? URL.createObjectURL(files[0]) : value;
      return {
        ...state,
        usersInputs: {
          ...state.usersInputs,
          [name]: newValue
        }
      };
    case Submit_Form:
      const { usersInputs } = action.payload;
      const { editMyData } = state;

      const updatedData = editMyData !== null
        ? state.formData.map(record =>
            record.id === editMyData ? { ...record, ...state.usersInputs } : record
          )
        : [...state.formData, { ...usersInputs, id: uuidv4() }];

      return {
        ...state,
        formData: updatedData,
        usersInputs: {
          name: "",
          email: "",
          phone: "",
          image: "",
          personality: "",
        },
        editMyData: null,
      };
    case Delete_Data:
      const newUserList = state.formData.filter(record => record.id !== action.payload)
      return {
        ...state,
        formData: newUserList
      };
    case Edit_Data:
      const editedId = action.payload;
      const editedData = state.formData.find(record => record.id === editedId);
      return {
        ...state,
        editMyData: editedId,
        usersInputs: editedData
      };
      case fetch_API:
      return{
        ...state,
        formData:action.payload
      }  
        
    default:
      return state;
  }
};