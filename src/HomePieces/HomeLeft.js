import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../images/bg.jpg'



const HomeLeft = () => {

    return (
        <StyledPage>
            <StyledHeader>
                <Span>Secret Family Recipes</Span><br/> Your place for generation after generation of tradition 
            </StyledHeader>
        </StyledPage>
    )
}

export default HomeLeft;



const StyledPage = styled.div`
    position:fixed;
    background-repeat:no-repeat;
    background-size:cover;
    justify-content:center;
    align-items:center;
    background-image: url(${backgroundImage});
    width:35%;
    height:100%;
    z-index: 2;
`

const StyledHeader = styled.h1`
    display:flex;
    flex-wrap:wrap;
    text-align:center;
    padding-right:1rem;
    align-items:center;
    color:white;
    margin-left:10%;
    font-size:1.7rem;
    font-weight:450;
    justify-items:center;
    margin-top:50%;
    width:75%;
`

const Span = styled.span`
    font-weight:bolder;
    color:white;
    border-bottom: 2px solid white;
`
