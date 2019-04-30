import React from 'react';

function Character({character}) {
    return (
        <ul>
            <li>name: {character.name}</li>
            <li>born: {character.born}</li>
            <li>culture: {character.culture}</li>
        </ul>
    )
}

export default Character;