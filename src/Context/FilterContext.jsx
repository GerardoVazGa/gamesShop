import { createContext } from 'react';
import { useState } from 'react';

export const FilterContext = createContext();

export function FilterProvider({children}) {
    const [filters, setFilters] = useState({
        platform: 'All',
        price: {min: 0, max: Infinity}
    });

    return (
        <FilterContext.Provider value={{filters, setFilters}}>
            {children}
        </FilterContext.Provider>
    );
}