import './App.css';
import { Wrapper } from "@googlemaps/react-wrapper";
import React, { useState } from 'react';
import { Map } from './Map';
import { Marker } from './Marker'
import { mockListings } from './mock';
import { LeftNav } from './LeftNav';
import { Filter } from './Filter';
import { filterData } from './helper';


const initialFitlers = {
  bedrooms:{
    min: 0,
    max: 5
  },
  bathrooms: {
    min: 0,
    max: 4
  },
  sleeps: {
    min: 1,
    max: 20
  }
}

function App() {
  const [center, setCenter] = useState({ lat: 41.87432482982015, lng: -87.63778142708314 });
  const [zoom, setZoom] = useState(10);
  const [listings, setListings] = useState(filterData(mockListings, initialFitlers))
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState(initialFitlers)
  const handleClick = (event, clickedRef, id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    
  }
  const applyFilters = () => {
    setListings(filterData(mockListings, filters))
  }
  

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div className='left-container'>
      <LeftNav listings={listings} setShowFilter={setShowFilter}/>
      {showFilter && <Filter style={{ flexGrow: "1", height: "90vh" }} setFilters={setFilters} applyFilters={applyFilters}/>}
      </div>

      <Wrapper apiKey={""}>
        <Map center={center} onClick={() => {}} onIdle={() => {}} zoom={zoom} style={{ flexGrow: "1", height: "100vh", width:"100vw" }}>
          {listings.map((listing, i) => {
            const position = {
              lat: listing.geoCode.latitude,
              lng: listing.geoCode.longitude,
            };            
            return (<Marker key={listing.listingId} position={position} onClick={handleClick} id={listing.listingId}/>);
          })}
        </Map>
      </Wrapper>
    </div>
  );
}

export default App;
