import {useContext} from 'react'
import { Link } from 'react-router-dom/dist';
import { ContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { handleTheme } = useContext(ContextGlobal);

  {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
  {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
  return (
    <nav>
      <h2> DH Odontolog@s</h2>
      <div className='ul-button'> 
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/">Home</Link>
          </li>
        </ul>

        <button onClick={handleTheme}>Change theme</button>

      </div>
    </nav>
  )
}

export default Navbar