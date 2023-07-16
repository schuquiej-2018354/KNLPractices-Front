import React from "react";

export const ModelFavorite = ({ user, empress, location, phone, description }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div class="card text-dark bg-light mb-3" style={{ width: '95%' }}>
          <div className="card-header d-flex justify-content-between">
            <div className="">
              <h5 class="" style={{marginTop: '7%'}}>{empress}</h5>
            </div>
            <div className="">
              <button className="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                </svg>
              </button>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text">Telefono: {phone}
              <p class="card-text">Direccion:{location}</p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
