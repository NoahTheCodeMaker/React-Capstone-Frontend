import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import APICall from '../modules/tokens';

function Movies() {
  const navigate = useNavigate();

  const handleCreateMovie = () => {
    navigate('/movies/create');
  };

  return (
    <Container>
        <h1 className='top-spacer'>Movies</h1>
        <div className="d-flex justify-content-end mb-3">
          <Button variant="success" onClick={handleCreateMovie}>Create Movie</Button>
        </div>
        <div style={{ height: '300px'}}>
            <APICall address="/movies"/>
        </div>
    </Container>
  );
}

export default Movies;