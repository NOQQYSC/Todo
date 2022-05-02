import React, { useState } from'react';
import Tabs from'@mui/material/Tabs';
import Tab from'@mui/material/Tab'; 
import { AgGridReact } from 'ag-grid-react';
import { useRef } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import Button from'@mui/material/Button';
import TextField from'@mui/material/TextField';
import Stack from'@mui/material/Stack';

function TabApp(props) {
    
    const [value, setValue] = useState('home');

    const handleChange = (event, value) => {
          setValue(value);
        };

    return (
    <div>
        <Tabs value={value} onChange={handleChange}>
            <Tab value="home" label="HOME" />
            <Tab value="todos" label="TODOS" />
        </Tabs>
        {value === 'home' && <div><h1>Welcome to the Home Page!</h1></div>}   
        {value === 'todos' && <div>
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
        <TextField
          label="Date"
          variant="standard"
          name="date" value={props.thing.date}
          onChange={props.inputChanged}/>
          <TextField
          label="Description"
          variant="standard"
          name="desc" value={props.thing.desc}
          onChange={props.inputChanged}/>
        <TextField
          label="Priority"
          variant="standard"
          name="priority" value={props.thing.priority}
          onChange={props.inputChanged}/>
        
        <Button onClick={props.addTodo} variant="contained">Add</Button>
        <Button onClick={props.deleteTodo} variant="contained">Delete</Button>
        </Stack>
      
      <div className="ag-theme-material" style={{height: '700px', width: '80%', margin: 'auto'}}>
      <AgGridReact
        
        ref={props.gridRef}
        onGridReady={ params => props.gridRef.current = params.api }
        rowSelection="single"
        columnDefs={props.columns}
        rowData={props.todos}
        animateRows={true}
        >
      </AgGridReact>
      </div>
            
            </div>}   
    </div>
    );
}

export default TabApp;