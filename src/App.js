import React, {useState} from 'react';
import './App.css';
import Validation from "./Validation/Validation";
import Char from "./Char/Char";
import uuid from "uuid";

function App() {

  const [state, setState] = useState({
    textInput: 'Edit text to start game'
  })

  const textChangedHandler = (event) => {
    const newValue = event.target.value;
    setState({
      ...state,
      textInput: newValue
    })
  }

  const deleteCharHandler = (index) => {
    const newInputtextArray = state.textInput.split('');
    newInputtextArray.splice(index, 1);
    setState({
      ...state,
      textInput: newInputtextArray.join('')
    })
  }

  const renderChar = () => {
    return state.textInput.split('').map((c, i) => {
      return <Char 
        onDeleteChar = {() => deleteCharHandler(i)}
        key={uuid()} 
        value={c}/>
    })
  }

  return (
    <div className="App">
      <input value={state.textInput} onChange={textChangedHandler}/>
      <Validation length={state.textInput.length}/>
      {renderChar()}
    </div>
  );
}

export default App;
