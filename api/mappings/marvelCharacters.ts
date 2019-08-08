import axios from 'axios';

import { baseURL } from '../config/environmentConstants';
import { generateAPIAuthorizationKeys } from '../config/generateAPIKeys';

export const listMarvelCharacters = async () => {
  console.log(baseURL);
  const response = await axios.get(`${baseURL}/v1/public/characters`, {
    params: generateAPIAuthorizationKeys()
  });
  return response.data.data.results.map(result => ({
    id: result.id,
    name: result.name,
    description: result.description,
  }));
};
