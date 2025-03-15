/* eslint-disable react/prop-types */

import { allSae, allBrands, allLiters } from "../assets/gnrlData"

const FilterSelector = ({ filters, onFilterChange }) => {
  return (
    <div className="filters">
      <select name="sae" value={filters.sae} onChange={onFilterChange}>
        <option value="">Select SAE</option>
        {allSae.map((sae) => (
          <option key={sae} value={sae}>
            {sae}
          </option>
        ))}
      </select>
      <select name="brand" value={filters.brand} onChange={onFilterChange}>
        <option value="">Select Brand</option>
        {allBrands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
      <select name="liters" value={filters.liters} onChange={onFilterChange}>
        <option value="">Select Format</option>
        {allLiters.map((liters)=>(
          <option key={liters} value={liters}>
            {liters}
          </option>
        ))}
      </select>
      
    </div>
    
  )
}

export default FilterSelector