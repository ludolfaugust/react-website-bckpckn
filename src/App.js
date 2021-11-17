import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import GetGoing from "./components/pages/GetGoing";
import Who from "./components/pages/Who";
import Joinus from "./components/pages/Joinus";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/getgoing" component={GetGoing} />
          <Route path="/who" component={Who} />
          <Route path="/joinus" component={Joinus} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
