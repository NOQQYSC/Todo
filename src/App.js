import React, {useState} from 'react';
import './App.css';
import Todotable from './components/Todolist'
import { AgGridReact } from 'ag-grid-react';
import { useRef } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import Button from'@mui/material/Button';
import TextField from'@mui/material/TextField';
import Stack from'@mui/material/Stack';
import TabApp from './components/menu';



function App() {
  const [thing, setThing] = useState({desc: '', date: '', priority: ''})
  const [todos, setTodos] = useState([])
  const gridRef = useRef()


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

const columns = [
{headerName: 'Date', field: 'date', sortable: true, filter: true, floatingFilter: true},
{headerName: 'Description', field: 'desc', sortable: true, filter: true, floatingFilter: true},
{headerName: 'Priority', field: 'priority', sortable: true, filter: true, floatingFilter: true,
 cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}},
]
const deleteTodo = () => {
  if (gridRef.current.getSelectedNodes().length > 0) {
  setTodos(todos.filter((thing, index) => 
       index !== gridRef.current.getSelectedNodes()[0].childIndex))
  }
  else {
    alert('Select row first');
  }
}

  return (
    <div className="App">
      <TabApp thing={thing} addTodo={addTodo} deleteTodo={deleteTodo} gridRef={gridRef} inputChanged={inputChanged} todos={todos} columns={columns}/>

        
      
      
    </div>
  );
}

export default App;
