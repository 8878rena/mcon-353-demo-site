import {Home} from '../home/home';
import {Todo} from '../todo/todo';
import {Header} from '../header/header';
import React from "react";
import {
BrowserRouter,
Routes,
Route,
} from "react-router-dom";



//need to create context!
const TodoContext= React.createContext();
function App() {
  
  return (
    
      <><TodoContext.Provider>
      {/* //pass in a value- current todo array and function to use to update array */}
    </TodoContext.Provider><BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
        </Routes>
      </BrowserRouter></>
    
      
      
    
  );
}
 

  

export default App;
