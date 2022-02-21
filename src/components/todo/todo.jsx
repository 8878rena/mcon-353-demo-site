import React, {useState} from "react";
import "./todo.css";
//import Icon from '@mui/material/Icon';
//import DeleteIcon from '@mui/icons-material/Delete';
//import DeleteIcon from '@mui/icons-material/Delete';
//import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Button from '@mui/material/Button';
//import DeleteButton from '@material-ui/icons/Delete'
export const Todo = () => {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    
    function addTodo(){
        const newTodos = [...todos, {text: inputText, isChecked: false}];
        setTodos(newTodos);
    }

    function deleteTodo(deletedTodo){
        setTodos(todos.filter(todo => todo.text !== deletedTodo))
    }
    function setChecked(checkedTodo){
        checkedTodo.isChecked = !checkedTodo.isChecked;
    } 


    return(
        <div>
        <h1>היום קצר והמלאכה מרובה</h1>
         
        <input type= "text" onChange = {(event)=> setInputText(event.target.value)} placeholder="Enter a task"/>
        <button onClick={addTodo}> Add</button>
        
        {todos.map((todo) =>(
             <ToDoItem text ={todo.text} deleteTodo ={deleteTodo}/>
        ))}

    </div>
    );
};

const ToDoItem = (props) => { 
    return <div>
    <input 
    type = "checkbox"
    name="text"
    value=""
    onChange={() => props.setIsChecked(props.text)}
    />
    {props.text}
    <Button onClick={() => props.deleteTodo(props.text)}> --- </Button>
    </div>
};

