import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom"
import Home from './screens/Home.jsx';

// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>




  );
}

export default App;
