import { createMockExpectation } from '../createMockExpectations';
import { CharacterDataWrapper } from 'MarvelClients/model/characterDataWrapper';

export const mockMarvelCharacters = async (
    responseBody: CharacterDataWrapper
  ) => {
    await createMockExpectation({
      path: `/v1/public/characters`,
      responseBody,
    });
  };
  