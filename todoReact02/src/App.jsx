import React from "react";


// custom hook 
function useTodo(){

  const [todos,setTodos]=React.useState([])
    


  React.useEffect(()=>{
     fetch("http://localhost:3002/todos",{
      method:"GET"
     }).then((response)=>(
      response.json().then((data) => {
        console.log(data);
      setTodos(data)}
      )
     )) 

     setInterval(()=>{
      fetch("http://localhost:3002/todos",{
        method:"GET"
       }).then((response)=>(
        response.json().then((data) => {
          console.log(data);
        setTodos(data)}
        )
       )) 
     },1000)
  },[])

  return todos
}

function App(){
 
   const todos = useTodo()
 
        
  return(
     <div>
      {todos.map(t=>{
        return <div>
          {t.title} {t.description} <button>Delete</button>
        </div>
      })}
     </div>
  )
}


export default App