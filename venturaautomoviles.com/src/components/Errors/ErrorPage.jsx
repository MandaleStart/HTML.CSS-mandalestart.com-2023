import './ErrorPage.css'; 
const ErrorPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 error-container">
          <h1 className="error-heading">Error 404 - Página no encontrada</h1>
          <p className="error-message">¡Ups! Parece que la página que estás buscando no existe.</p>
          <p className="error-message">Por favor, verifica la URL o vuelve a la <a href="/">página de inicio</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;