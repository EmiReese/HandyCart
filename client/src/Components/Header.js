import React from "react";

const Header = () => {
  return (
    <div>
      <header className="flex justify-between my-5 font-bold">
        <div>
          <button className="mx-2"></button>
          <button className="mx-2"></button>
        </div>
        <div>
          <button className="mx-2 text-accent font-bold">SignUp</button>
          <button className="mx-2 text-accent font-bold">Login</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
