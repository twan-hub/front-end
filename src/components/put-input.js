import React, { useEffect, useState } from 'react';
import axios from 'axios';


function InputPut() {

  const [nameId, setNameId] = useState('');
  const [updatedName, setUpdatedName] = useState('');
  const [json, setJson] = useState('');
  const [error, setError] = useState('');
  const [pastName, setPastName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name Changed it was : ${nameId}`);
    axios.put(`http://localhost:3001/names/${nameId}`, { artistName: updatedName })
      .then(res => {
        setJson(res.data)
        console.log(res);
        console.log(res.data);
      })
      .catch(error => { 
        console.log('error ', error);
    setError(error);})
    console.log(json);
    setError('');
  }

  useEffect(() => {
    console.log(`useEffect callback`);
    if (nameId) {
      axios.get(`http://localhost:3002/names/${nameId}`)
        .then((resp) => { setPastName(resp.data) })
        .catch(error => { 
          console.log('error ', error);
      setError(error);
    })
    }
  }, [nameId]);

  const [visibility, setVisibilty] = useState();



  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Artist Id:
          <input type="text" placeholder={1} value={nameId} onChange={(e) => setNameId(e.target.value)} />
        </label>
        <label>
          Artist Name:
          <input type="text" placeholder={`ex : Lil uzi`} value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} />
        </label>
        <button type="submit" onClick={() => { setVisibilty(true) }} >Add</button>
      </form>
      <button onClick={() => { setVisibilty(false); setNameId(''); setUpdatedName('');}}>clear</button>
      {visibility && nameId && updatedName && !error ? <div >{`You updated the name from ${pastName.artistName} to ${updatedName} `}</div> : null}
      {(!nameId || !updatedName) && visibility ? <div >{`It's blank`}</div> : null}
      {error && visibility && nameId && updatedName ? <div >{`Error: ${error.message}`}</div> : null}
    </>
  )
}

export default InputPut;