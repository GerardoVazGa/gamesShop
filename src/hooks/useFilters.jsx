import { useContext } from 'react';
import { FilterContext } from '../Context/FilterContext.jsx';

export function useFilter(){
    const {filters, setFilters} = useContext(FilterContext)

    console.log("fiLTER g;",filters)

    const handleFilters = (gameList) => {
        console.log("gameList", gameList)
        return gameList.filter(game => {
            return (filters.platform === 'All' || filters.platform === game.platform) && (game.price >= filters.price.min &&  game.price <= filters.price.max) && (filters.genres === 'All' || game.genres.some(genre => genre.name === filters.genres))
        })
    }

    return {filters, handleFilters, setFilters}
}