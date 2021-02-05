import React, { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const initialFormValues = {
    username: "",
    password: ""
}

function Login(props) {

    const [formValues, setFormValues] = useState(initialFormValues)

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const login = (e) => {
        e.preventDefault();
        axios.post("https://secret-family-recipes-be.herokuapp.com/api/auth/login", formValues)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            props.history.push("/protected")
            console.log("success", res.data)
        })
        .catch(err => {
            console.log("Login error", err)
        })
    }
    return (
         
        <StyledDiv>
            <Form onSubmit = {login}>
                <StyledLabel> Username:
                <StyledInput
                    type = "text"
                    name = "username" 
                    values = {formValues.username}
                    onChange = {handleChange}/>
                </StyledLabel>
                <StyledLabel>Password:
                <StyledInput
                    type = "password"
                    name = "password"
                    values = {formValues.password}
                    onChange = {handleChange}/>
                </StyledLabel>
                <StyledButton>Submit</StyledButton>
            </Form>
        </StyledDiv> 

    )
}

export default Login

const StyledDiv = styled.div`
    
`

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    flex-direction: column;
    text-align:left;

`

const StyledInput = styled.input`
    width:250px;
    display:flex;
    text-align:left;
    border-radius:8px;
    border:none;
    background-color: #ececec;
    height:20px;
    `

const StyledLabel = styled.label`
    text-align:left;
    font-size:1.2rem;

`
const StyledButton = styled.button`
    margin:10px;
    width:80px;
    height:30px;
    border-radius:8px;
    border:none;
    background-color:white;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, .1);
`
