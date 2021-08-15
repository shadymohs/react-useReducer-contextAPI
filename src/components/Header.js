import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Service/UserContext';

export default function Header() {

    const { userState, dispatch } = useContext(UserContext);

    const logOutAction = () => {
        dispatch({ payLoad: null, type: 'addNewVal' });
        window.sessionStorage.removeItem('isLogged');
    };

    return (
        <div>
            <h1>Welcome { userState.userName }</h1>
            <Link to="/" onClick={ logOutAction }>Log out</Link>
        </div>
    );
};