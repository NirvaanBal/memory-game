function Header({ handleDifficulty }) {
  return (
    <div className="header">
      <h1>Memory Card Game</h1>
      <p>Game ends on selecting same number twice.</p>
      <div className="modes">
        <button onClick={handleDifficulty}>Easy</button>
        <button onClick={handleDifficulty}>Medium</button>
        <button onClick={handleDifficulty}>Hard</button>
      </div>
    </div>
  );
}

export default Header;
