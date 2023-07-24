import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ModelPublications } from '../Model/ModelPublications'

export const ModalComments = ({ isOpen, onClose, id, image, user, empress, location, phone, description, time}) => {
    const navigate = useNavigate();

    return (
        <>
            <Modal show={isOpen} size='xl'>
                <Modal.Header>
                    <Modal.Title className='text-dark'>New Post</Modal.Title>
                    <button onClick={onClose} type="button" className="btn" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body>
                <ModelPublications
                    id={id}
                    image={image}
                    user={user}
                    empress={empress}
                    location={location}
                    phone={phone}
                    description={description}
                    time={time}
                ></ModelPublications>
                </Modal.Body>
            </Modal>
        </>
    )
}