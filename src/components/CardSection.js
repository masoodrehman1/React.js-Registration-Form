import React from "react";
import { Input } from "reactstrap";

const CardSection = ({ id,deleteRecord, editRecord,myRecord}) => {
  
 
       
        return (
          <div className="my-cards">
            <Input
              className="my-filter"
              type="text"
              placeholder="Filter Contacts..."
            />

            <div className="card great " id="list-container">
              <div className="row g-0" id="project">
                <div className="col-md-8 ps-2 py-5">
                  <h5 className="card-title">
                    <i className="fa-regular fa-file-signature"></i>
                    {myRecord.myname}{myRecord.name}
                  </h5>
                  <p className="card-text">
                    <i className="fa-solid fa-envelope"></i> {myRecord.myemail}{myRecord.email}
                  </p>
                  <p className="card-text">
                    <i className="fa-solid fa-phone-volume"></i>
                    {myRecord.myphone}{myRecord.phone}
                  </p>
                  <div className="button-group">
                    <button onClick={()=>editRecord(id)} type="button" className="btn btn-primary">
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={()=>deleteRecord(id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="col-md-4 px-2 py-2 text-end">
                  <button   type="button" className="mybtn" >
                  
                  {myRecord.gender}
                </button>
                 
                  <img
                    src={myRecord.image
                    }
                    className="img-fluid rounded-start"
                    alt="..."
                  ></img>
                </div>
              </div>
            </div>
          </div>
        );
    
};

export default CardSection;

// <CardSection submit={myRecord}/>