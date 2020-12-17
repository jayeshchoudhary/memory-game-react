import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";

function WonPopup({ totalSteps, timeTaken, level, restart }) {
  const [open, setOpen] = React.useState(true);

  var seconds = timeTaken / 1000;
  const minutes = parseInt(seconds / 60);
  seconds = seconds % 60;
  const correctSteps = level === "medium" ? 9 : level === "hard" ? 12 : 6;
  const handleClick = () => {
    setOpen(false);
    restart();
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="tiny"
    >
      <Modal.Header>Congratulations 🎉 Game Completed</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>Results</Header>
          <h4>Total Steps Taken : {totalSteps}</h4>
          <h4>Accuracy : {Math.round((correctSteps / totalSteps) * 100)} %</h4>
          <h4>
            Time Taken : {Math.round(minutes)}m : {Math.round(seconds)}s
          </h4>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button color="green" onClick={handleClick}>
          Play Again
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default WonPopup;
