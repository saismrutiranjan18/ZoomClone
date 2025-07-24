import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/landing';


function App() {
  return (
    <div className="App">

      <Router>

 


          <Routes>

            <Route path='/' element={<LandingPage />} />

            <Route path='/auth' element={<Authentication />} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;