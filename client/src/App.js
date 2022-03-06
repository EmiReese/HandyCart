import React from "react";
import List from "./Pages/List";
import Header from "./Components/Header";
// import Footer from "./Components/Footer";

function App() {
  return (
    <div className="h-max bg-yellow-200">
      <Header />
      <List />
      {/* <Footer /> */}
    </div>
  );
}
export default App;
