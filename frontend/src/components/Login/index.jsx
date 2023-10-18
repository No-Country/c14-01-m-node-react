import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './login.module.css';

export default function Login() {
  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [validEmail, setValidEmail] = useState(true);

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

  const validateEmail = (email) => {
    const RegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return RegEx.test(email)
  };

  const handleSubmit = () => {
    setValidEmail(validateEmail(inputs.email));
  };

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
          <Form>
            <Form.Group>
              <InputGroup size='lg' className="mb-3">
                <Form.Control
                  onChange={handleInputChange}
                  name='email'
                  placeholder="E-mail"
                  aria-label="E-mail"
                  maxLength={50}
                  type='email'
                  isInvalid={!validEmail}
                />
                <Form.Control.Feedback type="invalid">  Please provide a valid email.</Form.Control.Feedback>
              </InputGroup>
              <InputGroup size='lg' className="mb-3">
                <Form.Control
                  onChange={handleInputChange}
                  name='password'
                  placeholder="Password"
                  aria-label="Password"
                  type={showPassword ? 'text' : 'password'}
                  maxLength={50}
                />
                <InputGroup.Checkbox onClick={handleShowPassword} aria-label="Checkbox to show password" />
              </InputGroup>
              <div className="d-grid gap-2">
                <Button variant='primary' size='lg' type='submit' onClick={handleSubmit}>Continue</Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
};
