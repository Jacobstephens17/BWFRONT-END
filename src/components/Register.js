import React, { useState } from 'react'
import axios from "axios"
import styled from 'styled-components';

const initialFormValues = {
    username: '',
    password: '',
    name: '',
    phone: '',
    email: '',
    age: null
};

const initialTerms = {
    terms: false,
}

const Register = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [terms, setTerms] = useState(initialTerms)

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    };

    const flipTerms = () => {
        if(!terms) {
            setTerms(true);
        }
        else if(terms) {
            setTerms(false);
        }
        console.log(terms);
    };

    const register = (e) => {
        e.preventDefault();
        axios.post('https://secret-family-recipes-be.herokuapp.com/api/auth/register', formValues)
        .then(res => {
            props.history.push('/login');
            console.log('register post: ', res.data);
        })
        .catch(err => {
            console.log('register error: ', err)
        })
    }

    return(
        <div>
            <StyledForm onSubmit={register}>
                <StyledLabel>Username</StyledLabel>
                <StyledInput
                type='text'
                name='username'
                value={formValues.username}
                onChange={handleChange}
                />
                <StyledLabel>Password</StyledLabel>
                <StyledInput
                type='password'
                name='password'
                value={formValues.password}
                onChange={handleChange}
                />
                <StyledLabel>Real Name</StyledLabel>
                <StyledInput
                type='text'
                name='name'
                value={formValues.name}
                onChange={handleChange}
                />
                <StyledLabel>Phone Number</StyledLabel>
                <StyledInput
                type='text'
                name='phone'
                value={formValues.phone}
                onChange={handleChange}
                />
                <StyledLabel>Email</StyledLabel>
                <StyledInput
                type='email'
                name='email'
                value={formValues.email}
                onChange={handleChange}
                />
                <StyledLabel>Age</StyledLabel>
                <StyledInput
                type='text'
                name='age'
                value={formValues.age}
                onChange={handleChange}
                />
                <div>
                    <label>Terms and Stuff</label>
                    <input 
                    type='checkbox'
                    name='terms'
                    checked={terms.terms}
                    onChange={flipTerms}
                    />
                </div>
                <div>
                    <StyledButton>Submit</StyledButton>
                </div>
            </StyledForm>
        </div>
    )
}

export default Register;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh;
    border-radius: 10px;
    margin: auto;
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

const StyledButton = styled.button`
margin:10px;
width:80px;
height:30px;
border-radius:8px;
border:none;
background-color:white;
box-shadow: 3px 3px 3px rgba(0, 0, 0, .1);
`

const StyledLabel = styled.label`
    text-align:left;
    font-size:1.1rem;
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