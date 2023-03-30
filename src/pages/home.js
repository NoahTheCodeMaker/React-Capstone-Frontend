import React from "react";
import { Container } from "react-bootstrap";

const HomePage = () => {
    return <Container>
        <h1 className="top-spacer entry">Welcome to the Frontend for the Udacity FSND Exam!</h1>
        <h2 className="entry">Please select the Account page from the NavBar above to get started.</h2>
        <h2 className="entry">Don't forget to remove the permissions in the backend if you want to test the endpoints!</h2>
        <h2 className="top-spacer entry">Visit my LinkedIn <a href="https://www.linkedin.com/in/noahdragoon">Here</a></h2>
        <h2 className="top-spacer entry">Visit my GitHub <a href="https://github.com/NoahTheCodeMaker">Here</a></h2>
    </Container>
};

export default HomePage;
