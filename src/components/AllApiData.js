import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchApi } from './FetchApi';
import { fetchApiUsers, deleteData, clearApiUser } from '../ReduxData/Reducers/Reducer1';

const AllApiData = () => {
  const dispatch = useDispatch();
  const { formData, apiUser } = useSelector(state => state.users);

  const getUsers = useCallback(() => {
    FetchApi.getUsers().then((data) => dispatch(fetchApiUsers(data)));
  }, [dispatch]);

  
  const deleteUser = useCallback((id) => {
    FetchApi.deleteuser(id).then(() => dispatch(deleteData(id)));
  }, [dispatch]);

  const putUser = useCallback(() => {
    formData.forEach((record) => {
      FetchApi.putUser(record.id, record);
    });
  }, [formData]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    if (apiUser.length > 0) 
      return FetchApi.postUsers(apiUser)
        .then((data) => dispatch(fetchApiUsers(data)));
    }, [apiUser, dispatch])
     
    
 

  useEffect(() => {
    return () => {
      putUser();
    };
  }, [putUser]);
  const handleDelete = (id) => {
    deleteUser(id);
  };

  return null;
};

export default AllApiData;