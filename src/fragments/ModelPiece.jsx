import React from 'react';

function ModelPiece(props) {
    return (
        <div className="model-piece">
            <div className="image-col">
                <img src={props.link} alt={props.name} />
            </div>
            <div className="metadata-col">
                <p>Title: {props.name}</p>
                <p>Description: {props.description}</p>
                <p>Date Created: {props.date}</p>
            </div>
        </div>
    )
}

export default ModelPiece;