import { useEffect, useState } from 'react';

const baseUrl = "http://localhost:3001/names";

const usePost = (artistName) => {
    const [postId, setPostId] = useState(null);
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({ artistName })
    };
    fetch('https://reqres.in/api/posts', requestOptions)
        .then(response => response.json())
        .then(data => setPostId(data.id));
};

export default usePost;