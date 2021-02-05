import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  border: black 3px solid;
  border-radius: 10px;
  margin: 1rem;
  padding: 1rem;
  width: auto;
  .warning {
    color: red;
    font-weight: bold;
  }
  .inputItem {
    margin: 0.5rem;
  }
  .inputTerms {
    margin: 0.5rem 0.5rem 0 0;
    display: flex;
    flex-direction: row-reverse;
  }
  .inputItem label {
    float: left;
  }
  .inputItem input {
    width: 100%;
    margin-top: 0.5rem;
    box-sizing: border-box; // needed to make input box fit inside div
  }
  .inputItem button {
    float: right;
    width: 5rem;
  }
`;
const StyledList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const StyledCards = styled.div`
  border: black 3px solid;
  border-radius: 10px;
  margin: 2%;
  padding: 1%;
  width: auto;
`;


const formSchema = yup.object().shape({
    username: yup
    .string()
    .required("User name required")
    .min(8, "User name 8 characters minimum"),
    password: yup
    .string()
    .required("Password is required")
    .min(6, "Password had 6 character minimum"),
    name: yup
    .string()
    .required("Name is required"),
    phonenumber: yup
    .string()
    .optional("Phone number is optional"),
    email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
    age: yup
    .string()
    .required("Age is required"),
    terms: yup.boolean().oneOf([true], "Must accept terms!"),
});

const Form = () => {
    //state for form
    const [formState, setFormState] = useState({
        username: "",
        password: "",
        name: "",
        phonenumber: "",
        email: "",
        age: null,
        terms: false,
    });
    // State for errors
      const [errors, setErrors] = useState({
        username: "",
        password: "",
        name: "",
        phonenumber: "",
        email: "",
        age: null,
        terms: "",
});

// state for submit button
  const [buttonDisabled, setButtonDisabled] = useState(false);
  // state for user object
  const [users, setUsers] = useState([]);
  // only enable submit if form is valid !!!
  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState]);
  // change handler
  const changeHandler = (event) => {
    event.persist();
    const formData = {
      ...formState,
      [event.target.name]:
        event.target.name === "terms"
          ? event.target.checked
          : event.target.value,
    };
    validateChange(event);
    setFormState(formData);
  };
  // validate changes
  const validateChange = (event) => {
    yup
      .reach(formSchema, event.target.name)
      .validate(
        event.target.name === "terms"
          ? event.target.checked
          : event.target.value
      )
      .then((valid) => {
        setErrors({ ...errors, [event.target.name]: "" });
      })
      .catch((error) => {
        setErrors({ ...errors, [event.target.name]: error.errors[0] });
      });
  };
const formSubmit = (event) => {
    event.preventDefault();
    axios
      .then((response) => {
        setUsers([...users, response.data]);
        setFormState({
        username: "",
        password: "",
        name: "",
        phonenumber: "",
        email: "",
        age: "",
        terms: false,
         });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

return (
    <div>
         <StyledForm onSubmit={formSubmit}>
        <div className="warning">
        <div data-cy='warning'>{errors.name}{errors.email}{errors.password}{errors.terms}</div>
        </div>
    <div className="inputItem">
      <label>Username: </label>
          <input
            id="username"
            type="text"
            name="username"
            value={formState.username}
            onChange={changeHandler}
          />
        </div>  
        <div className="inputItem">
          <label>Password: </label>
          <input
            id="password"
            type="password"
            name="password"
            value={formState.password}
            onChange={changeHandler}
          />
        </div>
         <div className="inputItem">
          <label>Name: </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formState.name}
            onChange={changeHandler}
          />
        </div>
         <div className="inputItem">
          <label>Phone number: </label>
          <input
            id="phonenumber"
            type="phonenumber"
            name="phonenumber"
            value={formState.phonenumber}
            onChange={changeHandler}
          />
        </div>
        <div className="inputItem">
          <label>Email: </label>
          <input
            id="email"
            type="text"
            name="email"
            value={formState.email}
            onChange={changeHandler}
          />
        </div>
        <div className="inputItem">
          <label>Age: </label>
          <input
            id="age"
            type="number"
            name="age"
            value={formState.age}
            onChange={changeHandler}
          />
        </div>
         <div className="inputTerms">
          <label>Agree to Terms and Conditions</label>
          <input
            id="terms"
            type="checkbox"
            name="terms"
            checked={formState.terms}
            onChange={changeHandler}
          />
        </div>
        <div className="inputItem">
          <button disabled={buttonDisabled} type="submit">
            Submit
          </button>
          </div>
       </StyledForm>
      <StyledList>
        {users.map((user) => (
          <StyledCards key={user.id}>
            <p>{user.username}</p>
            <p>{user.password}</p>
            <p>{user.name}</p>
            <p>{user.phonenumber}</p>
            <p>{user.email}</p>
            <p>{user.age}</p>


          </StyledCards>
        ))}
      </StyledList>
    </div>
  );
};

export default Form;