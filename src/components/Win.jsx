import React from 'react';
import '../assets/styles/Modal.scss';

const Win = (props) => {
  const { show, closeModal, restart } = props;

  if (!show) {
    return <div />;
  }

  return (
    <div className='modal'>
      <section className='modal_main'>
        <h2>WIN</h2>
        <div className='content'>
          <button type='button' onClick={restart}>
            restart
          </button>
        </div>
        <section className='modal_footer'>
          <button type='button' onClick={closeModal}>
            Cancel
          </button>
        </section>
      </section>
    </div>
  );
};

export default Win;
