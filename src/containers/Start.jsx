import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Start.scss";

const Start = () => (
  <>
    <div className="start">
      <Link to="/game">
        <div>Duel!</div>
      </Link>
    </div>
  </>
);

export default Start;
