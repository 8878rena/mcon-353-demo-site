import {Home} from '../home/home';
import {Todo} from '../todo/todo';
import {Header} from '../header/header';
import React, {useState} from "react";
import {
BrowserRouter,
Routes,
Route,
} from "react-router-dom";

export const Context = React.createContext();


function App() {
  const [todos, setTodos] = useState([]);
  return (
    
      <div>
        <Context.Provider value = {{todos, setTodos}} >
      {/* //pass in a value- current todo array and function to use to update array */}
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
        </Routes>
      </BrowserRouter>
      </Context.Provider>
      </div>
    
      
     
    
  );
}
 

  

export default App;
