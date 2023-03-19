import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './modules/profile';
import LoginButton from './modules/loginbutton';
import LogoutButton from './modules/logoutbutton';
import APICall from './modules/tokens';

function App() {
  return (
    <div>
      <div>
        <h1 className="entry">This Is My Capstone Frontend!</h1>
      </div>
      <LoginButton/>
      <Profile/>
      <LogoutButton/>
      <br/>
      <APICall address="http://127.0.0.1:5000/actors" buttonText="Test Actor Endpoint"/>
    </div>
  );
}

export default App;
