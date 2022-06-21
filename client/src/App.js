import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Auth from './components/Auth';
import ClassSelect from './components/ClassSelect';
import HomePage from './components/HomePage';
import Request from './components/Request';
import UpcomingClassDetail from './components/UpcomingClassDetail';
import RecentClassDetail from './components/RecentClassDetail';
import RequestDetail from './components/RequestDetail';
import Schedule from './components/Schedule';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ClassSelect></ClassSelect>}></Route>
        <Route exact path="/login" element={<Auth/>}/>
        <Route exact path="/home" element={<HomePage></HomePage>}></Route>
        <Route exact path="/request" element={<Request/>}/>
        <Route exact path="/request/request-detail" element={<RequestDetail/>}/>
        <Route exact path="/schedule" element={<Schedule/>}/>
        <Route exact path="/schedule/upcoming-class" element={<UpcomingClassDetail></UpcomingClassDetail>}/>
        <Route exact path="/schedule/recent-class" element={<RecentClassDetail></RecentClassDetail>}/>
      </Routes>
    </Router>
  );
}

export default App;
