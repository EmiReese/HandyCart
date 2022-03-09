import React, { useState } from "react";
import GroceryForm from "./GroceryForm";
import Grocery from "./Grocery";
import BudgetForm from "./BudgetForm";
import Remaining from "./BudgetRemaining";


function GroceryList() {
  const [grocery, setGrocery] = useState([]);


  // Function to add a Grocery list item
  const addGroceryItem = (item) => {
    console.log(
      "🚀 ~ file: GroceryList.js ~ line 10 ~ addGroceryItem ~ item",
      item
    );
    // Check to see if the item text is empty
    if (!item.text) {
      return;
    }

    // Add the new grocery list item to the existing array of objects
    const newGrocery = [item, ...grocery];
    console.log(newGrocery);

    // Call setGrocery to update state with our new set of grocery list items
    setGrocery(newGrocery);
  };

  // Function to mark grocery list item as complete
  const completeGroceryItem = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedGrocery = grocery.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    console.log(updatedGrocery);
    setGrocery(updatedGrocery);
  };

  // Function to remove grocery list item and update state
  const removeGroceryItem = (id) => {
    const updatedGrocery = [...grocery].filter((item) => item.id !== id);

    setGrocery(updatedGrocery);
  };

  // Function to edit the grocery list item
  const editGroceryItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    }

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the if of the item that was clicked and if so we set it to a new value
    setGrocery((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (<div>
    <div className="grocery-app">
  <h1>Grocery List</h1>
  <GroceryForm onSubmit={addGroceryItem} />
  <Grocery
    grocery={grocery}
    completeGroceryItem={completeGroceryItem}
    removeGroceryItem={removeGroceryItem}
    editGroceryItem={editGroceryItem}
  ></Grocery>

  

<BudgetForm/>
<Remaining/>
</div>
</div>
  );
}

export default GroceryList;
