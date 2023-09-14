import React from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [datosformulario, setDatosFormulario] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState(false);
  
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDatosFormulario({ ...datosformulario, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (datosformulario.nombre.length < 5 || !isValidEmail(datosformulario.email)) {
      setError('Por favor verifique su información nuevamente');
    } else {
      setMensaje(true);
      setError('');
    }
  };

  const isValidEmail = (email) => {
     return true; 
  };

 
return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre Completo:</label>
          <input
            type="text"
            name="nombre"
            value={datosformulario.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={datosformulario.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p>{error}</p>}
      {mensaje && <p>Gracias {datosformulario.nombre}, te contactaremos cuando antes vía mail</p>}
    </div>
  );
};

export default Form;
