function Scoreboard({ score, best }) {
  return (
    <div className="scoreboard">
      <h2>Current Score: {score}</h2>
      <h3>Best Score: {best}</h3>
    </div>
  );
}

export default Scoreboard;
