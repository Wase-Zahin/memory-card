import styled from "styled-components";
import React, {useState, useEffect} from "react";
import Arr from "../utils/arr";

const MainContainer = styled.div`
    display: grid;
    color: white;
    padding: 1rem;
    margin: auto;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

const elems = Arr.map((elem) => {
    return elem;
})

const Main = () => {
    const [arr, setArr] = useState(Arr)

    const shuffleArrayOnClick = (newArr) => {
        var newArr = Arr;
        for (let i = newArr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = newArr[i];
            newArr[i] = newArr[j];
            newArr[j] = tmp;
        }
        setArr(newArr);
        return newArr;
    }

    useEffect(() => {
        shuffleArrayOnClick(arr);
    })

    return (
        <MainContainer>
            {arr}
        </MainContainer>
    )
}

export default Main;