import React from 'react';
import "./App.css";
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NavHome from "./components/NavHome.js"
import Doc from "./components/Doc";

function App() {
    return (
    <div className="App">
    <Router >
    <Routes>
    <Route exact path="/" element={<NavHome />} />
    <Route exact path="/docs/:filename" element={<Doc />} />
    </Routes>
    </Router>
    </div>
  );
}



export default App;
