import React, { useState, useEffect } from 'react'
import '../style-page-css/Title.css'
import '../style-page-css/Menu.css'
import '../style-page-css/Galery.css'
import '../style-page-css/Minibio.css'
import '../style-page-css/WordsEffects.css'
import * as imagens from '../../fotos/imagens.js'

const Home = () => {
  const [expandedImg, setExpandedImg] = useState(null);

  const galeryImages = [
    { src: imagens.aluna, alt: 'Aluna' },
    { src: imagens.ballet, alt: 'Ballet' },
    { src: imagens.happy, alt: 'Happy' },
    { src: imagens.familia, alt: 'Família' },
    { src: imagens.flores, alt: 'Flores' },
    { src: imagens.red, alt: 'Red' },
  ];

  const handleImgClick = (idx) => {
    setExpandedImg(expandedImg === idx ? null : idx);
  };

  // Fechar ao apertar ESC
  useEffect(() => {
    if (expandedImg !== null) {
      const handleEsc = (e) => {
        if (e.key === 'Escape') setExpandedImg(null);
      };
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [expandedImg]);

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
        <div className='galery-grid'>
          {galeryImages.map((img, idx) => (
            <img
              key={img.alt}
              src={img.src}
              alt={img.alt}
              className={`galery-img${expandedImg === idx ? ' expanded' : ''}`}
              onClick={() => handleImgClick(idx)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
        {expandedImg !== null && (
          <div className='galery-overlay' onClick={() => setExpandedImg(null)}>
            <img
              src={galeryImages[expandedImg].src}
              alt={galeryImages[expandedImg].alt}
              className='galery-img expanded show'
              onClick={e => e.stopPropagation()}
            />
          </div>
        )}
      </section>

      {/* Frase de Efeito */}
      <section>
        <h3 className='wordseffects'>"... a fotografia tira um instante do tempo, alterando
        a vida ao mantê-la imóvel."
        </h3>
      </section>

      {/* Biografia */}
      <section className='container-minibio'>
        <img src={imagens.williane} alt='Williane Yale' className='minibio-img' />
        <div className='grid-minibio'>
          <h2 className='hello'>Olá meus amigos...</h2>
          <p className='minibio-text'>...meu nome é Williane Yale, sou fotógrafa, servidora pública, 
            nascida em 1990, cristã, amo séries de época, amo viajar e estar 
            em contato com a natureza. Uma frase marcante em minha vida é: 
            “Enquanto há vida, há esperança.” Sejam bem-vindos ao meu site. 
            Quer saber mais sobre mim? Clica aqui em baixo!
          </p>
          <button className='minibio-btn'>Saiba mais</button>
        </div>
      </section>
    </div>
  )
}

export default Home