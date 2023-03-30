import React, {useEffect} from 'react'
import {  useDispatch } from 'react-redux';
import { FetchApi } from './FetchApi';
import { fetchApiData } from '../ReduxData/actions/Actions';

const AllApiData = () => {
    const dispatch= useDispatch()
    useEffect(() => {
        FetchApi().then((data)=>dispatch(fetchApiData(data))) 
            }, [])


  return null
}

export default AllApiData

