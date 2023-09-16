import React from 'react'

const Footer = () => {
  return (
    <footer>
        <p>Powered by</p>
        <img src= "../images/DH.png" alt='DH-logo' />
      <ul className='listaRedes'>
          <li><img  src=".\images\ico-facebook.png"alt="Facebook" /></li>
          <li><img  src=".\images\ico-instagram.png" alt="" /></li>
          <li><img  src=".\images\ico-tiktok.png"alt="Facebook" /></li>
          <li><img  src=".\images\ico-whatsapp.png" alt="" /></li>
        </ul>
    </footer>
  )
}

export default Footer