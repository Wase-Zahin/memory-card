import styled from "styled-components";
import React, {useState, useEffect} from "react";

const MainContainer = styled.div`
    display: grid;
    background-color: black;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    border: 2px solid black;
`

const Main = () => {
    const [arr, setArr] = useState(['hello, hell, hel, he, h'])
    return (
        <MainContainer>
        </MainContainer>
    )
}

export default Main;