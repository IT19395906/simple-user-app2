import Add from "./add";
import Home from "./home";
import Update from "./update";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/add" element={<Add/>}/>
          <Route exact path="/update/:id" element={<Update/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
