import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens:44
  });
    // Create add and remove functions here that changes the
    // state.
    function invhandler(value,item){
        if(inv[item]==1&&value==-1){
            return;
        }
        inv[item]=inv[item]+value;
       
        setInv({...inv});
    }
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>{invhandler(+1,"books")}}>+</button>
        <button className="circlularButton" onClick={()=>{invhandler(-1,"books")}}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>{invhandler(+1,"notebooks")}}>+</button>
        <button className="circlularButton" onClick={()=>{invhandler(-1,"notebooks")}}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>{invhandler(+1,"pens")}}>+</button>
        <button className="circlularButton" onClick={()=>{invhandler(-1,"pens")}}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={()=>{invhandler(+1,"inkpens")}}>+</button>
        <button className="circlularButton" onClick={()=>{invhandler(-1,"inkpens")}}>-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {inv.books + inv.inkpens + inv.notebooks + inv.pens}
    </div>
  );
};
