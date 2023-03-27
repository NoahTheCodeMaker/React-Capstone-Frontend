import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import APICall from '../modules/tokens'

function Actors() {
  const navigate = useNavigate();

  const handleCreateActor = () => {
    navigate('/actors/create');
  };

  return (
    <Container>
        <h1 className='top-spacer'>Actors</h1>
        <div className="d-flex justify-content-end mb-3">
          <Button variant="success" onClick={handleCreateActor}>Create Actor</Button>
        </div>
        <div style={{ height: '300px', backgroundColor: '#F6F1F1' }}>
            <APICall address="/actors"/>
        </div>
    </Container>
  );
}

export default Actors;