import React, { useEffect, useState } from 'react';
import useApi from '../hooks/use-api';
import axios from 'axios';

function Input() {
  const [nameId, setNameId] = useState('');
  const [json, setJson] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name Id : ${nameId}`);
    console.log(json);
  }

  useEffect(() => {
    if (nameId) {
      console.log(`yeep`);
      const {error, loading} = axios.get(`http://localhost:3002/names/${nameId}`)
        .then((resp) => { 
          console.log(error, loading);
          setJson(resp.data) });
        if (loading ) return console.log("Loading...");
        if (error) return console.log("Error!");
    }
  }, [nameId]);


const [visibility, setVisibilty] = useState();



return (
  <>
    <form onSubmit={handleSubmit}>
      <label>
        Artist Name:
        <input type="text" placeholder={1} value={nameId} onChange={(e) => setNameId(e.target.value)} />
      </label>
      <button type="submit" onClick={() => { setVisibilty(true) }} >Add</button>
    </form>
    <button onClick={() => { setVisibilty(false) }}>clear</button>
    {visibility ? <div >{json.artistName}</div> : null}
  </>
)
}
export default Input;
