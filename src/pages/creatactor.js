import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateActor() {
  const navigate = useNavigate();
  const { getAccessTokenSilently } = useAuth0();

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !gender || !age) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const accessToken = await getAccessTokenSilently({
        audience: 'https://NoahCapstone'
      });

      await axios.post('http://localhost:5000/actors', {
        name,
        gender,
        age
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      navigate('/actors');
    } catch (error) {
      alert("You do not have pernissions to add actors");
      console.error(error);
    }
  };

  return (
    <Container>
      <h1>Create Actor</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Enter age" value={age} onChange={(e) => setAge(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formGender">
          <Form.Label>Gender</Form.Label>
          <Form.Control type="text" placeholder="Enter gender" value={gender} onChange={(e) => setGender(e.target.value)} required />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default CreateActor;
