const UsedCars = () => {
    // Supongamos que tienes una lista de autos usados
    const autosUsados = [
      { marca: 'Toyota', modelo: 'Corolla', año: 2018, precio: 15000 },
      { marca: 'Honda', modelo: 'Civic', año: 2017, precio: 14000 },
      { marca: 'Ford', modelo: 'Focus', año: 2016, precio: 12000 },
      // Agrega más autos usados según sea necesario
    ];
  
    return (
      <div className="container">
        <h2>Autos Usados</h2>
        <ul>
          {autosUsados.map((auto, index) => (
            <li key={index}>
              <h3>{auto.marca} {auto.modelo}</h3>
              <p>Año: {auto.año}</p>
              <p>Precio: ${auto.precio}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default UsedCars;