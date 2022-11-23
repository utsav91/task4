const check = (min, max, val) => {
  if(min <= val && max >= val) return true;
  return false
}


export const filterData = (listings, filters) => {
  const minBath = filters.bathrooms.min;
  const maxBath = filters.bathrooms.max;
  const minBed = filters.bedrooms.min;
  const maxBed = filters.bedrooms.max;
  const minSleeps = filters.sleeps.min;
  const maxSleeps = filters.sleeps.max;
  return listings.filter(listing => {
    const bath = listing.bathrooms.full;
    const bed = listing.bedrooms;
    const sleeps = listing.sleeps;
    return check(minBath, maxBath, bath) && check(minBed, maxBed, bed) && check(minSleeps, maxSleeps, sleeps)
  })
  // return listings;
}

