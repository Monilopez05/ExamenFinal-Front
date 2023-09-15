import { useContext } from "react";
import { Link, } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import doctorImg from "../images/doctor.jpg"

const Card = ({ name, username, id }) => {

  const {state, handleFavoritos} = useContext(ContextGlobal)
// const { state, handleFavs } = useContext(ContextGlobal);
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    if (!state.favoritos.some((favorito) => favorito.id === id)) {
      const favorito = {
          name,
          username,
          id,
      };
      const resul = [...state.favoritos, favorito]; //arr
      handleFavoritos(resul);
  }
};


  return (
    <div className="card-container">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

        <Link to={`/dentistas/${id}`}>
            <div className="divImgDoctor">
                <img
                    className="imgDoctor" src={doctorImg} alt="imagen de un doctor"
                />
            </div>
                <p>{name}</p>
                <p>{username}</p>
        </Link>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
