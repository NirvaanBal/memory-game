import { useState, useEffect } from 'react';

import shuffle from './utils/shuffle';

import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Card from './components/Card';

function App() {
  const [numbers, setNumbers] = useState(shuffle(10));
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
      setNumbers(shuffle(10));
    }
  };

  useEffect(() => {
    setScore(values.length);
  }, [values]);

  return (
    <>
      <Header />
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
