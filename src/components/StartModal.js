import React, { useState } from "react";
import { Button, Header, Form, Modal } from "semantic-ui-react";

const StartModal = ({
  setPlayerName,
  startGame,
  setLevel,
  level,
  playerName,
}) => {
  const [open, setOpen] = useState(true);
  const [error, setError] = useState(null);

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };

  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleSubmit = () => {
    if (!playerName) {
      setError({
        content: "Please enter your Name",
        pointing: "below",
      });
      return;
    }
    setOpen(false);
    startGame();
  };

  return (
    <Modal
      closeOnEscape={false}
      closeOnDimmerClick={false}
      size={"tiny"}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header content="Welcome to Memory Game" />
      <Modal.Content>
        <Form size={"big"} onSubmit={handleSubmit}>
          <Form.Input
            error={error}
            fluid
            label="Enter Your Name"
            placeholder="First name"
            onChange={handleNameChange}
            autoFocus
          />
          <Form.Group inline>
            <label>Select level :</label>
            <input
              type="radio"
              id="easy"
              name="level"
              value="easy"
              onChange={handleLevelChange}
              checked={level === "easy"}
            />
            <label htmlFor="easy">Easy</label>
            <input
              type="radio"
              id="medium"
              name="level"
              value="medium"
              onChange={handleLevelChange}
            />
            <label htmlFor="medium">Medium</label>
            <input
              type="radio"
              id="hard"
              name="level"
              value="hard"
              onChange={handleLevelChange}
            />
            <label htmlFor="hard">Hard</label>
          </Form.Group>
          <Button color="green" type="submit">
            Start Game
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default StartModal;
