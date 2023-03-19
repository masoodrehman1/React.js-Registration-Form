import React, { useContext } from "react";
import { Input } from "reactstrap";
import { AppContext } from "./inputs";

const CardSection = () => {
  const { formData, editUserInputs, deleteRecord } = useContext(AppContext);
  
  const handleEdit = (id) => {
    editUserInputs(id);
  };
  const handleDelete = (id) => {
    deleteRecord(id);
  };
  return (
    <>
      
      <div>
      
        {formData.map((record) => {
          return (
            <div key={record.id} className="my-cards">
              <Input
                className="my-filter"
                type="text"
                placeholder="Filter Contacts..."
              />

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
                        onClick={() => handleEdit(record.id)}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(record.id)}
                        type="button"
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4 px-2 py-2 text-end">
                    <button type="button" className="mybtn">
                      {record.radio2}
                    </button>

                    <img
                      src={record.image}
                      className="img-fluid rounded-start"
                      alt="..."
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        )}
      </div>
    </>
  );
};

export default CardSection;


