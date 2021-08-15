import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Header from './Header';

export default function Home() {

    const history = useHistory();

    useEffect(() => {
        if (!(window.sessionStorage.getItem('isLogged') ?? false)) {
            history.push("/");
        }
    }, [ history ]);

    return (
        <div>
            <Header />
        </div>
    );
};