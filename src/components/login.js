import React from 'react'
import MyNavbar from './navbar'
import "../App.css";
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate()
    const submitData=(e)=>{
        e.preventDefault()
        navigate("/inputdata")
    }
  return (
    <div>
    <MyNavbar/>
    <form onSubmit={submitData}>
    <label htmlFor='email'>Email
   </label>
    <input type="text" name= "email" required/>
    <label htmlFor='password'>Password</label>
    <input type="text" name='password' required/>  
    <button type='submit'> submit</button>
    </form>
    </div>
  )
}

export default Login;
