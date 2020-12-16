import React from "react";

const Header = ({ title, totalSteps, level }) => {
  return (
    <>
      <h1>{title}</h1>
      <div className="details">
        <p>Level : {level}</p>
        <p>Total Steps Taken : {totalSteps}</p>
      </div>
    </>
  );
};

export default Header;
