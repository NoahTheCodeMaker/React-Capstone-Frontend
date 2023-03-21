import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './modules/profile';
import LoginButton from './modules/loginbutton';
import LogoutButton from './modules/logoutbutton';
import APICall from './modules/tokens';
import MyNavbar from './modules/navbar';

function App() {
  return (
    <div>
      <MyNavbar/>
      <br/>
      <LoginButton/>
      <Profile/>
      <LogoutButton/>
      <br/>
      <APICall address="/" buttonText="Test Welcome Endpoint"/>
      <br/>
      <APICall address="/login" buttonText="Test API Login Endpoint"/>
      <br/>
      <APICall address="/auth" buttonText="Test Auth Endpoint"/>
      <br/>
      <APICall address="/actors" buttonText="Test Actors Endpoint"/>
      <br/>
      <APICall address="/movies" buttonText="Test Movies Endpoint"/>
    </div>
  );
}

export default App;
