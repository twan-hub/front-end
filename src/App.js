import React, { useEffect, useState } from 'react';
import './App.css';
import Input from './components/input';
import axios from 'axios';
import InputPost from './components/post-input';
import InputPut from './components/put-input';

function InputDelete() {

  const [nameId, setNameId] = useState('');
  const [error, setError] = useState('');
  const [visibility, setVisibilty] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name Changed it was : ${nameId}`);

    if (visibility && nameId){
    axios.delete(`http://localhost:3002/names/${nameId}`)
      .then(res => {
        console.log(res);
      }).catch(error => { 
        setError(error);
      })
    }
  }

  // if (!nameId && visibility) return `Its blank`;
  // if (error) return `Not found`;



  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Id :
          <input type="text" placeholder={1} value={nameId} onChange={(e) => setNameId(e.target.value)} />
        </label>
        <button type="submit" onClick={() => { setVisibilty(true) }} >Add</button>
      </form>
      <button onClick={() => { setVisibilty(false); setNameId(''); setError(''); }}>clear</button>
      {visibility && nameId && !error ? <div >{`Deleted ${nameId}`}</div> : null}
      {!nameId && visibility ? <div >{`It's blank`}</div> : null}
      {error && visibility && nameId ? <div >{`Error: ${error.message}`}</div> : null}
      
    </>
  )
}


const App = () => {
  return (
    <div >
      <InputPost />
      <InputPut />
      <Input />
      <InputDelete />
    </div>
  );
};

export default App;
