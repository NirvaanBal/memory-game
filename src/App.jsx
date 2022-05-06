import { useState, useEffect } from 'react';

import shuffle from './utils/shuffle';

import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Card from './components/Card';

function App() {
  const [difficulty, setDifficulty] = useState(100);
  const [numbers, setNumbers] = useState(shuffle(difficulty));
  const [values, setValues] = useState([]);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  const getRandomNumbers = (value) => {
    if (values.includes(value)) {
      if (values.length > topScore) setTopScore(values.length);
      setScore(0);
      setValues([]);
    } else {
      setValues([...values, value]);
      setNumbers(shuffle(difficulty));
    }
  };

  const changeDifficulty = (e) => {
    const level = e.target.textContent.toLowerCase();
    if (level === 'easy') {
      setDifficulty(50);
      setNumbers(shuffle(difficulty));
    } else if (level === 'medium') {
      setDifficulty(100);
      setNumbers(shuffle(difficulty));
    } else {
      setDifficulty(200);
      setNumbers(shuffle(difficulty));
    }
  };

  useEffect(() => {
    setScore(values.length);

    return () => null;
  }, [values]);

  return (
    <>
      <Header handleDifficulty={changeDifficulty} />
      <Scoreboard best={topScore} score={score} />
      <div className="cards">
        {numbers.map((number, index) => (
          <Card
            key={index}
            value={number}
            handleClick={() => getRandomNumbers(number)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
