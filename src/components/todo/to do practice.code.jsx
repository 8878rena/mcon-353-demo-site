import React from 'react';
import { useState } from 'react';


/*export const Todo =() => {
    return (<div>todo</div>)
}*/

export function Todo() {
    
    return (
        <div className="Todo">
          <Header />
          <ToDoList toDoList/>
          get a mui input text to get user input
          <input> GO TO SLEEP!</input>
         {/* however you get the info, do name of state- theList.concat(id:order increment logic module 3 , name: user input , complete:false   )*/}
        </div>

      );
   }

   const Header = () => {
    return (
        <header>
            <h1>היום קצר והמלאכה מרובה</h1>
        </header>
    );
 };

const theList = []

const ToDoList = () => {
    const [ toDoList, setToDoList ] = useState(theList);
    const [ userInput, setUserInput ] = useState('');


    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleToggle = (id) => {
        let mapped = ToDoList.map(task => {
          return task.id == id ? { ...task, complete: !task.complete } : { ...task};
        });
        setToDoList(mapped);
      }

      
    const handleFilter = () => {
    let filtered = theList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

    return (
        <div>
            <input type="text" onChange={handleChange} placeholder="Enter task..."/>
            <AddTask
                userInput= {userInput}
                toDoList={toDoList}
                setToDoList={setToDoList}
            >

            </AddTask>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
 };

 const ToDo = ({todo}) => {
    return (
        <div className={todo.complete ? "strike" : ""}>
            {todo.task}
        </div>
    );
 };


/*const handleSubmit = (e) => {
    //e.preventDefault();
    addTask(userInput);
    setUserInput('');

}*/

const AddTask = (userInput,toDoList,setToDoList) => {
    let copy = [...theList];
    copy.push({id: toDoList.length + 1, task: userInput, complete: false });
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }








