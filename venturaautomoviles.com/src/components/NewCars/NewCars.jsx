const NewCars = () => {
    // Supongamos que tienes una lista de autos 0km
    const autos0km = [
      { marca: 'Chevrolet', modelo: 'Onix', año: 2022, precio: 20000 },
      { marca: 'Volkswagen', modelo: 'Gol', año: 2023, precio: 22000 },
      { marca: 'Ford', modelo: 'Fiesta', año: 2021, precio: 18000 },
      // Agrega más autos 0km según sea necesario
    ];
  
    return (
      <div className="container">
        <h2>Autos 0km</h2>
        <ul>
          {autos0km.map((auto, index) => (
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
  
  export default NewCars;