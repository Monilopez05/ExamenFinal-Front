import { useEffect, useReducer} from "react";
import { Link, } from "react-router-dom";



const Card = ({data: { name, username, id }}) => {

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_FAV":
        return { ...state, favs: [...state.favs, action.payload] };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    favs: JSON.parse(localStorage.getItem("favs")) || [],
  });

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);
  
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const card = {
      name,
      username,
      id,
    };
    if (!state.favs.some((fav) => fav.id === card.id)) {
      dispatch({ type: "ADD_FAV", payload: card });
      alert("Se agregó a favoritos");
    } else {
      alert("Ya está en favoritos");
    }
  }; 

return (
    <div className="card-container">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <img src="../images/doctor.jpg" alt={name} /> 
        <Link to={`/dentist/${id}`}>
        <h4>{name}</h4>
        </Link>
        <p>{username}</p>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;