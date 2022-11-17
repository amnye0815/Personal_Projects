import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Main = () => {
    const [ message, setMessage ] = useState('loading...')
    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then(res=> setMessage(res.data.message))
    }, []);
    return (
        <h2>Message from backend: {message}.</h2>
    )
}

export default Main;