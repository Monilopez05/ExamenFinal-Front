import {  useContext, useEffect, useState} from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import {useParams } from "react-router-dom";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { getDentistaPorId, handleDentistas, state } = useContext(ContextGlobal);

  const themeClass = state.theme === 'dark' ? 'dark-theme' : 'light-theme';
  const { id } = useParams();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
      getDentistaPorId(id).then((datos) => {
          handleDentistas(datos);
          setLoading(false);
      });
  }, []);
  return (

    <>
      <div className={`detail-container ${themeClass}`}>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      {!loading && (
                <div className="card-container">
                    <div className="card">
                        <div>
                            <p>{state.denstistas.name}</p>
                            <p>{state.denstistas.email}</p>
                            <p>{state.denstistas.phone}</p>
                            <p>{state.denstistas.website}</p>
                        </div>
                    </div>
                </div>
            )}
      </div>
    </>
  )
}

export default Detail