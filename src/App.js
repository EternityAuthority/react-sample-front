import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import './App.css';
import FirstLand from './pages/landing';
import Signup from './pages/signup';
// import Loginpage from './pages/login';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <AuthProvider>
          <Switch>
            {/* <Route component={Register} path="/signup" />
            <Route component={Login} path="/login" /> */}
            <Route component={FirstLand} path="/" />
            
          </Switch>
        </AuthProvider>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
