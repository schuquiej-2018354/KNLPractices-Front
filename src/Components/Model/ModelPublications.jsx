import React, { useEffect, useState } from "react";
import axios from "axios";


export const ModelPublications = ({id, user, image, empress, location, phone, description, time}) => {

   const [ img, setImg ] = useState('');
   
   const getImage = async() =>{
    try{
        const { data } = await axios(`http://localhost:3200/publication/get-image/${image}`, {
            responseType: 'blob'
        });
        const imageURL = URL.createObjectURL(data);
        setImg(imageURL);
    }catch(e){
        console.log(e);
    }
   }

   const addFavorite = async(publication) => {
    try{
        console.log('si');
        let datos = {
            owner: '64b3380672c4340db65ee5e3',
            publication: publication
        }
        const { data } = await axios.post('http://localhost:3200/favorite/add', datos);
        console.log(data.message);
    }catch(e){
        console.log(e);
    }
}
    useEffect(()=> {
        if(image === undefined){

        }else{
            getImage()
        }
     }, [image])

     return (
         <>
      <div class="card" style={{ marginTop: "10px" }}>
        <button onClick={()=> addFavorite(id)}>favoriteeee</button>
        <div class="row g-0 border rounded overflow-hidden flex-md-row h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">{user}</strong>
            <div class="mb-1 text-muted text-end">{time}</div>
            <h3 class="mb-0">Informatica</h3>
            <br />
            <p class="card-text mb-auto">
              {description}
            </p>
            <p class="card-text mb-auto">
              {location}
            </p>
            <p class="card-text mb-auto">
              {phone}
            </p>
            <p>
                {empress}
            </p>
            <a class="stretched-link">
              Comments
            </a>
          </div>
          <div class="col-auto d-none d-lg-block">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
