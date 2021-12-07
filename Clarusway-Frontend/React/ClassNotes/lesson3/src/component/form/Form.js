import "./styles.css";
import { useState } from "react";

const Form = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [country, setCountry] = useState("");
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
  });
  // const handleName = (e) => setName(e.target.value);
  // const handleEmail = (e) => setEmail(e.target.value);
  // const handlePassword = (e) => setPassword(e.target.value);
  // const handleCountry = (e) => setCountry(e.target.value);
  const handleValues = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `
      username : ${values.name}
      email: ${values.email}
      password:${values.password}
      country:${values.country}
      `
    );
    setValues({ values: "" });

    // setName("");
    // setEmail("");
    // setPassword("");
    // setCountry("");
  };

  return (
    <div style={{ height: "110vh" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <p></p>
          <label>
            <strong>Username:{values.name}</strong>{" "}
          </label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="name"
            defaultValue="Jane"
            value={values.name}
            onChange={handleValues}
          />
        </div>
        <div>
          <p></p>
          <label>
            <strong>E-mail:{values.email} </strong>{" "}
          </label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={values.email}
            onChange={handleValues}
          />
        </div>
        <div>
          <p></p>
          <label>
            <strong>Password:{values.password} </strong>
          </label>
          <br />
          <input
            type="password"
            placeholder="pass"
            name="password"
            value={values.password}
            onChange={handleValues}
          />
        </div>
        <div style={{ margin: "10px auto" }}>
          <p></p>
          <label>
            <strong>Country:{values.country} </strong>
          </label>
          <br />
          <select
            onChange={handleValues}
            value={values.country}
            name="country"
            style={{ marginTop: "10px", width: "100px", padding: "10px" }}
          >
            <option value="">Country</option>
            <option value="Turkey">Turkey</option>
            <option value="Germany">Germany</option>
            <option value="Netherland">Netherland</option>
            <option value="France">France</option>
          </select>
        </div>
        <button className="btn__click" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
