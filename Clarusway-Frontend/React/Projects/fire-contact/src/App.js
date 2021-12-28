// import logo from "./logo.svg";
import React, { useState } from "react";

import FormComponent from "./components/form/FormComponent";
import Contacts from "./components/contacts/Contacts";

function App() {
  const initialValues = {
    username: "",
    phoneNumber: "",
    gender: "No Info",
  };
  const [info, setInfo] = useState(initialValues);
  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} />
      <Contacts />
    </div>
  );
}

export default App;
