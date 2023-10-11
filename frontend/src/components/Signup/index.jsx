import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import styles from './signup.module.css';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default function Signup() {
  const [show, setShow] = useState(false);

  const [inputs, setInputs] = useState({ name: '', lastname: '', month: '', day: '', year: '', email: '', password: '' });

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
        Sign Up
      </Button>

      <Modal show={show} centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up to Airbnb 2!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup size='lg' className="mb-3">
            <FloatingLabel
              controlId="floatingInput"
              label="First name"
              className={styles.label}
            >
              <Form.Control
                onChange={handleInputChange}
                name='name'
                placeholder="First name"
                aria-label="First name"
              />
            </FloatingLabel>
          </InputGroup>
          <InputGroup size='lg' className="mb-3">
            <FloatingLabel
              controlId="floatingInput"
              label="Last name"
            >
              <Form.Control
                onChange={handleInputChange}
                name='lastname'
                placeholder="Last name"
                aria-label="Last name"
              />
            </FloatingLabel>
          </InputGroup>
          <Form.Label>
            Birthday
          </Form.Label>
          <InputGroup size='lg' className="mb-3">
            <Form.Select defaultValue={'Month'} name='month' onChange={handleInputChange}>
              <option disabled key='month'>Month</option>
              {months.map((month, index) => <option key={index}>{month}</option>)}
            </Form.Select>
            <Form.Select defaultValue={'Day'} name='day' onChange={handleInputChange}>
              <option disabled key='day'>Day</option>
              {Array(31).fill(0).map((_elem, index) => <option key={index}>{index + 1}</option>)}
            </Form.Select>
            <Form.Select defaultValue={'Year'} name='year' onChange={handleInputChange}>
              <option disabled key='year'>Year</option>
              {Array(121).fill(0).map((_elem, index) => <option key={index}>{index + 1903}</option>).reverse()}
            </Form.Select>
          </InputGroup>
          <InputGroup size='lg' className="mb-3">
            <FloatingLabel
              controlId="floatingInput"
              label="E-mail"
            >
              <Form.Control
                onChange={handleInputChange}
                name='email'
                placeholder="E-mail"
                aria-label="E-mail"
              />
            </FloatingLabel>
          </InputGroup>
          <InputGroup size='lg' className="mb-3">
            <FloatingLabel
              controlId="floatingInput"
              label="Password"
            >
              <Form.Control
                onChange={handleInputChange}
                name='password'
                placeholder="Password"
                aria-label="Password"
                type='password'
              />
            </FloatingLabel>
            <InputGroup.Checkbox aria-label="Checkbox to show password" />
          </InputGroup>
          <div className="d-grid gap-2">
            <Button size='lg'>Agree and continue</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
};

