import React, { useState, useEffect } from 'react';
import '../style-page-css/Title.css';
import '../style-page-css/Menu.css';
import * as imagens from '../../fotos/imagens.js';
import { Link } from 'react-router-dom';

const Works = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
            <li><Link to='/home' className='menu-link' tabIndex={menuOpen || window.innerWidth > 700 ? 0 : -1}>Início</Link></li>
            <li><a href='#' className='menu-link' tabIndex={menuOpen || window.innerWidth > 700 ? 0 : -1}>Biografia</a></li>
            <li><Link to='/works' className='menu-link' tabIndex={menuOpen || window.innerWidth > 700 ? 0 : -1}>Trabalhos</Link></li>
            <li><a href='#' className='menu-link' tabIndex={menuOpen || window.innerWidth > 700 ? 0 : -1}>Contato</a></li>
          </ul>
        </nav>
      </section>
      {/* Conteúdo específico da página Works pode ser adicionado abaixo */}
    </div>
  );
};

export default Works;