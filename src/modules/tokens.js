import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Container, ListGroup, Spinner, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const APICall = (props) => {
  const { getAccessTokenSilently } = useAuth0();
  const [actors, setActors] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const MovieEditor = (id) => {
    navigate(`/movies/edit/${id}`);
  }

  const ActorEditor = (id) => {
    navigate(`/actors/edit/${id}`);
  }

  const DeleteItem = async (id, warning) => {
    const confirmed = window.confirm(`Are you sure you want to delete ${warning} with ID ${id}?`);
    if (!confirmed) {
        return;
    }
    
    try {
      const accessToken = await getAccessTokenSilently({
        audience: 'https://NoahCapstone'
      });
      const response = await axios.delete(`http://127.0.0.1:5000${props.address}?id=${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      });
      console.log(response);
    } catch (error) {
      alert("You do not have pernissions to delete this");
      console.error(error);
    }
  }


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
        <Spinner animation="border" role="status"/>
        <span className="sr-only"> Loading...</span>
      </Container>
    );
  }

  return (
    <Container>
      <ListGroup>
        {props.address === '/actors' && actors.map(actor => (
          <ListGroup.Item key={actor.id}>
            <Row className="justify-content-between">
              <Col>
                {actor.name}, {actor.age}, {actor.gender}
              </Col>
              <Col className="col-auto">
                <Button variant="primary" className="mr-2" onClick={() => ActorEditor(actor.id)}>Edit</Button>
                <Button variant="danger" style={{marginLeft: "5px"}} onClick={() => DeleteItem(actor.id, actor.name)}>Delete</Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
        {props.address === '/movies' && movies.map(movie => (
          <ListGroup.Item key={movie.id}>
            <Row className="justify-content-between">
              <Col>
                {movie.title}, {movie.release_date}
              </Col>
              <Col className="col-auto">
                <Button variant="primary" className="mr-2" onClick={() => MovieEditor(movie.id)}>Edit</Button>
                <Button variant="danger" style={{marginLeft: "5px"}} onClick={() => DeleteItem(movie.id, movie.title)}>Delete</Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default APICall;