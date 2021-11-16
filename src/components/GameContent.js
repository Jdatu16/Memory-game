export const GameContent = ({ handleChoice, card }) => {
  const handleClick = () => {
    handleChoice(card);
    console.log("a");
  };

  return (
    <div className="card">
      <div className="card-wrapper">
        <i className={card.className}></i>
        <img
          src="/img/cover.png"
          onClick={(e) => handleClick(e.target)}
          className="back"
        />
      </div>
    </div>
  );
};
