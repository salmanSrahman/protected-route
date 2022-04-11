import React from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase.Config";
import { useLocation, useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <Container>
      <div className="w-50 mx-auto mt-5">
        <Button className="my-3" onClick={handleGoogleSignIn}>
          Google Sign In
        </Button>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
