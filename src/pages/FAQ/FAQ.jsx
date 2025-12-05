import { useState } from 'react'
import './FAQ.css'

export function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null)

    const faqs = [
        {
            id: 1,
            question: "¿Cuáles son los métodos de pago disponibles?",
            answer: "Aceptamos tarjetas de crédito (Visa, Mastercard), transferencia bancaria, PayPal y billeteras digitales. Todos nuestros pagos son seguros y encriptados."
        },
        {
            id: 2,
            question: "¿Cuánto tiempo demora el envío?",
            answer: "El envío estándar demora 3-5 días hábiles. Ofrecemos envío express (1-2 días) por un costo adicional. Puedes rastrear tu pedido en tiempo real desde tu cuenta."
        },
        {
            id: 3,
            question: "¿Qué debo hacer si recibo un producto dañado?",
            answer: "Contáctanos inmediatamente con fotos del producto dañado. Te ofreceremos un reemplazo gratuito o reembolso completo, sin preguntas adicionales."
        },
        {
            id: 4,
            question: "¿Cuál es la política de devoluciones?",
            answer: "Aceptamos devoluciones dentro de 30 días desde la compra si el producto está sin abrir y en perfecto estado. Los costos de envío de devolución corren por parte del cliente, excepto en caso de error nuestro."
        },
        {
            id: 5,
            question: "¿Cómo puedo crear una cuenta?",
            answer: "Haz clic en 'Registrarse' en la esquina superior derecha. Completa tus datos personales y verifica tu email. ¡Listo! Ya puedes comenzar a comprar."
        },
        {
            id: 6,
            question: "¿Son todos los juegos originales?",
            answer: "Sí, todos nuestros productos son 100% originales y auténticos. Trabajamos directamente con distribuidores autorizados. Cada producto tiene garantía del fabricante."
        },
        {
            id: 7,
            question: "¿Puedo cambiar mi pedido después de haberlo realizado?",
            answer: "Si contactas dentro de 1 hora de la compra, podemos cambiar la orden. Después de ese tiempo, el pedido está en proceso de envío y no se puede modificar."
        },
        {
            id: 8,
            question: "¿Hay descuentos para compras en cantidad?",
            answer: "Sí, ofrecemos descuentos progresivos para compras en cantidad. Contáctanos directamente en info@gamezone.com para solicitar una cotización personalizada."
        },
        {
            id: 9,
            question: "¿Cómo sé si un juego es compatible con mi plataforma?",
            answer: "Cada producto tiene especificaciones claras indicando las plataformas soportadas. Puedes filtrar por plataforma en nuestra tienda para ver solo juegos compatibles."
        },
        {
            id: 10,
            question: "¿Ofrecen tarjeta de regalo?",
            answer: "Sí, ofrecemos tarjetas de regalo digitales e impresas de cualquier valor. Perfectas para obsequiar. Contáctanos para más detalles."
        }
    ]

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <div className="faq-container">
            <div className="faq-header">
                <h1>Preguntas Frecuentes</h1>
                <p className="faq-subtitle">Encuentra respuestas a las preguntas más comunes</p>
            </div>

            <div className="faq-content">
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq.id}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <span className="faq-icon">
                                    {activeIndex === index ? '−' : '+'}
                                </span>
                            </div>
                            {activeIndex === index && (
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="faq-sidebar">
                    <div className="faq-card">
                        <h3>¿No encontraste tu pregunta?</h3>
                        <p>Nuestro equipo de soporte está listo para ayudarte.</p>
                        <button className="faq-button">Contactar Soporte</button>
                    </div>

                    <div className="faq-card contact-card">
                        <h3>Información de Contacto</h3>
                        <ul className="contact-list">
                            <li>
                                <strong>Email:</strong>
                                <a href="mailto:info@gamezone.com">info@gamezone.com</a>
                            </li>
                            <li>
                                <strong>Teléfono:</strong>
                                <a href="tel:+34123456789">+34 (123) 456-7890</a>
                            </li>
                            <li>
                                <strong>Horario:</strong>
                                <span>Lun - Vie: 9:00 AM - 6:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
