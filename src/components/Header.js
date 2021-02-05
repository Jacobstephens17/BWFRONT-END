import React from 'react'
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import styled from 'styled-components'



function Header() {
    const logout = () => {
        localStorage.removeItem('token');
        window.location.href =  '/';
      }; 

  

    return (
        <StyledHeader className='header'>
            <Form className = "search-bar">
                <Input placeholder='Search Here!' className = "bar">
                </Input>
                <SearchButton>Search</SearchButton>
            </Form>
            <LinkDiv>
                <Link className='linkButtons' to="/">Home</Link>
                <Link className='linkButtons' to="/login">Login</Link>
                <Link className='linkButtons' to='/register'>Register</Link>
                <Link className='linkButtons' to="/recipes">Recipes</Link>
                <Button onClick = {logout}>Logout</Button>
            </LinkDiv>
        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    background:none;
    position:fixed;
    width:95%;
    margin:0 0 0 0;
    justify-content:space-between;
    padding:1rem;
    z-index: 1;
`



const Form = styled.form`
    background:none;
    margin-left:2%;

`

const LinkDiv = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    margin-right:2.9%;
    justify-content:space-between;
`



const Input = styled.input`
    padding:.5rem 2rem;
    background:rgba(255,255,255, .5);
    border-radius:8px;
    font-weight:bolder;
    font-size:1rem;
    backdrop-filter: blur(5px);
    color:black;
    margin:auto 0;
    border:solid 1px transparent;
    background-clip: padding-box;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, .05);
`

const SearchButton = styled.button`
    padding: .5rem 3rem;
    background:rgba(255,255,255, .5);
    border-radius:8px;
    font-size:1rem;
    backdrop-filter: blur(5px);
    margin:auto 0;
    border:solid 1px transparent;
    background-clip: padding-box;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, .05);

`


const Button = styled.button`
    padding: .5rem 2rem;
    background:rgba(255,255,255, .5);
    border-radius:8px;
    font-size:1rem;
    backdrop-filter: blur(5px);
    margin:auto 0;
    border:solid 1px transparent;
    background-clip: padding-box;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, .05);

`