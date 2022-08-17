import React, { useState } from "react";

function ListingCard( { listing, key }) {

  const [isFavorited, setIsFavorited] = useState(false)

  function handleClick(e){
    setIsFavorited(isFavorited => !isFavorited)
  }

  function handleDelete(e){
    fetch(`http://localhost:6001/listings/:${key}` , {
    method: 'DELETE',
    })
    .then(res => res.json()) 
    .then(res => console.log(res))
     }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button className="emoji-button favorite active" onClick={handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
