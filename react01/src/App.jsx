import React from "react";

function App(){

  const[todos,setTodos]=React.useState({
    title:"gym",
    description:"at 9pm",
    id:"1"
  })
  console.log(todos.title);

  setInterval(()=>{
    setTodos({
      title:"cricket",
      description:"sdcsa"
    })
  },7000)
  
  return <div>
    hello world
    <Name Name={todos}></Name>
   
  </div>
}

function Name(prpos){
  return <div>
     <br />
    {prpos.Name.title}
    <br />
    {prpos.Name.description}
  </div>
}
  


export default App