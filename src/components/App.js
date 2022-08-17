import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(data => {
      setListings(data)
    })
  }, [])

const allListings = listings
  // const displayedListings = listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()))

  function handleChange(e) {
    setSearchValue(searchValue => e.target.value)
    
  }

  function handleSubmit(e) {
    e.preventDefault();
   setListings(displayedListings)
  }

  const displayedListings = allListings.filter(listing => listing.description.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <div className="app">
      <Header searchValue={searchValue} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <ListingsContainer allListings={displayedListings} />
    </div>
  );
  }
  

  
export default App;
