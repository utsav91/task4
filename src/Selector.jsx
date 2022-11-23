import React, { useState, useEffect } from 'react'

export const Selector = ({ title, initMin, initMax, setFilters }) => {
  const [min, setMin] = useState(initMin)
  const [max, setMax] = useState(initMax)
  const handleDecrementMin = () => {
    setMin(prev => prev-1);
  }
  const handleIncrementMin = () => {
    setMin(prev => prev+1);
  }
  const handleDecrementMax = () => {
    setMax(prev => prev-1);
  }
  const handleIncrementMax = () => {
    setMax(prev => prev+1);
  }

  useEffect(() => {
    setFilters(prev => ({...prev, [title.toLowerCase()]: {
      min,
      max
    }}))
  }, [min, max])
  
  return (
    <div className='selector'>
      <div>{title}</div>
      <div>
        <div className='selector__cta'>
          <div>{min}</div>
          <div> Min{title.toLowerCase()}</div>
          <button onClick={handleDecrementMin} disabled={min < initMin + 1 }>-</button>
          <button onClick={handleIncrementMin} disabled={min > initMax - 1 }>+</button>
        </div>
        <div className='selector__cta'>
          <div>{max}</div>
          <div> Max{title.toLowerCase()}</div>
          <button onClick={handleDecrementMax} disabled={max < initMin + 1 }>-</button>
          <button onClick={handleIncrementMax} disabled={max > initMax - 1 }>+</button>
        </div>
      </div>
    </div>
  );
}
