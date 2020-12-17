import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Card from "./components/Card";
import StartModal from "./components/StartModal";
import Header from "./components/Header";
import WonPopup from "./components/WonPopup";

function App() {
  const images = [
    "angular",
    "cpp",
    "java",
    "mongodb",
    "python",
    "react",
    "vue",
    "javascript",
    "css",
    "typescript",
    "postgresql",
    "graphql",
  ];
  const [level, setLevel] = useState("easy");

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
    const number = level === "medium" ? 18 : level === "hard" ? 24 : 12;
    for (var i = 0; i < number; i++) {
      cards.push({
        id: Math.floor(i / 2),
        img: images[Math.floor(i / 2)],
        isFlipped: false,
        isMatched: false,
      });
    }
    return shuffle(cards);
  };

  // all the states
  const [cards, setCards] = useState([]);
  const [previousSelected, setPreviousSelected] = useState(null);
  const [previousSelectedIndex, setPreviousSelectedIndex] = useState(null);
  const [title, setTitle] = useState("Memory Game");
  const [playerName, setPlayerName] = useState("");
  const [started, setStarted] = useState(false);
  const [totalSteps, setTotalSteps] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  const [won, setWon] = useState(false);

  // handler when user clicks the card
  const handleCardClick = (index) => {
    setStarted(true);
    const currentSelected = cards[index];
    // when there is no previous selected card
    if (!previousSelected) {
      setPreviousSelected(currentSelected);
      setPreviousSelectedIndex(index);
      changeIsFlipped(index);
      return;
    }
    // when there is already selected card present
    else if (previousSelected) {
      // check if it is a match
      if (
        previousSelected.id === currentSelected.id &&
        index !== previousSelectedIndex
      ) {
        changeIsMatched(previousSelectedIndex, true);
        changeIsMatched(index, true);
        changeIsFlipped(previousSelectedIndex, true);
        changeIsFlipped(index, true);
        if (checkForWin(cards)) {
          setTimeTaken(Date.now() - timeTaken);
          setWon(true);
        }
      }
      // else flip both the cards
      else {
        changeIsFlipped(index);
        setTimeout(() => {
          changeIsFlipped(previousSelectedIndex, false);
          changeIsFlipped(index, false);
        }, 800);
      }
      setPreviousSelected(null);
      setTotalSteps(totalSteps + 1);
    }
  };
  // toggle isFlipped
  const changeIsFlipped = (index, specifiy = null) => {
    const newCards = [...cards];
    if (specifiy) {
      newCards[index].isFlipped = specifiy;
    } else {
      newCards[index].isFlipped = !newCards[index].isFlipped;
    }
    setCards(newCards);
  };
  // toggle isMatched
  const changeIsMatched = (index, specifiy = null) => {
    const newCards = [...cards];
    if (specifiy) {
      newCards[index].isMatched = specifiy;
    } else {
      newCards[index].isMatched = !newCards[index].isMatched;
    }
    setCards(newCards);
  };

  // check if the player won
  const checkForWin = (cards) => {
    const isWin = cards.every((card) => card.isMatched === true);
    return isWin;
  };

  const startGame = () => {
    var count = 0;
    var newCards = getImages();
    newCards.map((card) => (card.isFlipped = true));
    setCards(newCards);
    var interval = setInterval(() => {
      const newTitle =
        count === 0
          ? "Ready"
          : count === 1
          ? "Steady"
          : count === 2
          ? "Go!!!"
          : "Memory Game";
      count++;
      setTitle(newTitle);
      if (count === 4) {
        setTitle(`Welcome "${playerName}" to Memory Game`);
        newCards.map((card) => (card.isFlipped = false));
        setCards(newCards);
        setTimeTaken(Date.now());
        clearInterval(interval);
      }
    }, 1000);
  };

  const reset = () => {
    const newCards = cards.map((card) => {
      card.isMatched = false;
      card.isFlipped = false;
      return card;
    });
    setTotalSteps(0);
    setPreviousSelected(null);
    setPreviousSelectedIndex(null);
    setTimeTaken(Date.now());
    setCards(newCards);
    setStarted(false);
    setWon(false);
  };

  const restart = () => {
    reset();
    startGame();
  };

  return (
    <div>
      <StartModal
        setPlayerName={setPlayerName}
        startGame={startGame}
        setLevel={setLevel}
        level={level}
        playerName={playerName}
      />
      {cards.length > 1 ? (
        <Header
          title={title}
          totalSteps={totalSteps}
          level={level}
          timeTaken={timeTaken}
          reset={reset}
          restart={restart}
        />
      ) : null}
      <div className={`memory-game ${level}`}>
        {cards.map((card, index) => (
          <Card
            card={card}
            key={index}
            index={index}
            handleCardClick={handleCardClick}
            previousSelected={previousSelected}
            started={started}
          />
        ))}
      </div>
      {won && cards.length > 1 ? (
        <WonPopup
          totalSteps={totalSteps}
          timeTaken={timeTaken}
          level={level}
          restart={restart}
        />
      ) : null}
    </div>
  );
}

export default App;
