import React from 'react'
import {  useContext, useEffect,} from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import {useParams } from "react-router-dom";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const params = useParams();
  const { state, dataApi } = useContext(ContextGlobal)
  
  
  const getDentist = async () => {
    await dataApi(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  }

  useEffect(() => {
    getDentist()

  }, [params])
  return (

    <>
      <div className="detail-container">
      <h1>Detail Dentist id  {state.data.id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      
                <div className="card-container">
                    <div className="card">
                        <div>
                        
                            <p>Nombre:{state.data.name}</p>
                            <p>Email:{state.data.email}</p>
                            <p>Telefono:{state.data.phone}</p>
                            <p>SitioWeb:{state.data.website}</p>
                        </div>
                    </div>
                </div>
            
      </div>
    </>
  )
}

export default Detail