import { useEffect } from "react";
import { useState } from "react";
import { fetchDataVideoGames } from "../services/fetchDataVideogames";

export function useVideoGames(params = {}){
    
    const [listVideoGames, setListVideoGames] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const obtainVideoGames = async () => {
            try {
                const localState = JSON.parse(localStorage.getItem('gamesProd')) || []
                if(localState.length > 0){
                    setListVideoGames(localState)
                } else {
                    const dataListVideogames = await fetchDataVideoGames(params)
                    setListVideoGames(dataListVideogames)
                }
                setIsLoading(false)
            } catch (error) {
                setError('Error obtain list videogames:', error.message)
                setIsLoading(false)
            }
        }

        obtainVideoGames()
    }, [])

    const updateStockProduct = (gameCart) => { // Actualiza el stock del producto en caso de comprar uno
        setListVideoGames(prevGames => 
            prevGames.map(game => {
                if(game.name === gameCart.name){
                    const newStock = Math.max(0, game.stock - gameCart.amount)
                    return { ...game, stock: newStock }
                }
                return game
            })
        )
        
    }

    useEffect(() => {
        if(listVideoGames.length > 0){
            localStorage.setItem('gamesProd', JSON.stringify(listVideoGames))
        }
    }, [listVideoGames])

    console.log(listVideoGames)

    const restoreStock = async () => {
        localStorage.removeItem("gamesProd")
        try {
            const dataListVideogames = await fetchDataVideoGames(params)
            setListVideoGames(dataListVideogames)
            setIsLoading(false)
        } catch (error) {
            setError('Error obtain list videogames:', error.message)
        }

    }

    return {listVideoGames, isLoading, error, updateStockProduct, restoreStock}
}