import React, { createContext, useEffect, useState } from 'react';
import axios from "axios";

import api from '../../../config/api';

const userContext = createContext(null);

function UserContext({ children }) {
    const [user, setUser] = useState({});

    useEffect(() => {
        async function fetchProfile() {
            const url = api.base + 'test';
            const user = await axios.get(url);
            setUser(user);
        }

        fetchProfile();
    }, []);

    return (
        <userContext.Provider value={user}>
            { children }
        </userContext.Provider>
    )
}

UserContext.context = userContext;

export default UserContext;