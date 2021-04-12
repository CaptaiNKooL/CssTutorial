import "./App.css";
import Header from "./Header";
import About from './About';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
