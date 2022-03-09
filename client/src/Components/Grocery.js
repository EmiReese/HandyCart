import React, { useState } from "react";
import GroceryForm from "./GroceryForm";


function Grocery(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const [cost, setCost] = useState('');
  
  console.log(props.grocery);

  const submitUpdate = (value) => {
    props.editGroceryItem(edit.id, value);
    setEdit({ id: null, value: "" });
  };

  if (edit.id) {
    return <GroceryForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.grocery.map((item, i) => (
    <div
      className={item.isComplete ? `grocery-row complete` : `grocery-row`}
      key={i}
    ><div className='col-sm'>
					
				</div>
      <div key={item.id} onClick={() => props.completeGroceryItem(item.id)}>
        {item.price}
        {item.text}
      </div>
      <div className="icons">
        {console.log(item)}
        <p
          onClick={() =>
            setEdit({
              id: item.id,
              value: item.text,
            })
          }
        >
          {" "}
          ✏️
        </p>
        
        <p onClick={() => props.removeGroceryItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Grocery;
