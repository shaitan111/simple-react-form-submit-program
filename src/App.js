import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const [onsubmit, setbutton] = useState([]);


  function handletext(e) {

    setText(e.target.value)
    

  }


  function submitbutton() {

    setbutton(


      ([...onsubmit, text])



    )



  }





  return (
    <>

      <h2> Hello This is Form </h2>


      <input type='text' placeholder='Enter Your Task' value={text} onChange={(e) => {
        handletext(e)
      }} />

      <button onClick={submitbutton}>Submit </button>

<ul>
  {

onsubmit.map((task , index) => (
<li key={index}>
   {task}

</li>

))

  }
</ul>



    </>
  );
}

export default App;
