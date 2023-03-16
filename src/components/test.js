// import React, { useState, useEffect } from "react";
import MyForm from "./MyForm";
import "../App.css";
import { useContext } from "react";
import MyNavbar from "./navbar";
import FormDataContext from "./context";
import CardPage from "./CardPage";

const Inputs = () => {
  const [myRecord, setMyRecord] = useState([]);
  const [editMyRecord, setEditMyRecord] = useState(null);

  const [userInputs, setUserInputs] = useState({
    name: "",
    email: "",
    phone: "",
    personality: "",
    MyImage: null,
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => setMyRecord(res));
  }, []);

  const controlInput = ({ target }) => {
    setUserInputs({
      ...userInputs,
      [target.name]:
        target.name === "MyImage"
          ? URL.createObjectURL(target.files[0])
          : target.value,
    });
  };

  const handlesubmits = (e) => {
    e.preventDefault();
    if (editMyRecord === null) {
      const newRecord = {
        ...userInputs,
        id: new Date().getTime().toString(),
      };
      setMyRecord([...myRecord, newRecord]);
    } else {
      const updatedRecord = {
        ...userInputs,
        id: editMyRecord,
      };
      const updatedRecords = myRecord.map((record) =>
        record.id === editMyRecord ? updatedRecord : record
      );
      setMyRecord(updatedRecords);
      setEditMyRecord(null);
    }

    setUserInputs({ name: "", email: "", phone: "", MyImage: null, personality: "" });
  };

  const editRecord = (id) => {
    setEditMyRecord(id);

    const recordToEdit = myRecord.find((record) => record.id === id);
    setUserInputs(recordToEdit);
  };

  const deleteRecord = (id) => {
    const updatedRecords = myRecord.filter((record) => record.id !== id);
    setMyRecord(updatedRecords);
  };

  const handlePersonality = (e) => {
    const personality = e.target.value;
    setUserInputs({ ...userInputs, personality });
  };

  return (
    <FormDataContext.Provider value={{ deleteRecord, editRecord, myRecord }}>
      <div>
        <MyNavbar />
        <div className="form">
          <div className="maindiv">
            <MyForm
              imageURL={userInputs.MyImage}
              handlesubmits={handlesubmits}
              handlePersonality={handlePersonality}
              userInputs={userInputs}
              controlInput={controlInput}
            />
          </div>
        </div>
      </div>
      <CardPage />
    </FormDataContext.Provider>
  );
};

export default Inputs;