import { useContext } from 'react';
import { FilterContext } from '../Context/FilterContext.jsx';

export function useFilter(){
    const {filters, setFilters} = useContext(FilterContext)

    const handleFilters = (gameList) => {
        return gameList.filter(game => {
            return (filters.platform === 'All' || filters.platform === game.platform) && (game.price >= filters.price.min &&  game.price <= filters.price.max)
        })
    }

    return {filters, handleFilters, setFilters}
}