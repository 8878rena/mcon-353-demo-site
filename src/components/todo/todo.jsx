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
import {Context} from '../App/App';

//in your context make a function that will let you set todos, then leave the addTOdo same with all the logic in there

export const Todo = () => {
    const [inputText, setInputText] = useState('');
    const {todos, setTodos} = useContext(Context);
    
    function addTodo(){
        const newTodos = [...todos, {text: inputText, isChecked: false}];
        setTodos(newTodos);
    }

    function deleteTodo(deletedTodo){
        setTodos(todos.filter(todo => todo.text !== deletedTodo))
    }
    //function setChecked(checkedTodo){
        /*if (checkedTodo.isChecked){
            checkedTodo.isChecked=false;
        }
        else{
           checkedTodo.isChecked=true;
        }
        */
        //checkedTodo.isChecked = !checkedTodo.isChecked;
    //} 
    function setChecked(checkedTodo) {
        const newTodos = todos.map((todo) => {
          if (todo.text === checkedTodo.text) {
            return { ...todo, isChecked: !todo.isChecked };
          }
          return { ...todo };
        });
        setTodos(newTodos);
      }


    return(
        <div className = "grid">
            <div className= "toCenter">
        <h1>היום קצר והמלאכה מרובה</h1>
         
        <input type= "text" onChange = {(event)=> setInputText(event.target.value)} placeholder="Enter a task"/>
        <Button onClick={addTodo}> Add</Button>
        </div>
        {todos.map((todo) =>(
             <ToDoItem todo ={todo} deleteTodo ={deleteTodo} setChecked={setChecked}/>
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
        checked={props.todo.isChecked}
        onChange={() => props.setChecked(props.todo)}
        />
        </Grid>
        <Grid item xs={1}>
         {props.todo.text}
         </Grid>
        <Grid item xs={1}>
        <Button onClick={() => props.deleteTodo(props.todo.text)}> <DeleteIcon/> </Button>
        </Grid>
        </Grid>;
    } 


