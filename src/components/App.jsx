import React, { useState } from "react";

function App() {
  const arr = [];
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);
  function handleChange(event) {
    const { name: eventName, value: eventValue } = event.target;
    setItem(eventValue);
  }

  function handleClick() {
    // console.log(item);
    setItemList((prevValue) => {
      return [...prevValue, item];
    });
    console.log(itemList);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={item} onChange={handleChange} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemList.map((todoItem) => {
            return <li>{todoItem} </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
