import { useState } from "react";
import { GameContent } from "./components/GameContent";
import { Header } from "./components/Header";

const cardImages = [
  { className: "fas fa-dragon front" },
  { className: "fas fa-crow front" },
  { className: "fas fa-dog front" },
  { className: "fas fa-dove front" },
  { className: "fas fa-cat front" },
  { className: "fas fa-horse front" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstClick, setFirstClick] = useState(null);
  const [secondClick, setSecondClick] = useState(null);

  // shuffle
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(+0);
  };
  console.log(turns, cards);

  // comparing cards

  const handleChoice = (card) => {
    console.log(card);
  };

  return (
    <div className="main-container">
      <Header shuffleCards={shuffleCards} />
      <div className="grid-container">
        {cards.map((card) => (
          <GameContent key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
