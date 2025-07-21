import "./CarouselProd.css";
import { useVideoGames } from "../../hooks/useVideogames";
import { ProductCard } from "../ProductCardComponent/ProductCard";
import {useMemo, useRef, useState, useEffect } from "react";

export function CarouselProd({ platform }) {
    const { listVideoGames } = useVideoGames()
    const scrollRef = useRef(null)
    const itemRefs = useRef([])
    const [itemWidth, setItemWidth] = useState(0)
    const prodLimitShow = 11

    const filterListLimited = useMemo(() => {
        return listVideoGames.filter((game) => game.platform === platform).slice(0, prodLimitShow)
    }, [listVideoGames, platform])

    useEffect(() => {
        if(!itemRefs.current.length) return

        const updateItemsWidth = () => {
            if(itemRefs.current[0]){
                const width = itemRefs.current[0].offsetWidth
                const gap = parseInt(getComputedStyle(scrollRef.current).gap) || 0
                console.log("Width|Gap: " + (width + gap)) // width item (180px) y gap del contenedor flex en items (15px)
                setItemWidth(width + gap)
            }
        }

        const resizeObserver = new ResizeObserver(updateItemsWidth)

        if(itemRefs.current[0]){
            console.log("Observing item width: ", itemRefs.current[0])
            resizeObserver.observe(itemRefs.current[0]) //Observa el primer elemento para calcular su ancho en caso de que cambie el tamaño de la ventana
            console.log(resizeObserver.observe(itemRefs.current[0]) )
        }

        updateItemsWidth()

        return () => resizeObserver.disconnect()
    }, [filterListLimited])

    const handleScrollNext= () => {
        // setCurrentIndex((prev) => Math.min(prev + 1, filterListLimited.length))
        console.log('Hie:', itemWidth)
        const {clientWidth, scrollLeft, scrollWidth} = scrollRef.current;
        console.log("Scroll Left:", scrollLeft, "Scroll Width:", scrollWidth, "Client Width:", clientWidth)
        const visibleItems = Math.max(1, Math.floor(clientWidth / itemWidth)) // Asegura que al menos se muestre un item
        const isNearEnd = scrollLeft >= scrollWidth - clientWidth - 15 // 15px es el gap entre los items
        if(isNearEnd) {
            scrollRef.current?.scrollTo({
                left: 0,
                behavior: 'smooth'
            })
        } else {
            scrollRef.current?.scrollBy({
                left: visibleItems  * itemWidth,
                behavior: 'smooth'
            })
        }
    }

    const handleGoPrevious= () => {
        const {clientWidth, scrollLeft, scrollWidth} = scrollRef.current;
        console.log("Hola", scrollLeft)
        const visibleItems = Math.floor(clientWidth / itemWidth) || 1
        const isNearStart = scrollLeft <= 15
        const lastPage = scrollWidth - clientWidth
        if(isNearStart) {
            scrollRef.current?.scrollTo({
                left: lastPage,
                behavior: 'smooth'
            })
        } else {
            scrollRef.current?.scrollBy({
                left: visibleItems  * -itemWidth,
                behavior: 'smooth'
            })
        }
    }


    if (!filterListLimited.length) {
        return <p>No hay nada por mostrar</p>
    }

    return (
        <div className="custom-carousel">
            <button onClick={handleGoPrevious}>{'<'}</button>
            <div ref={scrollRef} className="carousel-wrapp">
                {filterListLimited.map((game, index) => (
                        <div key={game.id} className="carousel-slide-prod"  ref={el => itemRefs.current[index] = el}>
                            <ProductCard game={game} />
                        </div>
                ))}
            </div>
            <button onClick={handleScrollNext}>{'>'}</button>
        </div>
    );
}
