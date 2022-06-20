import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Auth from './components/Auth';
import ClassSelect from './components/ClassSelect';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ClassSelect></ClassSelect>}></Route>
        <Route exact path="/login" element={<Auth/>}/>
        <Route exact path="/home" element={<HomePage></HomePage>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
