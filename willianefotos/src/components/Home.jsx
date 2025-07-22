import React, { useState, useEffect } from 'react';
import '../style-page-css/Title.css';
import '../style-page-css/Menu.css';
import '../style-page-css/Galery.css';
import '../style-page-css/Minibio.css';
import '../style-page-css/WordsEffects.css';
import '../style-page-css/Carousel.css';
import '../style-page-css/Contact.css';
import * as imagens from '../../fotos/imagens.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const GALLERY_IMAGES = [
  { src: imagens.aluna, alt: 'Aluna' },
  { src: imagens.ballet, alt: 'Ballet' },
  { src: imagens.happy, alt: 'Happy' },
  { src: imagens.familia, alt: 'Família' },
  { src: imagens.flores, alt: 'Flores' },
  { src: imagens.red, alt: 'Red' },
];

const CAROUSEL_IMAGES = [
  { src: imagens.josi, alt: 'Josilene' },
  { src: imagens.irmaos, alt: 'Irmãos' },
  { src: imagens.mariaHeloisa, alt: 'Maria Heloisa' },
  { src: imagens.renata, alt: 'Renata' },
  { src: imagens.sapatinhos, alt: 'Sapatinhos' },
  { src: imagens.silvania, alt: 'Silvania' },
  { src: imagens.simone, alt: 'Simone' },
  { src: imagens.fiveyears, alt: 'Five Years' },
];

const Home = () => {
  // Estado para imagem expandida da galeria
  const [expandedImg, setExpandedImg] = useState(null);
  // Estado para imagem expandida do carrossel
  const [expandedCarouselImg, setExpandedCarouselImg] = useState(null);
  // Estado do menu mobile
  const [menuOpen, setMenuOpen] = useState(false);

  // Fecha overlay da galeria ao pressionar ESC
  useEffect(() => {
    if (expandedImg !== null) {
      const handleEsc = (e) => {
        if (e.key === 'Escape') setExpandedImg(null);
      };
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [expandedImg]);

  // Fecha overlay do carrossel ao pressionar ESC
  useEffect(() => {
    if (expandedCarouselImg !== null) {
      const handleEsc = (e) => {
        if (e.key === 'Escape') setExpandedCarouselImg(null);
      };
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [expandedCarouselImg]);

  // Fecha menu ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fecha menu ao pressionar ESC
  useEffect(() => {
    if (menuOpen) {
      const handleEsc = (e) => {
        if (e.key === 'Escape') setMenuOpen(false);
      };
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [menuOpen]);

  // Acessibilidade: fecha menu ao clicar fora
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e) => {
      const menu = document.getElementById('main-menu');
      if (menu && !menu.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  // Renderização principal
  return (
    <div>
      {/* Título e Subtítulo */}
      <section className='container-title'>
        <h1 className='title'>Williane Yale</h1>
        <h2 className='subtitle'>Fotografias</h2>
      </section>

      {/* Menu de navegação */}
      <section className='container-menu' style={{ position: 'relative' }}>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-controls='main-menu'
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav aria-label="Menu principal">
          <ul
            id='main-menu'
            className={`menu${menuOpen ? ' open' : ''}`}
            role='menu'
            aria-hidden={!menuOpen && window.innerWidth <= 700}
          >
            <li><a href='#' className='menu-link' tabIndex={menuOpen || window.innerWidth > 700 ? 0 : -1}>Início</a></li>
            <li><a href='#' className='menu-link' tabIndex={menuOpen || window.innerWidth > 700 ? 0 : -1}>Biografia</a></li>
            <li><a href='#' className='menu-link' tabIndex={menuOpen || window.innerWidth > 700 ? 0 : -1}>Trabalhos</a></li>
            <li><a href='#' className='menu-link' tabIndex={menuOpen || window.innerWidth > 700 ? 0 : -1}>Contato</a></li>
          </ul>
        </nav>
      </section>

      {/* Galeria de Trabalhos */}
      <section className='container-galery'>
        <div className='galery-grid'>
          {GALLERY_IMAGES.map((img, idx) => (
            <img
              key={img.alt}
              src={img.src}
              alt={img.alt}
              className={`galery-img${expandedImg === idx ? ' expanded' : ''}`}
              onClick={() => setExpandedImg(expandedImg === idx ? null : idx)}
              style={{ cursor: 'pointer' }}
              tabIndex={0}
              role="button"
              aria-label={`Expandir imagem ${img.alt}`}
            />
          ))}
        </div>
        {expandedImg !== null && (
          <div className='galery-overlay' onClick={() => setExpandedImg(null)}>
            <img
              src={GALLERY_IMAGES[expandedImg].src}
              alt={GALLERY_IMAGES[expandedImg].alt}
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

      {/* Carrossel 3D de Fotos */}
      <section className='container-carousel'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
          modules={[EffectCoverflow, Navigation]}
          className="mySwiper"
          style={{ width: '600px', height: '560px' }}
        >
          {CAROUSEL_IMAGES.map((img, idx) => (
            <SwiperSlide key={img.alt} style={{ width: '320px', height: '540px' }}>
              <img
                src={img.src}
                alt={img.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px', cursor: 'pointer' }}
                onClick={() => setExpandedCarouselImg(idx)}
                tabIndex={0}
                role="button"
                aria-label={`Expandir imagem ${img.alt}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {expandedCarouselImg !== null && (
          <div className='galery-overlay' onClick={() => setExpandedCarouselImg(null)}>
            <img
              src={CAROUSEL_IMAGES[expandedCarouselImg].src}
              alt={CAROUSEL_IMAGES[expandedCarouselImg].alt}
              className='galery-img expanded show'
              onClick={e => e.stopPropagation()}
            />
          </div>
        )}
      </section>
      
      {/* Contato */}
      <section className='container-contact' style={{ margin: '60px 0 0 0', textAlign: 'center' }}>
        <h2 className='contact-title'>Contato</h2>
        <div className='contact-row'>
          <p className='contact-email'>E-mail: <a href='mailto:yalefotos33@gmail.com'>yalefotos33@gmail.com</a></p>
          <a
            href='https://wa.me/5581971108259'
            target='_blank'
            rel='noopener noreferrer'
            className='contact-whatsapp'
            aria-label='Conversar no WhatsApp'
            style={{ display: 'flex', alignItems: 'center', marginLeft: 24 }}
          >
            <img src={imagens.whats} alt='WhatsApp' style={{ width: 72, height: 72 }} />
          </a>
        </div>
      </section>
      
    </div>
  );
};

export default Home;