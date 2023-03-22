import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './modules/navbar';
import HomePage from './pages/home';
import Actors from './pages/actors';
import Movies from './pages/movies';
import Account from './pages/account';

function App() {
  return (
    <div>
      <MyNavbar/>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/account" element={<Account />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
