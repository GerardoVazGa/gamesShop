import { getApiData } from "../services/obtainApiData"

export const fetchDataVideoGames = async (params = {}) => {
    try {
        const dataVideogames = await getApiData(params)
        const platforms = ['Xbox Series X/S', 'Playstation 5', 'Nintendo Switch', 'PC']
        const storeDataVideogame = dataVideogames.map(dataGame => {
             return { id: dataGame.id, 
                    name: dataGame.name, 
                    imageGame: dataGame.background_image, 
                    platform: platforms[dataGame.id % platforms.length], // Obtiene el indice dependiendo de su id, si el residuo es mayor que 4 se toma el valor de indice 4
                    price: (dataGame.id % 1200) + 1, // Se aplica lo mismo como el indice de la plataforma, esto es para que no haya inconcistencias en estos datos anteriores
                    stock: (dataGame.id % 45) + 1,
                    genres: dataGame.genres
                }
        })

        return storeDataVideogame
    } catch (error) {
        throw new Error('Error:', error.message)
    }
}