import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "react-bootstrap";
import LoginButton from "../modules/loginbutton";
import LogoutButton from "../modules/logoutbutton";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

function Account() {
    return (
    <Container className="d-flex justify-content-center align-items-center top-spacer">
        <LoginButton/>
        <Profile className="justify-content-center align-items-center"/>
        <LogoutButton/>
    </Container>
    );
};


export default Account;