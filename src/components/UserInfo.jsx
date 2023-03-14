import React from 'react';
import './Comp.css'

function UserInfo({ user }) {
    return (
        <div className='content'>
            <a href={user.link} > <img src={user.avatar_url} alt={`Foto de perfil de ${user.login}`} /> </a>
            <h2>{user.login}</h2>
            <p>{user.name}</p>
            <p>{user.bio}</p>
            <p>{user.location}</p>
            <p>{user.email}</p>
        </div>
    );
}

export default UserInfo;
