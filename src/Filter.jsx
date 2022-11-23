import React from 'react'
import { Selector } from './Selector';

export const Filter = ({ setFilters, applyFilters }) => {
  const handleApply = () => {
    applyFilters();
  }
  return (
    <div className='filters'>
      <Selector title='Bedrooms' initMin={0} initMax={5} setFilters={setFilters}/>
      <Selector title='Bathrooms' initMin={0} initMax={4} setFilters={setFilters}/>
      <Selector title='Sleeps' initMin={1} initMax={20} setFilters={setFilters} />
      <button onClick={handleApply}>Apply</button>
    </div>
  )
}
