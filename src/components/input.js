import React, { useState} from 'react';
import useApi from '../hooks/use-api';

function Input(){
  const [nameId, setNameId] = useState('');
  const {artistName} = useApi(`/names/${nameId}`);
  const [visibility, setVisibilty] = useState();

  return (
      <>
      <input value={nameId} onChange={(e) => setNameId(e.target.value)}/>
      <button onClick={()=>{setVisibilty(true)}}>submit</button>
      <button onClick={()=>{setVisibilty(false)}}>clear</button>
      {visibility ? <div >{artistName}</div> : null}
      </>
  )
}
export default Input;
