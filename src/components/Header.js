export const Header = ({
  setShowModal,
  setGameTheme,
  setGridSize,
  shuffleCards,
  hidden,
}) => {
  return (
    <div className="header">
      <h3 className="title">memory</h3>
      <div className="buttons">
        <button
          disabled={hidden}
          onClick={() => shuffleCards()}
          className="btn restart-button"
        >
          Restart
        </button>
        <button
          className="btn ng-button"
          onClick={() => {
            setGridSize();
            setGameTheme();
            setShowModal(true);
          }}
        >
          New Game
        </button>
      </div>
    </div>
  );
};
