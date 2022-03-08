import React, { useState } from "react";

function GroceryForm(props) {
  const [input, setInput] = useState("");
  const [cost, setCost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
    });

    setInput("");
  };


  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleChangeCost = (e) => {
    setCost(e.target.value);
  };

  return !props.edit ? (
    <div>
      
      <form className="grocery-form" onSubmit={handleSubmit}>
        
        <input
          type="text"
          placeholder="Add item to list"
          value={input}
          name="text"
          className="grocery-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown"></div>
        <button className="grocery-button">Add grocery list item</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="grocery-form" onSubmit={handleSubmit}>
      <label for='cost'>Cost/Item</label>
					<input
						type='text'
            placeholder={props.edit.value}
            className="grocery-input"
						value={cost}
						onChange={handleChangeCost}
					></input>

        <input
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="grocery-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown"></div>
        <button className="grocery-button">Update</button>
      </form>
    </div>
  );
}

export default GroceryForm;
