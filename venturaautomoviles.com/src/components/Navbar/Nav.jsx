import './nav.css'
const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand ventura" href="/">Diego Ventura <p className='automoviles'>Automóviles</p></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item border-cat">
                <a className="nav-link border-cat" href="/">Inicio</a>
              </li>
              <li className="nav-item border-cat">
                <a className="nav-link" href="/nuevos">Autos Nuevos</a>
              </li>
              <li className="nav-item border-cat">
                <a className="nav-link" href="/usados">Autos Usados</a>
              </li>
              <li className="nav-item border-cat">
                <a className="nav-link" href="/contacto">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;