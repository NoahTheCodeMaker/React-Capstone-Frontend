import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditActor() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getAccessTokenSilently } = useAuth0();

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    const fetchActor = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: 'https://NoahCapstone'
        });
        const response = await axios.get(`http://localhost:5000/actors/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        console.log(response)
        setName(response.data.actor.name);
        setGender(response.data.actor.gender);
        setAge(response.data.actor.age);
      } catch (error) {
        console.error(error);
      }
    };
    fetchActor();
  }, [getAccessTokenSilently, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const accessToken = await getAccessTokenSilently({
        audience: 'https://NoahCapstone'
      });
      const response = await axios.patch(`http://localhost:5000/actors`, {
        id,
        name,
        gender,
        age
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      console.log(response);
      navigate('/actors');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <h1>Edit Actor</h1>
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

export default EditActor;
