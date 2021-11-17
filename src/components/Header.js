export const Header = ({ shuffleCards }) => {
  return (
    <div className="header">
      <h3 className="title">memory</h3>
      <div className="buttons">
        <button
          disabled
          onClick={() => console.log("restart")}
          className="btn restart-button"
        >
          Restart
        </button>
        <button className="btn ng-button" onClick={() => shuffleCards()}>
          New Game
        </button>
      </div>
    </div>
  );
};
