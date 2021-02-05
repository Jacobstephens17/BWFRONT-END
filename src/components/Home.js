import React from 'react';
import HomeLeft from '../HomePieces/HomeLeft'
import HomeRight from '../HomePieces/HomeRight'
import styled from 'styled-components'





const Home = () => {

    return(
        <StyledHome>
            <HomeLeft/>
            <HomeRight/>
            
        </StyledHome>
        

    )
}

export default Home;


const StyledHome = styled.div`

`