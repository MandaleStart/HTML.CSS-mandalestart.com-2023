const Footer = () => {
    return (
      <footer className="footer bg-dark text-white fixed">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Redes Sociales</h5>
              <ul className="list-unstyled">
                <li><a href="URL_DE_FACEBOOK"><i className="fab fa-facebook"></i> Facebook</a></li>
                <li><a href="URL_DE_INSTAGRAM"><i className="fab fa-instagram"></i> Instagram</a></li>
                <li><a href="URL_DE_TIKTOK"><i className="fab fa-tiktok"></i> TikTok</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Ubicación</h5>
              <p>Solís de Mataojo, Lavalleja, Uruguay</p>
            </div>
            <div className="col-md-4">
              <h5>Horarios y Contacto</h5>
              <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
              <p>Sábados: 9:00 AM - 1:00 PM</p>
              <p>Teléfono: +598 123456789</p>
              <p>Email: contacto@diegoventuraautomoviles.com</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;