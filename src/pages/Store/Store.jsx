import { useState } from 'react';
import { ProductCard } from '../../components/ProductCardComponent/ProductCard.jsx';
import { useVideoGames } from '../../hooks/useVideogames.jsx'
import './Store.css'

// import { Filter } from '../components/FiltersProduct/Filter';
// import { useFilter } from '../hooks/useFilters';
// import { NumbersPages } from '../components/NumberPages/NumbersPages';
// import 'Store.css';

export function Store() {
    const {listVideoGames, isLoading, error} = useVideoGames()
    // const {handleFilters} = useFilter()
    const [currentPage, setCurrentPage] = useState(1)
    const [limit, setLimit] = useState(6)

    const filterListVideogames = listVideoGames

    const indexInit = (currentPage - 1) * limit
    const indexEnd  = indexInit + limit

    if(isLoading){
        return <p>Loading...</p>
    }

    if(error){
        return <div>Error {error}</div>
    }

    return (
        <div className="Home">
            {/* <button onClick={restoreStoke}>Resetear stoke demo</button> */}
            {/* <aside className='Filters'>
                <Filter />
            </aside> */}
            <div className="Products">
                {filterListVideogames
                    .map((game) => <ProductCard key={game.id} game={game} />)
                    .slice(indexInit, indexEnd)}
            </div>
            {/* <footer className='Numeration'>
                <NumbersPages
                    currentPage={currentPage}
                    limit={limit}
                    listVideoGames={filterListVideogames}
                    setCurrentPage={setCurrentPage}
                />
            </footer> */}
        </div>
    );
}