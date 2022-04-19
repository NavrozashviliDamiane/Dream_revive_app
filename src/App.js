import React, {useState} from 'react';
import './App.css';

import DreamField from './Dreams/DreamField';
import DreamList from './Dreams/DreamList';

function App() {
  const [dreamList, setDreamList] = useState([]);

  const addDreamHandler = (uDream, uYear) => {
    setDreamList((prevDreamList) => {
      return [
        ...prevDreamList,
        { dream: uDream, year: uYear, id: Math.random().toString() },
      ];
    });
  };

  
  return (
    <div>
      <DreamField onAddDream={addDreamHandler}/>
      <DreamList dreams={dreamList} />
    </div>
  
    

  );
}

export default App;
