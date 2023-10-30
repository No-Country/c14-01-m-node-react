/* eslint-disable react/no-unescaped-entities */
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { useCallback, useState } from "react";
import { Calendar } from "primereact/calendar";
import { sendUsers } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const ProfileEdit = () => {
  const { user } = useSelector((state) => state?.user);
  const [values, setValues] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    birthday: user.birthday,
  });
  const [date, setDate] = useState(new Date(user?.birthday));
  const [error, setError] = useState("");
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const sendUser = useCallback((values, id) => {
    dispatch(sendUsers(values, id));
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    if (validated && !error) {
      sendUser(values, user._id);
      navigate("/profile/detail");
    }
  };
  const handleChangeCalendar = (e) => {
    setDate(e.value);
    if (!e.value) setError("Birthday doesn't have a value");
    else setError("");
    setValues((prev) => ({
      ...prev,
      birthday: e.value,
    }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="profile-container">
      <div className="profile-right">
        <div className="profile-name">
          <span className="profile-letter">
            {user && user.first_name.slice(0, 1).toUpperCase()}
          </span>
        </div>
      </div>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="profile-left"
      >
        <h1>Your Profile</h1>
        <div className="profile-info-edit">
          <Form.Group controlId="validationCustom01">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              aria-describedby="inputGroupPrepend"
              name="first_name"
              value={values.first_name}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              First Name doesn't have a value
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              name="last_name"
              value={values.last_name}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Last Name doesn't have a value
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="profile-calendar">
            <Form.Label>Birthday</Form.Label>
            <Calendar
              value={date}
              onChange={handleChangeCalendar}
              className={`input-calendar ${error ? "error-input" : ""}`}
            />
            <span className="error-message">{error}</span>
          </Form.Group>
          <div className="button-profile-group">
            <Button
              className="button-profile"
              type="button"
              onClick={() => navigate("/profile/detail")}
            >
              Cancel
            </Button>
            <Button className="button-profile" type="submit">
              Send
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ProfileEdit;
