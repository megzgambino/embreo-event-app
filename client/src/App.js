import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
    <div className="App">
    </div>
    </Router>
  );
}

export default App;
