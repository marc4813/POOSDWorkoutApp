import {Link} from 'react-router-dom'

const Navbar = () => {

    return(
        <header>
            <div className="container">
                <Link to ="/">
                    <h1>
                        Workout Buddy
                    </h1>
                </Link>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar