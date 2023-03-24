import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Container, ListGroup } from 'react-bootstrap';
import axios from 'axios';

const APICall = (props) => {
  const { getAccessTokenSilently } = useAuth0();
  const [actors, setActors] = useState([]);

  const callApi = async () => {
    try {
      const accessToken = await getAccessTokenSilently({
        audience: 'https://NoahCapstone'
      });
      const response = await axios.get(`http://127.0.0.1:5000${props.address}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      });

      setActors(response.data.actors);
    } catch (error) {
      alert("You are not logged in!")
      console.error(error);
    }
  };

  return (
    <Container>
      <Button onClick={callApi}>{props.buttonText}</Button>
      <ListGroup>
          {actors.map(actor => (
            <ListGroup.Item key={actor.id}>
              {actor.name}, {actor.age}, {actor.gender}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Container>
  );
};

export default APICall;