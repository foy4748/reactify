import { useNavigate, useLocation, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { userContext } from "../Contexts/AuthContext";
import { Form, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";

import styles from "./Register.module.css";

export default function Login() {
  //Executing Hooks
  const {
    setActiveUser,
    setAuthLoading,
    loginHandler,
    googleLoginHandler,
    githubLoginHandler,
  } = useContext(userContext);
  const [error, setError] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const email = form.email.value;
    const password = form.password.value;

    loginHandler(email, password)
      .then((result) => {
        setActiveUser(result);
        form.reset();
        navigate(location?.state?.from || "/", { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setAuthLoading(false);
      });
    setAuthLoading(false);
  };

  const handlerGoogleLogin = () => {
    googleLoginHandler()
      .then((result) => {
        setActiveUser(result);
        navigate(location?.state?.from || "/", { replace: true });
      })
      .catch((error) => setError(error));
    setAuthLoading(false);
  };

  const handlerGithubLogin = () => {
    githubLoginHandler()
      .then((result) => {
        setActiveUser(result);
        navigate(location?.state?.from || "/", { replace: true });
      })
      .catch((error) => setError(error));
    setAuthLoading(false);
  };
  return (
    <div className={styles.formContainer}>
      <Form onSubmit={(e) => handleSubmit(e)} className="border rounded p-5">
        <h1 className="text-center">Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <p>
            Don't have an account? Please, <Link to="/register">Register</Link>
          </p>
          {error ? <p style={{ color: "red" }}>"Wrong email/password"</p> : ""}
        </Form.Group>
        <Button className="border readBtn" variant="outline-dark" type="submit">
          Submit
        </Button>
      </Form>
      <hr />
      <h1 className="text-center">Continue using</h1>
      <div className="d-flex justify-content-center">
        <Button
          onClick={handlerGoogleLogin}
          className="border readBtn"
          variant="outline-dark"
          type="submit"
        >
          {" "}
          <FontAwesomeIcon icon={faGoogle} /> Google{" "}
        </Button>
        <Button
          onClick={handlerGithubLogin}
          className="border readBtn"
          variant="outline-dark"
          type="submit"
        >
          {" "}
          <FontAwesomeIcon icon={faGithub} /> Github{" "}
        </Button>
      </div>
    </div>
  );
}
