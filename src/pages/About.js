import "./pages.css"

export default function About() {
    return (
    <span className="font-link">
        <div className="container">
            <h1 className="h1_text">About</h1>
        </div>
        <div>
            <a className="a_text">
              I love programin ❤️
            </a>
        </div>
        <div className="video-container">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=W9YfOdAuvWYCBRiR"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        <div className="h1_text_glow" style={{color: '#ff0000'; font-size}}>АТБ</div>
        <div className="container">
            <h1 className="h1_main_text">
                <a className="h1_main_text_underline">А</a>бама - 
                <a className="h1_main_text_underline">Т</a>рамп - 
                <a className="h1_main_text_underline">Б</a>айден
            </h1>
            <a className="a_main_text">
                Наша компанія займається поставкою продуктів харчування та гігієни в кожну точки країни.
            </a>
        </div>
    </span>
    )
}