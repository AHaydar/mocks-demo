import { Character } from 'MarvelClients/model/character';

export const createCharacter = (name: string, description: string): Character => ({
  id: Math.floor(100000 + Math.random() * 900000),
  name,
  description
});
