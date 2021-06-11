import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Reports from "./Pages/Reports";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/reports" exact component={Reports} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
