import React from "react";

export const ModelFavorite = ({user, empress, location, phone, description}) => {
  return (
    <>
      <div class="card">
        <div class="card-header">{user}</div>
        <div class="card-body">
          <h5 class="card-title">{empress}</h5>
          <p class="card-text">
            {description}
          </p>
          <p>{location}</p>
          <p>{phone}</p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};
