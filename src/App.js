import React, { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="App">
      <h1>React Modal Example</h1>
      <button onClick={openModal} className="open-modal-button">Open Modal</button>
      <Modal show={showModal} onClose={closeModal}>
        <h2>Modal Title</h2>
        <p>This is the modal content. You can add any content here, including forms, text, and more.</p>
        <button onClick={closeModal} className="close-modal-button">Close</button>
      </Modal>
    </div>
  );
}

export default App;
