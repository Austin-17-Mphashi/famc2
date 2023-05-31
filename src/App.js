import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation/Navigation";


function App() {
  return (
      <Router>
        <Navigation />
      </Router>
   
  );
}

export default App;