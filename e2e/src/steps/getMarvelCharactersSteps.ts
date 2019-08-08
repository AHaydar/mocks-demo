import { Given, When, Then } from 'cucumber';
import { expect } from 'chai';

import { mockMarvelCharacters } from '../support/mockserver/endpoints/mockMarvelCharacters';
import openWebsite from '../support/pages/openWebsite';
import {
    getCharacterNames,
    clickShowDescriptionButton,
    getButtonName
} from 'src/support/pages/charactersPage';
import { createCharacter } from 'src/support/mockserver/data/createMarvelCharactersMockData';
import { CharacterDataWrapper } from 'MarvelClients/model/characterDataWrapper';

Given(/^A set of marvel characters with descriptions$/, async dataTable => {
    const characters = dataTable.hashes();
    const createMarvelCharactersResponseBody: CharacterDataWrapper = {
        data: {
            results: characters.map(character =>
                createCharacter(character.name, character.description)
            )
        }
    };
    await mockMarvelCharacters(createMarvelCharactersResponseBody);
});

When(/^I open the characters page$/, () => {
    openWebsite();
});

Then(/^The following characters appear on the screen$/, dataTable => {
    const expectedNames = dataTable.hashes();
    const actualNames = getCharacterNames();
    expect(actualNames.length).to.be.equal(expectedNames.length);
    for (let i = 0; i < expectedNames.length; i++) {
        expect(actualNames[i].name).to.be.equal(expectedNames[i].name);
    }
});

When(/^I click the show description button$/, () => {
    clickShowDescriptionButton();
});

Then(
    /^The button name changes to hide description and the following description appears$/,
    (dataTable: any) => {
        expect(getButtonName()).to.be.equal('Hide description');
    }
);
