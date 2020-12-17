import React from "react";
import { Button } from "semantic-ui-react";

const Header = ({ title, totalSteps, level, reset, restart }) => {
  return (
    <>
      <h1>{title}</h1>
      <div className="details">
        <p>Level : {level}</p>
        <p>Total Steps Taken : {totalSteps}</p>
        <Button color="orange" onClick={reset}>
          Reset
        </Button>
        <Button color="red" onClick={restart}>
          Restart
        </Button>
      </div>
    </>
  );
};

export default Header;
