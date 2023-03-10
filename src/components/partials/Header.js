import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <nav>
                <Link to="/">Go to Home Page</Link>{' | '}
                <Link to="/menu">See Our Menu</Link>{' | '}
                <Link to="/contact">Contact Us</Link>{' | '}
                <Link to="/about">About Us</Link>
            </nav>
        </>
    )
}