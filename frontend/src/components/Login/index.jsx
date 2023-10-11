import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './login.module.css';

export default function Login() {
  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [inputs, setInputs] = useState({ email: '', password: '' });

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className={styles.button} onClick={handleShow}>
        Log In
      </button>

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
              type={showPassword ? 'text' : 'password'}
            />
            <InputGroup.Checkbox onClick={handleShowPassword} aria-label="Checkbox to show password" />
          </InputGroup>
          <div className="d-grid gap-2">
            <Button variant='primary' size='lg'>Continue</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
};
