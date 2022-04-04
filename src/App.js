import React, {useState} from 'react';
import './App.css';
import Todotable from './components/Todolist'
import { AgGridReact } from 'ag-grid-react';
import { useRef } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

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
      <header className="App-header">
        Simple Todolist
      </header>
      
        
      
      Description: 
      <input type="text" placeholder="Description" name="desc" value={thing.desc} onChange={inputChanged} />
        Date:
        <input type="text" placeholder="Date" name="date" value={thing.date} onChange={inputChanged} />
        <input type="text" placeholder="Priority" name="priority" value={thing.priority} onChange={inputChanged} />
        <button onClick={addTodo}>Add</button>
        <button onClick={deleteTodo}>Delete</button>
      
      <div className="ag-theme-material" style={{height: '700px', width: '80%', margin: 'auto'}}>
      <AgGridReact
        
        ref={gridRef}
        onGridReady={ params => gridRef.current = params.api }
        rowSelection="single"
        columnDefs={columns}
        rowData={todos}
        animateRows={true}
        >
      </AgGridReact>
      </div>
    </div>
  );
}

export default App;
