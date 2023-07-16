import React, { useEffect, useState } from "react";
import axios from "axios";

export const ModelPublications = ({ id, user, image, empress, location, phone, description, time }) => {

  const [img, setImg] = useState('');

  const getImage = async () => {
    try {
      const { data } = await axios(`http://localhost:3200/publication/get-image/${image}`, {
        responseType: 'blob'
      });
      const imageURL = URL.createObjectURL(data);
      setImg(imageURL);
    } catch (e) {
      console.log(e);
    }
  }

  const addFavorite = async (publication) => {
    try {
      console.log('si');
      let datos = {
        owner: '64b3380672c4340db65ee5e3',
        publication: publication
      }
      const { data } = await axios.post('http://localhost:3200/favorite/add', datos);
      console.log(data.message);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    if (image === undefined) {

    } else {
      getImage()
    }
  }, [image])

  return (
    <>
      <div class="card" style={{ marginBottom: "10px", marginTop: "10px" }}>

        <div class="row g-0 border rounded overflow-hidden flex-md-row h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <div className="row">
              <div className="col">
                <strong class="d-inline-block mb-2 text-primary">{user}</strong>
              </div>
              <div className="col">
                <div class="mb-1 text-muted text-end">{time}</div>
              </div>
            </div>
            <div className="row">
              <div className="col col-8">
                <div className="row">
                  <div className="col">
                    <h3 class="mb-0">{empress}</h3>
                  </div>
                  <div className="col text-end">
                    <button className="btn" onClick={() => addFavorite(id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <hr />
                <p class="card-text mb-auto">
                  <p className="card-text">Telephone:</p>
                  &ensp; -{phone}
                </p>
                <p class="card-text mb-auto" style={{ marginTop: '2%', marginBottom: '2%' }}>
                  &ensp; -{description}
                </p>
                <p class="card-text mb-auto">
                  <p className="card-text">Address:</p>
                  &ensp; -{location}
                </p>
                <a href="#">
                  Continue reading
                </a>
              </div>
              <div className="col">
                <div class="col-auto d-none d-lg-block">
                  <img src={img} alt="" style={{ width: '14rem', height: '14rem' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
