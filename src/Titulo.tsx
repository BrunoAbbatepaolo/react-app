function Titulo() {
  const nombre = "Chanchito Feliz - Titulo";
  if (nombre) {
    return <h1>Hola {nombre}</h1>;
  }
  return <h1>Hola Mundo</h1>; //Codigo jsx -> React.createElement
}

export default Titulo;
