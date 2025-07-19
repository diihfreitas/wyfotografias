import React from 'react'
import '../../componentscss/Title.css'
import '../../componentscss/Menu.css'
import * as imagens from '../../fotos/imagens.js'

const Home = () => {
  return (
    <div>
      {/* Título e Sub */}
      <section className='container-title'>
        <h1 className='title'>Williane Yale</h1>
        <h2 className='subtitle'>Fotografias</h2>
      </section>
      
      {/* Menu */}
      <section className='container-menu'>
        <nav>
          <ul className='menu'>
            <li><a href='#' className='menu-link'>Início</a></li>
            <li><a href='#' className='menu-link'>Biografia</a></li>
            <li><a href='#' className='menu-link'>Trabalhos</a></li>
            <li><a href='#' className='menu-link'>Contato</a></li>
          </ul>
        </nav>
      </section>

      {/* Amostra de Trabalhos */}
      <section className='container-galery'>

      </section>
    </div>
  )
}

export default Home