import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";

function WonPopup({ totalSteps, timeTaken }) {
  const [open, setOpen] = React.useState(true);

  var seconds = timeTaken / 1000;
  const minutes = parseInt(seconds / 60);
  seconds = seconds % 60;

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
          <h4>Accuracy : {Math.round((6 / totalSteps) * 100)} %</h4>
          <h4>
            Time Taken : {Math.round(minutes)}m : {Math.round(seconds)}s
          </h4>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="blue" onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default WonPopup;
