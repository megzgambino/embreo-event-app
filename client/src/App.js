import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'

function App() {
    return (
        <Router>
            <Navbar />
            <div className="App">
              <Switch>
                <Route path="/login">
                  <Login/>
                </Route>
                <Route exact path="/">
                  <Homepage/>
                </Route>
              </Switch>
            </div>
        </Router>
    )
}

export default App
