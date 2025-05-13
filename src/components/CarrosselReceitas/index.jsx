import React, { useState } from 'react';
import './index.css';

const videos = [
    {
        id: 1,
        title: 'Receitas de Ora-pro-nóbis',
        url: 'https://www.youtube.com/embed/OlALSpnP5Xs?si=JLuLlw7-KXGglNpy'
    },
    {
        id: 2,
        title: 'Suflê de Taioba',
        url: 'https://www.youtube.com/embed/TR544se89bI?si=hZazid_YldFZh1nU'
    },
    {
        id: 3,
        title: 'Omete de Beldroega',
        url: 'https://www.youtube.com/embed/Z2r9j6R___w?si=MhfF78dQSaXcTZpN'
    }
];

function CarrosselReceitas() {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % videos.length);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + videos.length) % videos.length);
    };

    return (
        <div className="carrossel">
    <h2>{videos[index].title}</h2>
    <div className="video-wrapper">
        <button onClick={handlePrev} id="anterior">&larr;</button>

        <iframe
            src={videos[index].url}
            title={videos[index].title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>

        <button onClick={handleNext} id="proximo">&rarr;</button>
    </div>
</div>
    );
}

export default CarrosselReceitas;
