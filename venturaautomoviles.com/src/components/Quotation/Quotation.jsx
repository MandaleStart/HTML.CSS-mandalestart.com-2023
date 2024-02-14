import React, { useState } from 'react';

const Quotation = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    marca: '',
    modelo: '',
    year: '',
    kilometraje: '',
    fotos: [],
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    setFormData({
      ...formData,
      fotos: files
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías enviar los datos del formulario a través de una petición HTTP (por ejemplo, con fetch())
    console.log(formData);
    // Luego de enviar la cotización, podrías mostrar un mensaje de éxito o redirigir a otra página
  };

  return (
    <div className="container">
      <h2>Formulario de Cotización</h2>
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
          <input type="tel" className="form-control" name="telefono" value={formData.telefono} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Marca del vehículo:</label>
          <input type="text" className="form-control" name="marca" value={formData.marca} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Modelo y Versión:</label>
          <input type="text" className="form-control" name="modelo" value={formData.modelo} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Año:</label>
          <input type="text" className="form-control" name="año" value={formData.año} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Kilometraje:</label>
          <input type="text" className="form-control" name="kilometraje" value={formData.kilometraje} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Suba 5 fotos (max.1MB cada una):</label>
          <input type="file" className="form-control-file" name="fotos" accept=".jpg, .jpeg, .png, .gif" multiple onChange={handleFileChange} required />
        </div>
        <div className="form-group">
          <label>Mensaje complemento (opcional):</label>
          <textarea className="form-control" name="mensaje" value={formData.mensaje} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Enviar Cotización</button>
      </form>
    </div>
  );
};

export default Quotation;