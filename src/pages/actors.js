import React from 'react';
import { Container } from 'react-bootstrap';
import APICall from '../modules/tokens'

function Actors() {
  return (
    <Container>
        <h1 className='top-spacer'>Actors</h1>
        <div style={{ height: '300px', backgroundColor: '#F6F1F1' }}>
            <APICall address="/actors" buttonText='Get Actors'/>
        </div>
    </Container>
  );
}

export default Actors;