import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.Config";

const auth = getAuth(app);

const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h1 className="text-center pt-5 mt-5">This is home.</h1>
      <h4 className="text-center">{user?.displayName}</h4>
    </div>
  );
};

export default Home;
