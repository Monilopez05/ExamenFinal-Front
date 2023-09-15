import React, {useContext, useEffect, useState} from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { getDentistas, handleListar, state } = useContext(ContextGlobal);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getDentistas().then((datos) => {
        handleListar(datos);
        setLoading(false);
    });
   }, []);


  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {!loading &&
         state.listarDentistas.map((item) => (
         <Card key={item.id} {...item} />
          ))}
      </div>
    </main>
  )
}

export default Home