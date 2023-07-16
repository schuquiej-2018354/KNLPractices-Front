import axios from "axios";
import React, { useEffect, useState } from "react";
import { ModelFavorite } from "../Model/ModelFavorite";

export const Favorite = () => {

  const [fav, setFav] = useState([{}]);

  const getFavorites = async () => {
    try {
      const { data } = await axios('http://localhost:3200/favorite/get/64b3380672c4340db65ee5e3');
      setFav(data.favorites);
    } catch (e) {
      console.log(e);
    }
  };


  useEffect(() => {
    getFavorites()
  }, []);

  return (
    <>
      <div style={{ width: '98%' }}>
        <div className="row" style={{marginBottom: '5px'}}>
          <div className="col-8">
            <input
              className="form-control"
              type="text"
              name=""
              id="inputFav"
              placeholder="Search"
            />
          </div>
          <div className="col">
            <button className="btn btn-primary">Click</button>
          </div>
        </div>
        <div className="card overflow-auto" style={{ height: "88vh", maxHeight: 'calc(110vh - 100px)', overflowY: 'auto', scrollbarWidth: 'thin' }}>
          <h2 className="text-center">FAVORITES</h2>
          {
            fav.map(({ _id, owner, publication }, i) => {
              return (
                <div key={i}>
                  <ModelFavorite
                    user={owner?.name}
                    empress={publication?.empress}
                    location={publication?.location}
                    phone={publication?.phone}
                    description={publication?.description}
                  ></ModelFavorite>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
};
