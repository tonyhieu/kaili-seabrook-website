import React, {useState, useEffect} from 'react';

import '../css/default.css';
import '../css/home.css';
import PieceCard from '../fragments/PieceCard';
import ModelPiece from '../fragments/ModelPiece';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

function Home() {
    const [pieces, setPieces] = useState([]);
    const [model, setModel] = useState(false);
    const [modelData, setModelData] = useState('');

    const url = "http://127.0.0.1:5001/kaili-seabrook-site/us-central1/app/api/getPieces";
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    useEffect(() => {
        fetch(url, requestOptions)
            .then(response => {
                const resp = response.json();
                return resp;
            })
            .then(data => setPieces(data.data));
    }, [])

    const openImage = (sourceLink) => {
        setModelData(sourceLink);
        setModel(true);
    }

    const closeImage = () => {
        // setModelData({
        //     link: '',
        //     name: '',
        //     description: '',
        //     date: ''
        // });
        setModel(false);
    }

    return (
        <>

        <div className={model ? "model open" : "model"}>
            <ModelPiece {...modelData} />
            <FontAwesomeIcon icon={faX} onClick={() => closeImage()} />
        </div>

        <div className="default">
            <main className="home">
                
                <div className="gallery">
                    {pieces.map((itemData) => {
                        return(
                            <div className="piece-card" key={itemData.id} onClick={() => openImage(itemData)}>
                                <PieceCard {...itemData} />
                            </div>
                        )
                    })}
                </div>

            </main>
        </div>

        </>
    );
}

export default Home;