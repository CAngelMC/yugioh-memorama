import React from "react";
import "../assets/styles/Menu.scss";

const Menu = (props) => {
  const { life, difficulty, setDifficulty, restart } = props;

  return (
    <div className="menu">
      <div className="life">
        <div>
          <p>{life}</p>
        </div>
        <select
          value={difficulty}
          onChange={(e) => {
            setDifficulty(e.target.value);
          }}
          className="menu_input"
        >
          <option value="200">Casual</option>
          <option value="250">Normal</option>
          <option value="500">Shadow Game</option>
        </select>
        <button className="menu_input" type="button" onClick={restart}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default Menu;
