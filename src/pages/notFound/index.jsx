import { Link } from "react-router-dom";

export default function NotFound() {

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Page Not Found</h1>
            <p>A pagina que você está procurando não existe.</p>

            <Link to="/"><h3>Voltar</h3></Link>
        </div>
    );
}