import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Login() {
  const [show, setShow] = useState(false);

  const [inputs, setInputs] = useState({ email: '', password: '' });

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button size='lg' variant="primary" onClick={handleShow}>
        Log In
      </Button>

      <Modal show={show} centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome to Airbnb 2!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup size='lg' className="mb-3">
            <Form.Control
              onChange={handleInputChange}
              name='email'
              placeholder="E-mail"
              aria-label="E-mail"
            />
          </InputGroup>
          <InputGroup size='lg' className="mb-3">
            <Form.Control
              onChange={handleInputChange}
              name='password'
              placeholder="Password"
              aria-label="Password"
              type='password'
            />
            <InputGroup.Checkbox aria-label="Checkbox to show password" />
          </InputGroup>
          <div className="d-grid gap-2">
            <Button size='lg'>Continue</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
};
