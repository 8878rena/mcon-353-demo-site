import React, {useState, useContext} from "react";
import "./todo.css";
//import Icon from '@mui/material/Icon';
//import DeleteIcon from '@mui/icons-material/Delete';
import DeleteIcon from '@mui/icons-material/Delete';
//import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Button from '@mui/material/Button';
//import DeleteButton from '@material-ui/icons/Delete'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

//in your context make a function that will let you set todos, then leave the addTOdo same with all the logic in there

export const Todo = () => {
    const [inputText, setInputText] = useState('');
    const [Todo, setTodos] = useState([]);
    
    function addTodo(){
        const newTodos = [...Todo, {text: inputText, isChecked: false}];
        setTodos(newTodos);
    }

    function deleteTodo(deletedTodo){
        setTodos(Todo.filter(todo => todo.text !== deletedTodo))
    }
    function setChecked(checkedTodo){
        checkedTodo.isChecked = !checkedTodo.isChecked;
    } 


    return(
        <div className = "grid">
            <div className= "toCenter">
        <h1>היום קצר והמלאכה מרובה</h1>
         
        <input type= "text" onChange = {(event)=> setInputText(event.target.value)} placeholder="Enter a task"/>
        <button onClick={addTodo}> Add</button>
        </div>
        {Todo.map((todo) =>(
             <ToDoItem text ={todo.text} deleteTodo ={deleteTodo}/>
        ))}

    </div>
    );
};

const ToDoItem = (props) => { 
   return <Grid  container spacing ={0} className = "grid">
        <Grid item xs ={0}>
        <input 
         type = "checkbox"
        name="text"
        value=""
        onChange={() => props.setIsChecked(props.text)}
        />
        </Grid>
        <Grid item xs={1}>
         {props.text}
         </Grid>
        <Grid item xs={1}>
        <Button onClick={() => props.deleteTodo(props.text)}> <DeleteIcon/> </Button>
        </Grid>
        </Grid>;
    } 


