import { useState } from 'react';

import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Card from './components/Card';
import shuffle from './utils/shuffle';

function App() {
  const [numbers, setNumbers] = useState(shuffle(10));

  const getRandomNumbers = () => {
    setNumbers(shuffle(10));
  };

  return (
    <>
      <Header />
      <Scoreboard />
      {numbers.map((number, index) => (
        <Card key={index} value={number} handleClick={getRandomNumbers} />
      ))}
    </>
  );
}

export default App;
