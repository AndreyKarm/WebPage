import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
        <span className="font-link">
            <nav className="nav">
                <Link to="/" className="site-title">
                    АТБ Inc. 💸
                </Link>
                <ul>
                    <CustomLink to="/pricing">Pricing</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                </ul>
            </nav>
        </span>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}