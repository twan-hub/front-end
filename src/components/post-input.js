import React, { useState } from 'react';
import axios from 'axios';

function InputPost() {

    const [artistName, setArtistName] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name Changed it was : ${artistName}`);
        const { error, loading } = axios.post(`http://localhost:3002/names`, { artistName })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        if (loading) return console.log("Loading...");
        if (error) return console.log("Error!");
    }
    const [visibility, setVisibilty] = useState();

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Artist Name:
                    <input type="text" placeholder={'ex: Lil wayne'} value={artistName} onChange={(e) => setArtistName(e.target.value)} />
                </label>
                <button type="submit" onClick={() => { setVisibilty(true) }}>Add</button>
            </form>
            <button onClick={() => { setVisibilty(false) }}>clear</button>
            {visibility ? <div >You have entered {artistName} as the artist</div> : null}
        </div>
    )
}

export default InputPost;