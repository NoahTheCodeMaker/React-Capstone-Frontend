import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const TestAuth = (props) => {
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
      alert("You are not signed in!")
      console.error(error);
    }
  };

  return (
    <button onClick={callApi}>{props.buttonText}</button>
  );
};

export default TestAuth;