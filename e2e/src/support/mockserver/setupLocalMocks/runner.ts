// ts-node ./src/support/mockserver/setupLocalMocks/runner.ts

import * as constants from './constants';
import { mockMarvelCharacters } from '../endpoints/mockMarvelCharacters';
import { CharacterDataWrapper } from 'MarvelClients/model/characterDataWrapper';
import { Character } from 'MarvelClients/model/character';

const createCharacter = (name: string, description: string): Character => ({
    id: Math.floor(100000 + Math.random() * 900000),
    name,
    description
  });
  

const main = async () => {
    const charactersResponseBody: CharacterDataWrapper = {
        data: {
            results: constants.characters.map(character =>
                createCharacter(character.name, character.description)
            )
        }
    };
    await mockMarvelCharacters(charactersResponseBody);
};

main();
