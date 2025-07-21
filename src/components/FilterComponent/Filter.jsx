import { useFilter } from "../../hooks/useFilters";
import './Filter.css'

export function Filter() {
    const {filters, setFilters} = useFilter()

    const platforms = [
        "All",
        "Xbox Series X/S",
        "Playstation 5",
        "Nintendo Switch",
        "PC",
    ]

    const rangePrice = [
        {label: 'All', min:0, max: Infinity},
        {label: '0 - 300', min:0, max: 300},
        {label: '300 - 500', min:300, max: 500},
        {label: '500 - 800', min:500, max: 800},
        {label: 'more 800', min:800, max: Infinity}
    ]

    const genres = [
        "All",
        "Action",
        "Adventure",
        "RPG",
        "Shooter",
        "Strategy",
        "Sports",
        "Simulation",
        "Puzzle",
        "Horror",
        "Platformer",
        "Racing",
        "Fighting",
        "Indie",
        "Multiplayer",
        "Open World",
    ]

    return (
      <div className="filters-content">
            <section className="filter-platform">
                <h3>Platform</h3>
                {platforms.map((platform, index) => (
                    <label key={index}>
                        <input
                            type="radio"
                            value={platform}
                            checked={filters.platform === platform}
                            onChange={(e) =>
                                setFilters({ ...filters, platform: e.target.value })
                            }
                        />
                        {platform}
                    </label>
                ))}
            </section>

            <section className="filter-price">
                <h3>Price</h3>
                {rangePrice.map((price, index) => (
                    <label key={index}>
                        <input
                            type="radio"
                            value={rangePrice}
                            checked={
                                price.min === filters.price.min &&
                                price.max === filters.price.max
                            }
                            onChange={() => setFilters({ ...filters, price: { min: price.min, max: price.max } })}

                        />
                        {price.label}
                    </label>
                ))}
            </section>

            <section className="filter-platform">
                <h3>Genre</h3>
                {genres.map((genre, index) => (
                    <label key={index}>
                        <input
                            type="radio"
                            value={genre}
                            checked={filters.genres === genre}
                            onChange={(e) =>
                                setFilters({ ...filters, genres: e.target.value })
                            }
                        />
                        {genre}
                    </label>
                ))}
            </section>
      </div>
    )
}
