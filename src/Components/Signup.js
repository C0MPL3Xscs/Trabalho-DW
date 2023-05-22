import React, { useState } from 'react';
import logo from '../logo.png';
import userLogo from '../UserLogo.png';
import '../index.css';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <header>
      <div className="left-buttons">
        <a href="/">
          <img src={logo} alt="Home" />
        </a>
        <button>Public Events</button>
        <button onClick={handleShowModal}>Sign Up/Sign In</button>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up/Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Insert your sign up/sign in form here */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCloseModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="right-buttons">
        <button><img src={userLogo} alt="Right button" /></button>
      </div>
    </header>
  );
}

export default Header;
