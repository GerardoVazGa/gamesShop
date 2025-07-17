import { useEffect, useState } from "react"
import './Carousel.css'

export function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    const imagesPath = ['destiny2.avif', 'EASPORTSFC25.avif', 'fallout4.avif', 'gtaV.webp', 'thewitcher3.avif']

    useEffect(() => {
        if(isPaused){
            return 
        }
        const carouselId = setInterval(() => {
            setCurrentIndex(c => (c + 1) % imagesPath.length) // Mantinene la actualizacion del indice hasta llegar al limite y lo reinicia a su punto de inicio
            //Seria como un reinicio circular del índice
        }, 6000)

        return () => clearInterval(carouselId)
    }, [isPaused, imagesPath.length])

    const handleNextImage = () => {
        setCurrentIndex(c => (c + 1) % imagesPath.length)
    }

    const handlePrevImage = () => {
        setCurrentIndex(c => (c - 1 + imagesPath.length) % imagesPath.length)
    }


    return (
        <div
            className="carousel-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="carousel-slide">
                {imagesPath.map((image, index) => (
                    <img
                        key={image}
                        className={`carousel-image ${index === currentIndex ? "active" : ""}`}
                        src={`/images/${image}`}
                        alt=""
                    />
                ))}
            </div>
            <section className="carousel-buttons">
                <button onClick={handlePrevImage}>{"<"}</button>
                <button onClick={handleNextImage}>{">"}</button>
            </section>
            <section className="carousel-dots-container">
                {imagesPath.map((_, index) => (
                    <button
                        className={`carousel-dots ${index === currentIndex ? "active" : "" }`}
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </section>
        </div>
    )
}