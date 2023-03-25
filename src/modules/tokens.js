import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Container, ListGroup, Spinner } from 'react-bootstrap';
import axios from 'axios';

const APICall = (props) => {
  const { getAccessTokenSilently } = useAuth0();
  const [actors, setActors] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
        if (props.address === '/actors') {
          setActors(response.data.actors);
        } else if (props.address === '/movies') {
          setMovies(response.data.movies);
        }
        setIsLoading(false);
      } catch (error) {
        alert("You are not logged in!")
        console.error(error);
      }
    };
    callApi();
  }, [getAccessTokenSilently, props.address]);

  if (isLoading) {
    return (
      <Container>
        <span className="sr-only">Loading...</span>
        <Spinner animation="border" role="status"/>
      </Container>
    );
  }

  return (
    <Container>
      <ListGroup>
        {props.address === '/actors' && actors.map(actor => (
          <ListGroup.Item key={actor.id}>
            {actor.name}, {actor.age}, {actor.gender}
          </ListGroup.Item>
        ))}
        {props.address === '/movies' && movies.map(movie => (
          <ListGroup.Item key={movie.id}>
            {movie.title}, {movie.release_date}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default APICall;
