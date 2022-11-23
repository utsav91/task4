import React from 'react';
import Card from './Card';

export const LeftNav = React.forwardRef((props, ref) => {
  const handleClick = () => {
    props.setShowFilter(s => !s)
  }
  return (
    <div className='list-container'>
      <button onClick={handleClick}>Filters</button>
      <div className='list'>{
        props.listings.map(listing => {
          return <Card key={listing.listingId} listing={listing} refProp={ref}/>
        })
        }</div>
    </div>
  )
})
