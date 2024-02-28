import { Link } from "react-router-dom";
export default function Default({ children }) {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Inicio sesión</Link>
                        </li>
                        <li>
                            <Link to="/signup">Registrarse</Link>
                        </li>
                    </ul>
                </nav>

            </header>

            <main>{ children }</main>
        </>
    );
}