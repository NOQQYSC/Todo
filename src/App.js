import React, {useState} from 'react';
import './App.css';
import Todotable from './components/Todolist'

function App() {
  const [thing, setThing] = useState({desc: '', date: ''})
  const [todos, setTodos] = useState([])


const inputChanged = (event) => {
  setThing({ ...thing, [event.target.name]: event.target.value})
}

const addTodo = (event) => {
  event.preventDefault()
  setTodos([...todos, thing])
}

function deletus(index) {
  setTodos(todos.filter((todo, i) => i !== index))
  
}

//const todoRows = todos.map((todo, index) => 
            //<tr key={index}>
             // <td>{todo.date}</td>
           //   <td>{todo.desc}</td>
            //  <td> <input type="button" value="Delete" onClick={() => setTodos(todos.filter((todo, i) => i !== index))} /></td>
           // </tr>
        // )

  return (
    <div className="App">
      <header className="App-header">
        Simple Todolist
      </header>
      
        
      <form onSubmit={addTodo}>
      Description: 
      <input type="text" name="desc" value={thing.desc} onChange={inputChanged} />
        Date:
        <input type="text" name="date" value={thing.date} onChange={inputChanged} />
        <input type="submit" value="Add" />
      </form>
      <Todotable todos={todos}/>
      
    </div>
  );
}

export default App;
