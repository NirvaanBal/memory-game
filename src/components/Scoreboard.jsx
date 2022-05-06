function Scoreboard({ score, best }) {
  return (
    <div className="scoreboard">
      <h3>Current Score: {score}</h3>
      <h3>Best Score: {best}</h3>
    </div>
  );
}

export default Scoreboard;
