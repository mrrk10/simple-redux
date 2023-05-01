import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { incNum,decNum } from './Action';
import './App.css';

function App() {
  const[count,setCount]=useState('')
  const changeValue=useSelector((state)=>state.countNumber);
  const dispatch=useDispatch();
  return (
    <>
      <div className='App'>
       <button onClick={()=>dispatch(decNum(count))} >-</button>
       <input type="text" onChange={(e)=>{setCount(parseInt(e.target.value))}} />

       <button onClick={()=>dispatch(incNum(count))}>+</button>

      </div>
    </>
  );
}

export default App;
