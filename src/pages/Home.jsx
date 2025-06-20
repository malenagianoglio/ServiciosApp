import { Link } from "react-router-dom";
import "../home.css";

function Home() {
  return (
    <main>
      <div className="page">
        <div className="hero-container">
          <div className="hero">
            <h1>Encuentra profesionales de confianza cerca de ti</h1>
            <p>
              Plomería, electricidad, costura y muchos servicios más a un click de
              distancia
            </p>
          </div>
          <form className="search-form">
            <div className="search-field">
              <p>¿Qué servicio necesitas?</p>
              <input
                type="text"
                placeholder="Plomería, electricidad, costura..."
              />
            </div>
            <div className="search-field">
              <p>Categoría</p>
              <select className="form-select">
                <option value="">Selecciona una categoría</option>
                <option value="plomeria">Plomería</option>
                <option value="electricidad">Electricidad</option>
                <option value="costura">Costura</option>
                <option value="limpieza">Limpieza</option>
                <option value="jardineria">Jardinería</option>
              </select>
            </div>
            <div className="search-field">
              <p>¿Dónde?</p>
              <input type="text" placeholder="Tu localidad"/>
            </div>
            <div className="search-button">
              <Link to="#" className="btn">Buscar</Link>
            </div>
          </form>
        </div>

        <div className="categories-container">
          <h2>Categorías populares</h2>
          <div className="categories-grid">
            <div className="category-card">
              <i className="bi bi-tools icon"></i>
              <p>Plomería</p>
            </div>
            <div className="category-card">
              <i className="bi bi-lightning-charge-fill icon"></i>
              <p>Electricidad</p>
            </div>
            <div className="category-card">
              <i className="bi bi-scissors icon"></i>
              <p>Costura</p>
            </div>
            <div className="category-card">
              <i className="bi bi-bucket-fill icon"></i>
              <p>Limpieza</p>
            </div>
            <div className="category-card">
              <i className="bi bi-flower3 icon"></i>
              <p>Jardinería</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
