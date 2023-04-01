import React from "react";
import { Input } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { deleteData,editData } from "../ReduxData/Reducers/Reducer1";


const CardSection = () => {
 
  const dispatch= useDispatch()
  const handleDeleteData=(event,id)=>{
    event.preventDefault()
    dispatch(deleteData(id))
  }
  const handleEdit=(event,id)=>{
    event.preventDefault()
    dispatch(editData(id))}
  const myData= useSelector(state=> state.users.formData)
  console.log(myData)
  return (
    <>
      
      <div>
      
        {myData.map((record) => {
          return (
            <div key={record.id} className="my-cards">
              <Input
                className="my-filter"
                type="text"
                placeholder="Filter Contacts..."
              />

             <Link to={`/user/${record.id}`}>
              <div className="card great " id="list-container">
                <div className="row g-0" id="project">
                  <div className="col-md-8 ps-2 py-5">
                    <h5 className="card-title"> </h5>
                    <i className="fa-regular fa-file-signature"></i>
                    {record.name}
                    <p className="card-text">
                      <i className="fa-solid fa-envelope"></i> {record.email}
                    </p>
                    <p className="card-text">
                      <i className="fa-solid fa-phone-volume"></i>
                      {record.phone}
                    </p>
                    <div className="button-group">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={(event) => handleEdit(event,record.id)}
                      >
                        Edit
                      </button>
                      <button
                        onClick={(event) => handleDeleteData(event,record.id)}
                        type="button"
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4 px-2 py-2 text-end">
                    <button type="button" className="mybtn">
                      {record.personality}
                    </button>

                    <img
                      src={record.image}
                      className="img-fluid rounded-start"
                      alt="..."
                    ></img>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          );
        }
        )}
      </div>
    </>
  );
};

export default CardSection;


