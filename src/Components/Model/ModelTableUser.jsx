import React from 'react'

export const ModelTableUser = ({ name, surname, email, username, phone, career, role }) => {
    return (
        <>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{email}</td>
            <td>{username}</td>
            <td>{phone}</td>
            <td>{career}</td>
            <td>{role}</td>
        </>
    )
}
