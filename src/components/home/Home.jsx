import { Link } from "react-router-dom"
import './Home.css'

const Home = () => {
    return (
        <>
          <div className="main-container">
            <h1>Hola, Bienvenido a Crypto Market</h1>
            <p>Cónoce las 100 criptos más usadas</p>
            <Link to="/criptomonedas">Ver criptomonedas</Link>
					</div>
        </>
    )
}

export default Home