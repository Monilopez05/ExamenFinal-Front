import { createContext, useReducer } from "react";



export const ContextGlobal = createContext();


  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "lightTheme":
        return { ...state, theme: "light" }
  
      case "darkTheme":
        return { ...state, theme: "dark" }
  
        case "fetch":
          return { ...state, data: action.payload }
      default:
        return state;
    }
  }

  export const ContextProvider = ({ children }) => {
    const initialState = { theme: "light", data: [] }
    const [state, dispatch] = useReducer(reducer, initialState);

    const dataApi = (url) => {
      return fetch(url)
      .then((response)=> response.json())
      .then((result)=> {
        dispatch({type:"fetch", payload:result})
      }) 
  
  }
  
  return (
    <ContextGlobal.Provider value= {{ state, dispatch, dataApi }}>
      {children}
    </ContextGlobal.Provider>
  );
  };

