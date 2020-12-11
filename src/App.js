import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const images = ["angular", "cpp", "java", "mongodb", "python", "react"];

  // shuffle cards randomly
  function shuffle(array) {
    var tmp,
      current,
      top = array.length;
    if (top)
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    return array;
  }

  // populate the cards state
  const getImages = () => {
    const cards = [];
    for (var i = 0; i < 12; i++) {
      cards.push({
        id: Math.floor(i / 2),
        img: images[Math.floor(i / 2)],
        isFlipped: false,
        isMatched: false,
      });
    }
    return shuffle(cards);
  };

  // cards state
  const [cards, setCards] = useState(getImages());
  // state for previously selected card
  const [previousSelected, setPreviousSelected] = useState(null);
  const [previousSelectedIndex, setPreviousSelectedIndex] = useState(null);

  // handler when user clicks the card
  const handleCardClick = (index) => {
    const currentSelected = cards[index];
    // when there is no previous selected card
    if (!previousSelected) {
      const newCards = [...cards];
      setPreviousSelected(currentSelected);
      setPreviousSelectedIndex(index);
      newCards[index].isFlipped = !newCards[index].isFlipped;
      setCards(newCards);
      return;
    }
    // when there is already selected card present
    else if (previousSelected) {
      // check if it is a match
      if (
        previousSelected.id === currentSelected.id &&
        index !== previousSelectedIndex
      ) {
        const newCards = [...cards];
        newCards[previousSelectedIndex].isMatched = true;
        newCards[previousSelectedIndex].isFlipped = true;
        newCards[index].isMatched = true;
        newCards[index].isFlipped = true;
        setCards(newCards);
      }
      // else flip both the cards
      else {
        const newCards = [...cards];
        newCards[index].isFlipped = !newCards[index].isFlipped;
        setCards(newCards);
        setTimeout(() => {
          const newCards = [...cards];
          newCards[previousSelectedIndex].isFlipped = false;
          newCards[index].isFlipped = false;
          setCards(newCards);
        }, 1000);
      }
      setPreviousSelected(null);
    }
  };

  return (
    <>
      <h1>Memory Game</h1>
      <div className="memory-game">
        {cards.map((card, index) => (
          <Card
            card={card}
            key={index}
            index={index}
            handleCardClick={handleCardClick}
          />
        ))}
      </div>
    </>
  );
}

export default App;
