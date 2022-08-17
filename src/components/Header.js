import React from "react";
import Search from "./Search";


function Header( { searchValue, handleChange, handleSubmit }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchValue={searchValue} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </header>
  );
}

export default Header;
