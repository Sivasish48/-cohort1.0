

//import { createContext, useContext, useState } from 'react';
import { RecoilRoot, atom, useSetRecoilState, useRecoilValue } from 'recoil';




function App() {
   
  
    return (
      <>

      <RecoilRoot>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Welcome
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Wishing a good day
            </p>
            <Button/>
            <CounterComponent />
          </div>
        </div>
        </RecoilRoot>
      </>
    );
  }
  
  function Button() {
    return (
      <div className="flex justify-between">
        <Increase/>
        <Decrease/>
      </div>
    );
  }
  
  function Increase() {
    
    const setCount = useSetRecoilState(countState)
    
    return (
      <button
        className="px-3 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 focus:outline-none"
        onClick={() => {
          setCount((count)=>count + 1);
        }}
      >
        Increase
      </button>
    );
  }
  
  function Decrease() {

    const setCount = useSetRecoilState(countState)

    return (
      <button
        className="px-3 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 focus:outline-none"
        onClick={() => {
          setCount((count)=>count- 1);
        }}
      >
        Decrease
      </button>
    );
  }
  
  function CounterComponent() {
   const count = useRecoilValue(countState)
    
    return <div className="mt-4 text-2xl font-bold">{count}</div>;
  }
    
  export default App;
  

  // let us declare the atom here 

  const countState = atom({
    key:"countState",
    default:0,
  })