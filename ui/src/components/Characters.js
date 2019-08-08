import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Character from './Character';
import marvel from './marvel.jpg';

const Characters = () => (
  <Query
    query={gql`
      {
        characters {
          id
          name
          description
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading</p>;
      if (error) return <div className="error"><p>No heroes around :(</p></div>;

      const charactersList = data.characters.map(character => (
        <Character character={character} key={character.id} />
      ));
      return (
        <div className="container">
          <div className="characters-list">
            <h1>Marvel Characters</h1>
            <ul>{charactersList}</ul>
          </div>
          <div>
            <img className="marvel-image" src={marvel} alt="Marvel" />
          </div>
        </div>
      );
    }}
  </Query>
);

export default Characters;
