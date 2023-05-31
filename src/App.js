import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import NavigationLinks from "./Navigation/NavigationLinks";

function App() {
  return (
    <div>
      <Router>
        <NavigationLinks />
        <Navigation />
      </Router>
    </div>
  );
}

export default App;