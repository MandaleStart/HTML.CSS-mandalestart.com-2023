import { useState } from "react";
const Contact = () => {
    const [formData, setFormData] = useState({
      nombre: '',
      correo: '',
      telefono: '',
      mensaje: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí podrías enviar los datos del formulario a través de una petición HTTP (por ejemplo, con fetch())
      console.log(formData);
      // Luego de enviar el mensaje, podrías mostrar un mensaje de éxito o redirigir a otra página
    };
  
    return (
      <div className="container">
        <h2>Contacto</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Tu nombre:</label>
            <input type="text" className="form-control" name="nombre" value={formData.nombre} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Tu correo electrónico:</label>
            <input type="email" className="form-control" name="correo" value={formData.correo} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Tu teléfono:</label>
            <input type="tel" className="form-control" name="telefono" value={formData.telefono} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Mensaje:</label>
            <textarea className="form-control" name="mensaje" value={formData.mensaje} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
        </form>
      </div>
    );
  };
  
  export default Contact;