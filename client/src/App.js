import './App.scss';
// import Home from './components/Home';
import Calculator from './components/Calculator/Calculator'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Bookit from './components/Bookit/Bookit';
function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path='/' element={<Calculator/>}/>
        {/* <Route path="/" element={<Home/>}/>         */}
        <Route path="/bookit" element={<Bookit/>}/>        
      </Routes>
    </div>
    </Router>
  );
}

export default App;
