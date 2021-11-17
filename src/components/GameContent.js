export const GameContent = ({
  handleChoice,
  cards,
  firstCard,
  secondCard,
  disabled,
}) => {
  return (
    <div className="grid-container">
      {cards.map((card) => {
        return (
          <div className="card" key={card.id}>
            <div
              className={
                card === firstCard || card === secondCard || card.matched
                  ? "flipped"
                  : ""
              }
            >
              <i
                className={
                  card.matched ? `matched ${card.className}` : card.className
                }
              ></i>
              <i
                onClick={() => {
                  if (!disabled) {
                    handleChoice(card);
                  }
                }}
                className="back fas fa-angle-down"
              ></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};
