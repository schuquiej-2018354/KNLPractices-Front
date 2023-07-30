import axios from "axios";
import React, { useState, useEffect } from "react";

export const ModelComments = ({ id, user, description, time, image }) => {

    const [img, setImg] = useState('');

    console.log(image);

    const getImage = async () => {
        try {
            const { data } = await axios(`http://localhost:3200/user/get-image/${image}`, {
                responseType: 'blob'
            });
            const imageURL = URL.createObjectURL(data);
            setImg(imageURL);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        if (image === undefined) {
        } else {
            getImage();
        }
    }, [image]);

    return (
        <>
            <div className="d-flex align-items-start" style={{ width: '100%', marginTop: '1rem' }}>
                <img className="rounded-circle" style={{ width: '3rem', height: '3rem', marginTop: '1rem', flex: '0 0 3rem' }} src={img} />
                <div className="card flex-row bg6 mb-3 comment-container" style={{ marginLeft: '0.5rem' }}>
                    <div className="card-body" style={{ width: '100%' }}>
                        <div className="d-flex justify-content-between">
                            <p style={{ marginRight: '1rem' }}>{user}</p>
                            <small>{time}</small>
                        </div>
                        <p style={{ width: '100%' }}>{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
