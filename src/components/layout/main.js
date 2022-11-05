import styled from "styled-components";
import React, {useState, useEffect} from "react";
import Arr from "../utils/arr";

const MainContainer = styled.div`
    display: grid;
    background-color: red;
    color: white;
    padding: 1rem;
    margin: auto;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    border: 2px solid black;
`

const elems = Arr.map((elem) => {
    return elem
})

const Main = () => {
    const [arr, setArr] = useState(['hello, hell, hel, he, h'])
    return (
        <MainContainer>
            {elems}
        </MainContainer>
    )
}

export default Main;