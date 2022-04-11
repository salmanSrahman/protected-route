import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Button, Container, Nav } from "react-bootstrap";
import CustomLink from "../CustomLink/CustomLink";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase.Config";

const auth = getAuth(app);

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand className="text-danger fw-bold" as={Link} to="/home">
            Private Route
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 nav-menu"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <CustomLink to="/home">Home</CustomLink>
              <CustomLink to="/products">Products</CustomLink>
              <CustomLink to="/order">Order</CustomLink>
              <CustomLink to="/register">Register</CustomLink>
              <span className="text-light">{user && user.displayName}</span>
              {user?.uid ? (
                <Button variant="danger" className="ms-2 lh-5" size="sm">
                  Sign Out
                </Button>
              ) : (
                <CustomLink to="/login">Login</CustomLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
