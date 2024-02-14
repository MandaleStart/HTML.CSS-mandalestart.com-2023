const Home = () => {
    return (
      <div className="container">
        <h2>Bienvenido a Diego Ventura Automóviles</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Comprar Autos Usados</h5>
                <p className="card-text">Descubre nuestra amplia selección de autos usados y encuentra el vehículo perfecto para ti.</p>
                <a href="/comprar-usados" className="btn btn-primary">Ver Más</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Comprar Autos Nuevos</h5>
                <p className="card-text">Explora nuestra colección de autos nuevos y elige el modelo que se adapte a tus necesidades.</p>
                <a href="/comprar-nuevos" className="btn btn-primary">Ver Más</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Vender Tu Auto</h5>
                <p className="card-text">¿Quieres vender tu auto? Nosotros te ayudamos. Obtén una cotización justa para tu vehículo hoy mismo.</p>
                <a href="/vender" className="btn btn-primary">Ver Más</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;