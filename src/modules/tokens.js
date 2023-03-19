import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const APICall = (props) => {
  const { getAccessTokenSilently } = useAuth0();

  const callApi = async () => {
    try {
      const accessToken = await getAccessTokenSilently({
        audience: 'https://NoahCapstone'
      });
      const response = await axios.get(props.address, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      console.log(response.data);
    } catch (error) {
      alert("You are not logged in!")
      console.error(error);
    }
  };

  return (
    <Button onClick={callApi}>{props.buttonText}</Button>
  );
};

export default APICall;