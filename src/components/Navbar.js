//import styles from "./Navbar.module.css";
import { NavLink, Link } from "react-router-dom";
import { useRef, useContext, useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";

import { userContext } from "../Contexts/AuthContext";

import { getAuth } from "firebase/auth";
import firebaseApp from "../firebase.config.js";

const auth = getAuth(firebaseApp);

export default function NavBar() {
  const { setActiveUser, logOutHandler, authLoading } = useContext(userContext);
  const [darkActive, setDarkActive] = useState(false);
  const activeUser = auth.currentUser;

  const toggleButton = useRef();
  const closeMenu = () => {
    if (toggleButton.current.nextSibling.classList.contains("show"))
      toggleButton.current.click();
  };

  const handleLogOut = () => {
    logOutHandler().then(() => {
      setActiveUser(null);
    });
  };

  const logoutNavItem = () => {
    return <Nav.Link onClick={handleLogOut}>Log Out</Nav.Link>;
  };

  const loginRegisterNavItem = () => {
    return (
      <>
        <Nav.Link as={NavLink} onClick={closeMenu} to="/register">
          Register
        </Nav.Link>
        <Nav.Link as={NavLink} onClick={closeMenu} to="/login">
          Login
        </Nav.Link>
      </>
    );
  };

  const light = (
    <OverlayTrigger
      placement={"bottom"}
      overlay={<Tooltip>Light Theme</Tooltip>}
    >
      <Nav.Item onClick={() => setDarkActive((curr) => !curr)}>
        {" "}
        <Nav.Link>
          {" "}
          <FontAwesomeIcon icon={faSun} />{" "}
        </Nav.Link>{" "}
      </Nav.Item>
    </OverlayTrigger>
  );
  const dark = (
    <OverlayTrigger
      placement={"bottom"}
      overlay={<Tooltip>Dark Theme</Tooltip>}
    >
      <Nav.Item onClick={() => setDarkActive((curr) => !curr)}>
        {" "}
        <Nav.Link>
          {" "}
          <FontAwesomeIcon icon={faMoon} />{" "}
        </Nav.Link>{" "}
      </Nav.Item>
    </OverlayTrigger>
  );

  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              className="brandLogo"
              src="https://seeklogo.com/images/P/preact-logo-64E4BF9ABC-seeklogo.com.png"
              alt="Reactify brand"
            />
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/">
            Reactify
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            ref={toggleButton}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} onClick={closeMenu} to="/topics">
                Topics
              </Nav.Link>
            </Nav>
            <Nav>
              {darkActive ? dark : light}
              {activeUser && activeUser?.uid ? (
                logoutNavItem()
              ) : authLoading ? (
                <>
                  {loginRegisterNavItem()}
                  <Nav.Link as={NavLink} to="/login">
                    {" "}
                    Loading..{" "}
                  </Nav.Link>
                </>
              ) : (
                loginRegisterNavItem()
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
