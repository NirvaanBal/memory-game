function Card({ value, handleClick }) {
  return (
    <div className="card" onClick={handleClick}>
      {value}
    </div>
  );
}

export default Card;
