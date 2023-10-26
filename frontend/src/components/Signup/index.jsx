import React, { useCallback, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import styles from './signup.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../redux/actions/authActions';
import isEmptyObject from '../../utils/isEmptyObject';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const countries = ['Afghanistan', 'Åland Islands', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bangladesh', 'Barbados', 'Bahamas', 'Bahrain', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'British Indian Ocean Territory', 'British Virgin Islands', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo-Brazzaville', 'Congo-Kinshasa', 'Cook Islands', 'Costa Rica', 'Croatia', 'Curaçao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'El Salvador', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Federated States of Micronesia', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Lands', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and McDonald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Islands', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Réunion', 'Romania', 'Russia', 'Rwanda', 'Saint Barthélemy', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent', 'Samoa', 'San Marino', 'São Tomé and Príncipe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia', 'South Korea', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Sweden', 'Swaziland', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Vietnam', 'Venezuela', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'];

export default function Signup() {
  const [show, setShow] = useState(false);
  //const [showPassword, setShowPassword] = useState(false);
  //const [validEmail, setValidEmail] = useState(true);
  const [inputs, setInputs] = useState({ first_name: '', last_name: '', month: '', day: '', year: '', email: '', password: '', location: '' });
  const [errors, setErrors] = useState({ /* first_name: false, last_name: false, birthday: false, email: false, password: false, location: false */ })

  const { user } = useSelector(state => state?.auth);

  useEffect(() => {
    if (user.user) setShow(false);
  }, [user.user]);

  const dispatch = useDispatch();

  const fetchSignUp = useCallback(() => {
    inputs.birthday = new Date(inputs.year, months.findIndex(month => month === inputs.month), inputs.day);
    dispatch(signUp(inputs));
  });

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  /* const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }; */

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validateAll = () => {
    const RegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const error = {};
    if (!inputs.first_name.length) error.first_name = true;
    if (!inputs.last_name.length) error.last_name = true;
    if (!inputs.location.length) error.location = true;
    if (!RegEx.test(inputs.email)) error.email = true;
    if (!inputs.password.length) error.password = true;
    if (!inputs.year.length || !inputs.month.length || !inputs.day.length) error.birthday = true;
    setErrors(error);
    return error;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = validateAll();
    const isEmpty = isEmptyObject(err);
    const noErrors = Object.values(err).every((error) => error === false);
    if (isEmpty || noErrors) fetchSignUp();
  };

  return (
    <>
      <button className={styles.button} onClick={handleShow}>
        Sign Up
      </button>

      <Modal className={styles.modal} show={show} centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up to Airbnb 2!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <InputGroup size='lg' className="mb-3">
              <FloatingLabel
                controlId="floatingInput"
                label="First name"
                className={styles.label}
              >
                <Form.Control
                  onChange={handleInputChange}
                  name='first_name'
                  placeholder="First name"
                  aria-label="First name"
                  maxLength={50}
                  required
                  isInvalid={errors.first_name}
                />
                <Form.Control.Feedback className={styles.invalid} type="invalid">  A first name is required.</Form.Control.Feedback>
              </FloatingLabel>
            </InputGroup>
            <InputGroup size='lg' className="mb-3">
              <FloatingLabel
                controlId="floatingInput"
                label="Last name"
              >
                <Form.Control
                  onChange={handleInputChange}
                  name='last_name'
                  placeholder="Last name"
                  aria-label="Last name"
                  maxLength={50}
                  required
                  isInvalid={errors.last_name}
                />
                <Form.Control.Feedback className={styles.invalid} type="invalid">  A last name is required.</Form.Control.Feedback>
              </FloatingLabel>
            </InputGroup>
            <InputGroup size='lg' className="mb-3">
              <Form.Select className={styles.select} defaultValue={'Country'} name='location' onChange={handleInputChange} required isInvalid={errors.location}>
                <option disabled key='country'>Country</option>
                {countries.map((country, index) => <option key={index}>{country}</option>)}
              </Form.Select>
              <Form.Control.Feedback type='invalid'>A country is required.</Form.Control.Feedback>
            </InputGroup>
            <Form.Label>
              Birthday
            </Form.Label>
            <InputGroup size='lg' className="mb-3 flex">
              <Form.Select defaultValue={'Month'} name='month' onChange={handleInputChange} required isInvalid={errors.birthday}>
                <option disabled key='month'>Month</option>
                {months.map((month, index) => <option key={index}>{month}</option>)}
              </Form.Select>
              <Form.Select defaultValue={'Day'} name='day' onChange={handleInputChange} required isInvalid={errors.birthday}>
                <option disabled key='day'>Day</option>
                {Array(31).fill(0).map((_elem, index) => <option key={index}>{index + 1}</option>)}
              </Form.Select>
              <Form.Select className={styles.select} defaultValue={'Year'} name='year' onChange={handleInputChange} required isInvalid={errors.birthday}>
                <option disabled key='year'>Year</option>
                {Array(121).fill(0).map((_elem, index) => <option key={index}>{index + 1903}</option>).reverse()}
              </Form.Select>
              <Form.Control.Feedback type='invalid'>A date of birth is required.</Form.Control.Feedback>
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
                  maxLength={50}
                  type='email'
                  isInvalid={errors.email}
                  required
                />
                <Form.Control.Feedback className={styles.invalid} type="invalid">  Please provide a valid email.</Form.Control.Feedback>
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
                  maxLength={50}
                  required
                  isInvalid={errors.password || user.status === "error"}
                />
                {errors.password ? <Form.Control.Feedback className={styles.invalid} type='invalid'> A password is required.</Form.Control.Feedback> :
                  <Form.Control.Feedback className={styles.invalid} type='invalid'> User already exists.</Form.Control.Feedback>}
              </FloatingLabel>
              {/* <InputGroup.Checkbox onClick={handleShowPassword} aria-label="Checkbox to show password" /> */}
            </InputGroup>
            <div className="d-grid gap-2">
              <Button size='lg' onClick={handleSubmit}>Agree and continue</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
};
