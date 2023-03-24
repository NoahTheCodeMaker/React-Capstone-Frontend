import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Container, ListGroup } from 'react-bootstrap';
import axios from 'axios';

const ActorList = ({ actors }) => (
  <Container>
    <ListGroup>
      {actors.map(actor => (
        <ListGroup.Item key={actor.id}>
          {actor.name}, {actor.age}, {actor.gender}
        </ListGroup.Item>
      ))}
    </ListGroup>
  </Container>
);

const MovieList = ({ movies }) => (
  <Container>
    <ListGroup>
      {movies.map(movie => (
        <ListGroup.Item key={movie.id}>
          {movie.title}, {movie.release_date}
        </ListGroup.Item>
      ))}
    </ListGroup>
  </Container>
);

const APICall = (props) => {
  const { getAccessTokenSilently } = useAuth0();
  const [actors, setActors] = useState([]);
  const [movies, setMovies] = useState([]);

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
      if(props.address === '/actors'){
        setActors(response.data.actors);
      }
      else if(props.address === '/movies'){
        setMovies(response.data.movies);
      }
    } catch (error) {
      alert("You are not logged in!")
      console.error(error);
    }
  };

  return (
    <Container>
      <Button onClick={callApi}>{props.buttonText}</Button>
      {props.address === '/actors' && <ActorList actors={actors} />}
      {props.address === '/movies' && <MovieList movies={movies} />}
    </Container>
  );
};

export default APICall;