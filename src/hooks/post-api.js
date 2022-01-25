import React, { useState } from 'react';
import axios from 'axios';

function usePost(json) {
    const [artistName, setArtistName] = useState('');
    axios.post(`http://localhost:3001/names`, { json })
        .then(res => {
            console.log(res.data);
            setArtistName(res);
        })
    return artistName;
}
export default usePost;