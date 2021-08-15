import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../Service/UserContext';

export default function Login() {

    
    const { userState, dispatch } = useContext(UserContext);

    const history = useHistory();

    const submitAction = () => {
        if (userState.userName) {
            window.sessionStorage.setItem("isLogged", true);
            history.push("/home");
        }
    }

    return (
        <div>
            <input value={ userState.userName } type="text" placeholder="Your name" onChange={ e => dispatch({ payLoad: e.target.value, type: 'addNewVal' }) } />
            <input type="button" value="Proceed" onClick={ submitAction } />
        </div>
    );
};