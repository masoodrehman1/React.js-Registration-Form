import {useEffect} from 'react'
import {  useDispatch } from 'react-redux';
import { FetchApi } from './FetchApi';
import { fetchApiUsers } from '../ReduxData/Reducers/Reducer1';

const AllApiData = () => {
    const dispatch= useDispatch()
    useEffect(() => {
        FetchApi().then((data)=>dispatch(fetchApiUsers(data))) 
            }, [])


  return null
}

export default AllApiData

