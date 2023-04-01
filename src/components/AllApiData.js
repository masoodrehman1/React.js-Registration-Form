import {useEffect} from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { FetchApi } from './FetchApi';
import { fetchApiUsers } from '../ReduxData/Reducers/Reducer1';

const AllApiData = () => {
    const dispatch= useDispatch()
    const usersInputs= useSelector(state=>state.users.formData)
    useEffect(()=>{
     FetchApi.postUsers(usersInputs)
    },[usersInputs])
    useEffect(() => {
        FetchApi.getUsers().then((data)=>dispatch(fetchApiUsers(data))) 
            }, [])


  return null
}

export default AllApiData

