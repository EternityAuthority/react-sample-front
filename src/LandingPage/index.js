import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import FirstLand from "../../pages/landing";
import AuthContext from "../../context/AuthContext";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "../../component/Navbar";
import Home from "../../pages/home";
import Setting from "../../pages/setting";
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import './App.css';

function Landing() {
  const [show, setShow] = useState(true);

  let dealExpirationDate = new Date("12/20/2020");
  let today = new Date();
  let daysUntilDealEnds = Math.floor(
    (dealExpirationDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <>
      <div className="App">
        {
          <Alert
            variant="danger"
            show={show && daysUntilDealEnds > -1}
            onClose={() => setShow(false)}
            dismissible
            style={{ textAlign: "center" }}
          >
            <p style={{ display: "inline-block", margin: 0 }}>
              <Alert.Link href="#form">Join the waitlist</Alert.Link> for 25%
              off your first month! ({daysUntilDealEnds} days until this deal
              expires)
            </p>
          </Alert>
        }
        {user ? (
          <>
            <Home />
          </>
        ) : (
          <>
            <Header />
            <FirstLand />
          </>
        )}

        <Footer />
      </div>
    </>
  );
}

export default Landing;
