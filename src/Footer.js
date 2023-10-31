import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
    return (
        <span className="font-link">
            <footer className="footer">
                <div className="footer_box">
                    <AiFillGithub /><a className="footer_a">Hello</a>
                    <a className="footer_a">Hello</a>
                    <a className="footer_a">Hello</a>
                </div>
                <div className="footer_box">
                    <a className="footer_a">text</a>
                </div>
            </footer>
        </span>
    )
}