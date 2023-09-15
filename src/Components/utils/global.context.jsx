
import { createContext, useEffect, useReducer } from "react";



export const ContextGlobal = createContext();


  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const initialState = {
    theme:"light",
    listarDentistas: {},
    dentistas: {},
    favoritos: [],
  };
  function reducer(state, action) {
    switch (action.type) {
        case "setCambiarColor":
            return {
            ...state,
            theme: state.theme === 'light' ? 'dark' : 'light',
        };
        case "setListarDestistas":
            return {
                ...state,
               listarDestistas: action.payload,
            };
        case "setDentistas":
            return {
                ...state,
                dentistas: action.payload,
            };
        
        case "setFavoritos":
            return {
                ...state,
                favoritos: action.payload,
            };

        default:
            return state;
    }
  }
  export const ContextProvider = ({ children }) => {
      const [state, dispatch] = useReducer(reducer, initialState);

      const handleTheme = () => {
        dispatch({ type: "setCambiarColor" });
      };
      const handleListar = (datos) => {
          dispatch({ type: "setListarDestistas", payload: datos });
      };
      const handleDentistas = (datos) => {
          dispatch({ type: "setDentistas", payload: datos });
      };
      const handleFavoritos = (datos) => {
          dispatch({ type: "setFavoritos", payload: datos });
      };
  
      const getDentista = async () => {
          const res = await fetch("https://jsonplaceholder.typicode.com/users");
          const data = await res.json();
          return data;
      };
  
      const getUsuarioPorId = async (id) => {
          const res = await fetch( `https://jsonplaceholder.typicode.com/users/${id}`);
          const data = await res.json();
          return data;
      };
  
      useEffect(() => {
          localStorage.setItem("favorito", JSON.stringify(state.favoritos));
      }, [state.favoritos]);








  return (
    <ContextGlobal.Provider  value={{ 
      handleTheme,
      getDentista,
      getUsuarioPorId,
      handleListar,
      handleDentistas,
      handleFavoritos,
      state,
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};
