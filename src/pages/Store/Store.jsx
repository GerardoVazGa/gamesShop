import { useState } from 'react';
import { ProductCard } from '../../components/ProductCardComponent/ProductCard.jsx';
import { useVideoGames } from '../../hooks/useVideogames.jsx'
import { Filter } from '../../components/FilterComponent/Filter.jsx';
import { useFilter } from '../../hooks/useFilters.jsx';
import { Pagination } from '../../components/PaginationComponent/Pagination.jsx';
import './Store.css'

export function Store() {
    const {listVideoGames, isLoading, error} = useVideoGames()
    const {handleFilters} = useFilter()
    const [currentPage, setCurrentPage] = useState(1)
    const [limit] = useState(6)

    const filterListVideogames = handleFilters(listVideoGames)

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
            <aside className='Filters'>
                <Filter />
            </aside>
            <div className="Products">
                {filterListVideogames
                    .map((game) => <ProductCard key={game.id} game={game} />)
                    .slice(indexInit, indexEnd)}
            </div>
            <footer className='Numeration'>
                <Pagination
                    currentPage={currentPage} // Página actual
                    limit={limit} // Número de elementos por página
                    listVideoGames={filterListVideogames} // Lista de videojuegos filtrada
                    setCurrentPage={setCurrentPage} // Función para actualizar la página actual
                />
            </footer>
        </div>
    );
}