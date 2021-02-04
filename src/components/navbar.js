import React from 'react'
import style from 'styled-components'

const form = () => {
    return (
         <Container>
        <h1>Im the navbar</h1>
    </Container>
    );
};

const Container = styled.div`
width: 100vw;
height: 50px;
background-color: lightseagreen;
display: flex;
justify-content: center;
align-items: center;
`;

export default navbar;