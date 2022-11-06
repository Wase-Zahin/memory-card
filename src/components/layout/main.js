import styled from "styled-components";
import React, {useState, useEffect} from "react";
import Arr from "../utils/arr";

const MainContainer = styled.div`
    display: grid;
    color: white;
    padding: 1rem;
    margin: auto;
    gap: 0.5rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

const Main = () => {
    const [arr, setArr] = useState(Arr)

    const shuffle = ([...array]) => {
        for (let i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = array[i];
            array[i] = array[j];
            array[j] = tmp;
        }
        console.log('hi')
        return array;
    }

    const shuffleOnClick = () => {
        const onClickShuffle = shuffle(arr)
        setArr(onClickShuffle);
    }

    useEffect(() => {
        const initialShuffle = shuffle(arr);
        setArr(initialShuffle);

    }, [])

    return (
        <MainContainer>
            {arr.map((elem) => {
                return <div className="imgDiv" onClick={shuffleOnClick}>{elem}</div>
            })}
        </MainContainer>
    )
}

export default Main;