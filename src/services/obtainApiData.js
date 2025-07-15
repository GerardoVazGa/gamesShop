import axios from 'axios'

const BASE_URL = 'https://api.rawg.io/api'

export const  getApiData = async (params = {}) => {
    try {
        let allResults = []
        for(let i = 1; i <= 5; i++){
            const response = await axios.get(`${BASE_URL}/games`, {
                params: {
                    key: import.meta.env.VITE_API_KEY,
                    page: i,
                    page_size: 40,
                    ...params
                }
            })

            allResults.push(...response.data.results)

            console.log(allResults)
        }
        return allResults
    } catch (error) {
        throw new Error('Error:', error.message)
    }
}
