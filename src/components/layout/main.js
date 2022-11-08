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
    const [arr, setArr] = useState(Arr);
    const [checkerArr, setCheckerArr] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const check = (e) => {
        if (checkerArr.includes(e.target.src)) {
            console.log(true);
            // reset current score and checker array
            setCurrentScore(0);
            setCheckerArr([]);
        }
        else {
            console.log(false)
            // increment curr soore by 1 and
            // push element to checker array on click
            setCurrentScore(prevScore => prevScore + 1);
            setCheckerArr(current => ([...current, e.target.src]));
        };
    }

    const shuffle = ([...array]) => { //shuffle logic
        for (let i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = array[i];
            array[i] = array[j];
            array[j] = tmp;
        }
        return array;
    }

    const shuffleOnClick = (e) => {
        // check if card is already clicked 
        check(e); 
        //shuffle on click
        const onClickShuffle = shuffle(arr)
        setArr(onClickShuffle);

    }

    useEffect(() => { //shuffle on page load
        const initialShuffle = shuffle(arr);
        setArr(initialShuffle);
        console.log(checkerArr);

    }, [checkerArr])

    return (
        <MainContainer>
            {arr.map((elem) => {
                return <div className="imgDiv" onClick={shuffleOnClick}>{elem}</div>
            })}
        </MainContainer>
    )
}

export default Main;