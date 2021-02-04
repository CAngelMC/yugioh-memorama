import React from "react";
import "../assets/styles/Modal.scss";

const End = (props) => {
  const { show, closeModal, restart, life, message } = props;

  if (!show) {
    return <div />;
  }

  return (
    <div className="modal">
      <section className="modal_main">
        <h2>{message}</h2>
        <div className="content">
          <p>Remaining life points: {life} </p>
          <p>Could you do it better?</p>
        </div>
        <section className="modal_footer">
          <button
            type="button"
            className="modal_footer_button action"
            onClick={restart}
          >
            Restart
          </button>
          <button
            type="button"
            className="modal_footer_button"
            onClick={closeModal}
          >
            Cancel
          </button>
        </section>
      </section>
    </div>
  );
};

export default End;
