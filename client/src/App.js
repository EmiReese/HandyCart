import React from "react";
import List from "./Pages/List";
import Header from "./Components/Header";
// import Footer from "./Components/Footer";
import Budget from "./Components/Budget";
import ExpenseTotal from "./Components/ExpenseTotal";
import Remaining from "./Components/Remaining";

function App() {
  return (
    <div className="h-max columns-1 bg-yellow-200">
      <Header />
      <List />
      <div className="columns-3 flex justify-evenly">
        <Budget />
        <ExpenseTotal />
        <Remaining />
      </div>

      {/* <Footer /> */}
    </div>
  );
}
export default App;
