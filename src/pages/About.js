import "./pages.css"
import videoFile from '../firefox.mp4';

export default function About() {
    return (
        <div>
            <div>
                <h1 className="h1_text">About</h1>
            </div>
            <div>
                <a className="a_text">
                  I love programin ❤️
                </a>
            </div>
            <div className="videoStyles">
                <video width="30%" height="100%" autoPlay loop muted>
                    <source src={videoFile} type="video/mp4" />
                </video>
            </div>
            <div>
                <h1 className="h1_main_text">
                    <span className="h1_text_glow" style={{ color: '#ff0000' }}>АТБ<br /></span>
                    <a className="h1_text_glow" style={{ color: '#ff0000' }}>А</a>бама - 
                    <a className="h1_text_glow" style={{ color: '#ff0000' }}>Т</a>рамп - 
                    <a className="h1_text_glow" style={{ color: '#ff0000' }}>Б</a>айден
                </h1>
                <a className="a_main_text">
                    Тестовий текст. 🍕
                </a>
            </div>
        </div>
    )
}