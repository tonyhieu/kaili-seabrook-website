import React from 'react';

function PieceCard(props) {
    return (
        <img src={props.link} alt={props.name} style={{width: '100%'}}></img>
    )
}

export default PieceCard;