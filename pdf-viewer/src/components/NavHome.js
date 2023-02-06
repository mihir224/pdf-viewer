import React from 'react';
import "../NavHome.css";


function NavHome(){
    const [test,setTest]=React.useState([]);
    React.useEffect(()=>{
        fetch("/api/pdf-viewer")
           .then(res=>res.json())
           .then(test=>setTest(test));
        },[]); //we add the second parameter in the useEffect function as a dependency, if we don't do that, it is going to automatically make fetch calls again and again
         //If you actually add some variable or state inside [ ] then it's gonna run the code inside useEffect  whenever that dependency(state or variable) changes.
    console.log(test);
    
    return (   
    <div id="sample"> 
    <div id="navHome">
     <a href="/"><h1>PDF VIEWER</h1></a>
     </div>
    <div id="fileList">
      <h3>The available files are: </h3>
      <ul>
        {test.map((item)=>{
          return <a href={"docs/"+item}><li>{item}</li></a>
        })}
      </ul>
      </div>
     </div>
    )
}
export default NavHome;