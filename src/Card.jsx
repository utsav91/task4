import React from 'react'

export default function Card({listing, refProp}) {
  const name = listing.propertyMetadata.propertyName;
  const sleeps = listing.sleeps;
  const bedRooms = listing.bedrooms;
  const bath = listing.bathrooms.full;
  const image = listing.images[0]["c6_uri"];
  const altText = listing.images[0].altText;
  return (
    <div id={listing.listingId} ref={refProp} className="card">
      <img src={image} alt={altText} className="card__img" />
      <div className="card__info">
        <div>{name}</div>
        <div className="card__info__ameneties">
          <div className='card__ameneties--item'>{bedRooms} br</div>
          <div className='card__ameneties--item'>{bath} ba</div>
          <div className='card__ameneties--item'>sleeps {sleeps}</div>
        </div>
      </div>
    </div>
  );
}
