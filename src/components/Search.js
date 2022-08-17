import React from "react";

function Search( { searchValue, handleChange, handleSubmit }) {
  // const [searchValue, setSearchValue] = useState('')


  // function handleChange(e) {
  //   setSearchValue(searchValue => e.target.value)
  // }

  // const displayedListings = allListings.filter(listing => listing.description.toLowerCase().includes(searchValue.toLowerCase()))

 

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={handleChange}
        value={searchValue}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
