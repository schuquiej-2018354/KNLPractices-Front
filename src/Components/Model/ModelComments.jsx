import React from "react";

export const ModelComments = ({id, user, description, time}) => {
  return (
    <>
        <div className="d-flex align-items-start" style={{width: '100%'}}>
        <img className="rounded-circle" style={{ width: '3rem', height: '3rem', marginTop: '1rem', flex: '0 0 3rem' }} alt="avatar1" src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp" />
      <div className="card flex-row bg6 mb-3 comment-container" style={{width: 'auto', marginLeft: '0.5rem'}}>
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <p style={{marginRight: '1rem'}}>{user}</p>
                <small>{time}</small>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </div>
      </div>
        </div>
    </>
  );
};
