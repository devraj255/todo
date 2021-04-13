import React,{useState} from "react";
import ToDo from "./ToDo";

const App=() => {
  const [inputList,setInputList]= useState("");
  const [Items,setItems]=useState([]);
  const itemEvent=(event)=>{
    setInputList(event.target.value);
  }
  const listofItems=() =>{
    setItems((oldItems) =>{
      return [...oldItems,inputList];
    })
     setInputList('');
  }
  const deleteItems=(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !== id;
    })
    })
  
  

  

  }
  return (
    <div className="main_div">
     <div className="center_div">
       <br />
       <h1>ToDo list</h1>
       <br/>
       <input type="text" placeholder="Add a Items" onChange={itemEvent} value={inputList} />
       <button onClick={listofItems}> + </button>

       <ol>
        { Items.map((itemval,index) =>{
           return <ToDo 
           key={index}
           id={index}
           text={itemval}
           onSelect={deleteItems} />
         })
         }
       </ol>
     </div>      
    </div>
  );
}

export default App;
