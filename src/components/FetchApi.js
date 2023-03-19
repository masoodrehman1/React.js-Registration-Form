import React,{ useContext, useEffect} from 'react'
import { AppContext } from './inputs'


const FetchApi = () => {
    const { setFormData } = useContext(AppContext);
useEffect(() => {
 fetch("https://jsonplaceholder.typicode.com/users")
 .then((response)=>response.json())
 .then((res)=>setFormData(res))


}, [])



  return (
    <div>

    </div>
  )
}

export default FetchApi