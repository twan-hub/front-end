import React, { useState} from 'react';
import './App.css';
import useApi from './hooks/use-api';
import Input from './components/input';
import usePost from './hooks/post-api';

function InputPost(){
  const [artistName, setArtistName] = useState('');
  const [visibility, setVisibilty] = useState();
  return (
      <>
      <input value={artistName} onChange={ (e) => setArtistName(e.target.value)}/>
      <button onClick={()=>{setVisibilty(true)}}>submit</button>
      <button onClick={()=>{setVisibilty(false)}}>clear</button>
      {visibility ? <div >{artistName}</div> : null}
      
      </>
  )
}

const App = () =>{
 const {artistName} = useApi('/names/1');
 console.log(artistName);
return (
    <div >
      <InputPost/>
      <Input/>
      <div>{artistName}</div>
    </div>
  );
};

export default App;
