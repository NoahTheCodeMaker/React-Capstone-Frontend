import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Spinner } from "react-bootstrap";
import LoginButton from "../modules/loginbutton";
import LogoutButton from "../modules/logoutbutton";

const Profile = () => {
  const { user } = useAuth0();

  return (
    <div className="profile-container justify-content-center align-items-center">
      <h4 style={{textAlign: "center"}}>You are logged in as:</h4>
      <div style={{marginTop: "30px"}}>
        <img src={user.picture} alt={user.name} style={{ display: 'block', margin: 'auto' }} />
      </div>
      <h2 style={{textAlign: "center"}}>{user.name}</h2>
      <p style={{textAlign: "center"}}>{user.email}</p>
    </div>
  )
};

function Account() {
  const { isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading){
    return (
      <Container className="account-container top-spacer">
      <Spinner animation="border" role="status"/>
      <span className="sr-only">Loading...</span>
      </Container>
    );
  } else if (isAuthenticated) {
    return (
      <Container className="account-container top-spacer">
        <div className="profile-info">
          <Profile />
        </div>
        <div className="logout-button">
          <LogoutButton />
        </div>
      </Container>
    );
  } else {
    return (
      <Container className="account-container top-spacer">
        <div className="not-logged-in">
          <h4 style={{textAlign: "center"}}>You are not logged in.</h4>
          <LoginButton/>
        </div>
      </Container>
    );
  }
};

export default Account;