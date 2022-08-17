import React from "react";
import ListingCard from "./ListingCard";


function ListingsContainer( { allListings }) {
  
  return (
    <main>
      <ul className="cards">
        {allListings.map((listing) => {
          return <ListingCard listing={listing} key={listing.id}/>
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
