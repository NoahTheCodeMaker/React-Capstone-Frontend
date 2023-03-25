import React from 'react';
import { Container } from 'react-bootstrap';
import APICall from '../modules/tokens';

function Movies() {
  return (
    <Container>
        <h1 className='top-spacer'>Movies</h1>
        <div style={{ height: '300px', backgroundColor: '#F6F1F1' }}>
            <APICall address="/movies" buttonText='Get Movies'/>
        </div>
    </Container>
  );
}

export default Movies;