import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch,  } = useContext(ContextGlobal)

const handlerTheme = ()=>{
 dispatch({ type: state.theme === 'light' ? 'darkTheme' : 'lightTheme' });
}


  /* Aqui deberan agregar los liks correspondientes a las rutas definidas */
  /* Deberan implementar ademas la logica para cambiar de Theme con el button */
  return (
     <nav className={state.theme === 'light' ? 'navbar-light' : 'navbar-dark'}>
      <h2> DH Odontolog@s</h2>
      <div className='ul-button'> 
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="contacto">Contact</Link>
          
          </li>
          <li>
          <Link to="/favorito">Favs</Link>
          </li>
        </ul>

        <button onClick={handlerTheme}>Change theme</button>

      </div>
    </nav>
  )
}

export default Navbar