import {  useContext, useEffect, useState} from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import {useParams } from "react-router-dom";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { getDentistaPorId, handleDentistas, state } = useContext(ContextGlobal);
  const [loading, setLoading] = useState(true);
  
  const { id } = useParams();
  


  useEffect(() => {
      getDentistaPorId(id).then((datos) => {
          handleDentistas(datos);
          setLoading(false);
      });
  }, []);
  return (

    <>
      <div className="detail-container">
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      {!loading && (
                <div className="card-container">
                    <div className="card">
                        <div>
                            <p>{state.dentistas.name}</p>
                            <p>{state.dentistas.email}</p>
                            <p>{state.dentistas.phone}</p>
                            <p>{state.dentistas.website}</p>
                        </div>
                    </div>
                </div>
            )}
      </div>
    </>
  )
}

export default Detail