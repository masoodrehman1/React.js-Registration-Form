import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteData, editData } from '../ReduxData/Reducers/Reducer1'


const UserDetails = () => {
  const dispatch= useDispatch()
   const formData= useSelector((state)=>state.users.formData)
   const{id}= useParams()
   const users = formData.find((users)=>users.id===parseInt(id))
   const handleEdit=(id)=>{
    dispatch(editData(id))
   }
   const handleDelete=(id)=>{
    dispatch(deleteData(id))
   }
  
  return (
    <div>
     <div className="card great " id="list-container">
                <div className="row g-0" id="project">
                  <div className="col-md-8 ps-2 py-5">
                    <h5 className="card-title"> </h5>
                    <i className="fa-regular fa-file-signature"></i>
                    {users.name}
                    <p className="card-text">
                      <i className="fa-solid fa-envelope"></i> {users.email}
                    </p>
                    <p className="card-text">
                      <i className="fa-solid fa-phone-volume"></i>
                      {users.phone}
                    </p>
                    <div className="button-group">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleEdit(users.id)}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(users.id)}
                        type="button"
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4 px-2 py-2 text-end">
                    <button type="button" className="mybtn">
                      {users.radio2}
                    </button>

                    <img
                      src={users.image}
                      className="img-fluid rounded-start"
                      alt="..."
                    ></img>
                  </div>
                </div>
              </div>
  </div>
  )
}

export default UserDetails