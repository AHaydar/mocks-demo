const NAME_SELECTOR = '.character-name';
const SHOW_CHARACTERS_BUTTON = '.show-description-btn';

export const getCharacterNames = () => {
    $(NAME_SELECTOR).waitForExist()
    const allNames = $$(NAME_SELECTOR);
    return allNames.map(name => {
        return {name: name.getText()}
    })
}

export const clickShowDescriptionButton = () => {
    const button = $(SHOW_CHARACTERS_BUTTON);
    button.click();
}

export const getButtonName = () => {
    const button = $(SHOW_CHARACTERS_BUTTON);
    return button.getText();
}