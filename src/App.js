import { useState, useEffect, useRef} from "react";
import FriendsExample from "./components/FriendsExample";
import {v4 as uuidv4} from "uuid";

function App() {

  const firstRender = useRef (true);

  const [inputvalue, setInputValue] = useState ("");
  const [todos,setTodos] = useState ([]);
  

  const  addTodo = (e) => {
   e.preventDefault ();
   if (inputvalue.trim() ==="") return;

   setTodos([
     ...todos,
    {
      text: inputvalue,
      id: uuidv4(),
    },
   ]);

   setInputValue("");


  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo)=> todo.id !== id));
   }


   useEffect(() => {
    if (firstRender.current) {
      console.log("true") ;
       firstRender.current = false;

       if (localStorage.getItem("Todo") !== null) {
        const newTodos = localStorage.getItem("Todo");
         setTodos(JSON.parse([...todos,newTodos]));
        
       }
       
    } else {
      localStorage.setItem("Todo",
      JSON.stringify([...todos]))
       console.log("this is not the first page load");
     }
   }, [todos]);

    // useEffect(() => {
    //   if (localStorage.getItem("Todo") !== null) {
    //   const newTodos = localStorage.getItem("Todo");
    //    setTodos(JSON.parse([...todos,newTodos]));
      
    //  }
    //  },[]);

  
  return (
  <>
    <div>
    <FriendsExample />
    </div>
    <div className="container">
      <h1>ToDo Example</h1>
      <form onSubmit={addTodo}>
        <input
        autoFocus
        type="text"
        placeholder="Add a Todo"
        value={inputvalue}
        onChange={(e) => setInputValue(e.target.value)} 
        />

        <button>Add ToDo</button>
      </form>
      {todos.map((todo) => (
        <div key ={todo.id} className="todo"> 
          <p> {todo.text} </p>
          <button onClick = {() => removeTodo(todo.id)}>Delete</button>
        </div>
      ) ) }
    </div>

  </>
  );
}

export default App;
