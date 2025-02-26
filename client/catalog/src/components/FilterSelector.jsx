/* eslint-disable react/prop-types */

import { allSae, allBrands } from "../assets/gnrlData"

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
      <select name="litres" value={filters.litres} onChange={onFilterChange}>
        <option value="">Select Litres</option>
        <option value="1L">1L</option>
        <option value="5L">5L</option>
        <option value="10L">10L</option>
      </select>
    </div>
  );
};

export default FilterSelector;