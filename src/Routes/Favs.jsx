import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const favoritosDentistas = JSON.parse(localStorage.getItem('favoritosdDentistas')) || [];
  return (
    <>
      <h1 className={theme === 'dark' ? 'dark-text' : 'light-text'}>Dentists Favs</h1>
      <div className={`card-grid ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favoritosDentistas.map((dentista) => (
          <Card key={dentista.id} dentist={dentista} />
        ))}
      
      </div>
    </>
  );
};

export default Favs;
