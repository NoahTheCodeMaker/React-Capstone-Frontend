import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Movies() {
  return (
    <Container>
        <h1 className='top-spacer'>Movies</h1>
        <Row className='mb-4'>
            <Col md={6}>
                <div style={{ height: '300px', backgroundColor: 'green' }}>Create</div>
            </Col>
            <Col md={6}>
                <div style={{ height: '300px', backgroundColor: 'yellow' }}>Read</div>
            </Col>
        </Row>
        <Row>
            <Col md={6}>
                <div style={{ height: '300px', backgroundColor: 'blue' }}>Update</div>
            </Col>
            <Col md={6}>
                <div style={{ height: '300px', backgroundColor: 'red' }}>Delete</div>
            </Col>
        </Row>
    </Container>
  );
}

export default Movies;