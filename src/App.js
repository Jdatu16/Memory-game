import { useEffect, useState } from "react";
import { GameContent, Header } from "./components";
import { NewGame } from "./components/modals";
import { Rules } from "./components/Rules";

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [cardImages, setCardImages] = useState([]);
  const [gameTheme, setGameTheme] = useState("");
  const [gridSize, setGridSize] = useState("");
  // shuffle
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setFirstCard(null);
    setSecondCard(null);
    setCards(shuffledCards);
    setTurns(+0);
  };

  // comparing cards
  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setTurns((TurnCounter) => TurnCounter + 1);
    setDisabled(false);
  };

  useEffect(() => {
    const compareCards = () => {
      if (firstCard && secondCard) {
        setDisabled(true);
        if (firstCard.className == secondCard.className) {
          setCards((prevCards) => {
            return prevCards.map((card) => {
              if (card.className === firstCard.className) {
                return { ...card, matched: true };
              } else {
                return card;
              }
            });
          });
          resetTurn();
        } else {
          console.log("did not match");
          setTimeout(() => resetTurn(), 1000);
        }
      }
    };
    compareCards();
  }, [firstCard, secondCard]);

  const handleChoice = (card) => {
    firstCard ? setSecondCard(card) : setFirstCard(card);
  };

  return (
    <div className="main-container">
      <Header
        setShowModal={setShowModal}
        setGridSize={setGridSize}
        setGameTheme={setGameTheme}
        shuffleCards={shuffleCards}
        hidden={hidden}
      />
      <Rules hidden={hidden} />
      <NewGame
        setGridSize={setGridSize}
        gridSize={gridSize}
        setGameTheme={setGameTheme}
        gameTheme={gameTheme}
        setCardImages={setCardImages}
        showModal={showModal}
        setShowModal={setShowModal}
        shuffleCards={shuffleCards}
        cardImages={cardImages}
        setHidden={setHidden}
      />
      <GameContent
        cards={cards}
        handleChoice={handleChoice}
        firstCard={firstCard}
        secondCard={secondCard}
        disabled={disabled}
      />
      <p className={hidden ? "hidden-turn-counter" : "turn-counter"}>
        Turns: {turns}
      </p>
    </div>
  );
}

export default App;
