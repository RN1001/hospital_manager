import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Components/Hospital'
import {BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Hospitals from "./Components/Hospital";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="App">
        <Router>
            <div className="row">
                <div className="col-3">
                    <nav>
                        <ul className="nav flex-column nav-panel">
                            <div className="container mt-3">
                                <h5> Hospital Web App </h5>
                                <hr/>
                                <li className="nav-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                            </div>

                        </ul>
                    </nav>
                </div>
                <div className="col-9 mt-3">
                    <Switch>
                        <Route path="/" exact component={Hospitals}/>
                        <Route path="/dashboard" exact component={Dashboard}/>
                    </Switch>
                </div>
            </div>
        </Router>
    </div>
  );
}

export default App;
