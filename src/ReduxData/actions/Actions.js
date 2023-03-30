import { Control_Inputs,Submit_Form, Delete_Data, Edit_Data, fetch_API } from "../constants"


export const controlInputs=(event)=>{
    
    return{
        type: Control_Inputs,
        payload: event
    }
}
export const submitForm =(usersInputs )=>{
    return{
        type:Submit_Form,
        payload:usersInputs
    }
}
export  const deleteData=(id)=>{
    return {
        type : Delete_Data,
        payload: id
    }
}
export const editData= (id)=>{
    return {
        type:Edit_Data,
        payload:id
    }
}
export const fetchApiData=(res)=>{
    return{
        type:fetch_API,
        payload:res
    }
}
