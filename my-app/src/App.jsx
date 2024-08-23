import { useState } from "react";
import Regsiter from "./User/Regsiter"
import Userlist from "./User/Userlist"


function App() {
 let[data,setData]=useState([]);
 let userInfo= {data,setData}; 
//  this is a object
console.log(`App:-${userInfo}`);
console.log(userInfo);

  return (
    <> 
    <div className="App">
    <div className="max-w-[1400px] mx-auto border">
      <div className="grid gap-6 grid-cols-[30%_auto] border border-emerald-600">
      <Regsiter userInfo={userInfo} />
      <Userlist userInfo={userInfo}/>
      
      </div>
      <div>
        <h1>Check</h1>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
