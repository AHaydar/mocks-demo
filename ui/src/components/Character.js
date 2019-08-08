import React from 'react';

class Character extends React.Component {
  state = { isDescriptionVisible: false };

  handleClick = () => {
    this.setState(prevState => ({
      isDescriptionVisible: !prevState.isDescriptionVisible
    }));
  };

  render() {
    const { name, description } = this.props.character;
    const { isDescriptionVisible } = this.state;
    return (
      <li>
        <span className="character-name">{name}</span>
        {description ? (
          <React.Fragment>
            <button className="show-description-btn" onClick={this.handleClick}>
              {isDescriptionVisible ? 'Hide description' : 'Show description'}
            </button>
            {isDescriptionVisible && (
              <p className="description">{description}</p>
            )}
          </React.Fragment>
        ) : null}
      </li>
    );
  }
}

export default Character;
