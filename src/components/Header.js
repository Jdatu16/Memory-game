export const Header = (props) => {
  return (
    <div className="header">
      <h3 className="title">memory</h3>
      <div className="buttons">
        <button className="btn restart-button">Restart</button>
        <button className="btn ng-button" onClick={() => props.shuffleCards()}>
          New Game
        </button>
      </div>
    </div>
  );
};
