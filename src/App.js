import './App.css';
import Arr from './components/utils/arr'
import React, {useState, useEffect} from "react";
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Main from './components/layout/main';

function App() {
  const [arr, setArr] = useState(Arr);
  const [checkerArr, setCheckerArr] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const check = (e) => {
    if (checkerArr.includes(e.target.src)) {
        // reset current score and checker array
        setCurrentScore(0);
        setCheckerArr([]);
    }
    else {
        // increment current soore by 1 and
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

    // set the best score
    if (currentScore > bestScore) setBestScore(currentScore);

  }, [checkerArr, bestScore])

  return (
    <div className="App">
      <Header
      currentScore={currentScore}
      bestScore={bestScore}>
      </Header>

      <Main 
      shuffleOnClick={shuffleOnClick}
      arr={arr}>
      </Main>

      <Footer></Footer>
    </div>
  );
}

export default App;
