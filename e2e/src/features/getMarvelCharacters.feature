Feature: Marvel characters
    Marvel characters and their descriptions are displayed properly

    Scenario: Get the list of marvel characters 
        Given A set of marvel characters with descriptions 
            | name           | description                                                                                                                                                                                                                                                     |
            | Adam Warlock   | Adam Warlock is an artificially created human who was born in a cocoon at a scientific complex called The Beehive.                                                                                                                                              |
            | Agent X (Nijo) | Originally a partner of the mind-altering assassin Black Swan, Nijo spied on Deadpool as part of the Swan's plan to exact revenge for Deadpool falsely taking credit for the Swan's assassination of the Four Winds crime family, which included Nijo's brother.|
        When I open the characters page
        Then The following characters appear on the screen
            | name           |
            | Adam Warlock   |
            | Agent X (Nijo) |

    Scenario: Validate the description is displayed properly
        Given A set of marvel characters with descriptions 
            | name           | description                                                                                                        |
            | Adam Warlock   | Adam Warlock is an artificially created human who was born in a cocoon at a scientific complex called The Beehive. |
        When I open the characters page
        And I click the show description button
        Then The button name changes to hide description and the following description appears
            | description                                                                                                        |
            | Adam Warlock is an artificially created human who was born in a cocoon at a scientific complex called The Beehive. |