import './About.css'

export function About() {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>Sobre Nosotros</h1>
                <p className="about-subtitle">Tu tienda gaming de confianza</p>
            </div>

            <section className="about-mission">
                <div className="about-content">
                    <h2>Nuestra Misión</h2>
                    <p>
                        En GameZone, nos dedicamos a proporcionar la mejor experiencia de compra 
                        en videojuegos. Nuestro objetivo es ser tu tienda de confianza, ofreciendo 
                        una amplia selección de títulos para todas las plataformas, precios competitivos 
                        y un servicio al cliente excepcional.
                    </p>
                </div>
            </section>

            <section className="about-vision">
                <div className="about-content">
                    <h2>Nuestra Visión</h2>
                    <p>
                        Buscamos ser la plataforma gaming número uno en la región, reconocida por 
                        nuestra calidad, variedad y compromiso con la satisfacción del cliente. 
                        Queremos que cada jugador encuentre exactamente lo que busca en un solo lugar.
                    </p>
                </div>
            </section>

            <section className="about-values">
                <h2>Nuestros Valores</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <h3>Calidad</h3>
                        <p>Productos auténticos y garantizados de los mejores fabricantes.</p>
                    </div>
                    <div className="value-card">
                        <h3>Confianza</h3>
                        <p>Transparencia total en precios y políticas de compra.</p>
                    </div>
                    <div className="value-card">
                        <h3>Innovación</h3>
                        <p>Constantemente actualizando nuestro catálogo con los últimos títulos.</p>
                    </div>
                    <div className="value-card">
                        <h3>Atención</h3>
                        <p>Servicio al cliente disponible para resolver tus dudas.</p>
                    </div>
                </div>
            </section>

            <section className="about-team">
                <h2>Por qué Elegir GameZone</h2>
                <ul className="features-list">
                    <li>Amplio catálogo con más de 500 títulos disponibles</li>
                    <li>Precios competitivos y ofertas exclusivas</li>
                    <li>Envío rápido y seguro a todo el país</li>
                    <li>Política de devolución flexible</li>
                    <li>Soporte técnico especializado</li>
                    <li>Comunidad gaming activa y comprometida</li>
                </ul>
            </section>

            <section className="about-contact">
                <h2>Contacto</h2>
                <div className="contact-info">
                    <p><strong>Email:</strong> info@gamezone.com</p>
                    <p><strong>Teléfono:</strong> +34 (123) 456-7890</p>
                    <p><strong>Horario de atención:</strong> Lunes a Viernes 9:00 AM - 6:00 PM</p>
                </div>
            </section>
        </div>
    )
}
