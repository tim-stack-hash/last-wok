import { useState } from 'react'
import { Navbar as BsNavbar, Nav, Container, Button } from 'react-bootstrap'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import './Navbar.css'

export default function Navbar() {
  const { t, toggleLanguage, language } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [expanded, setExpanded] = useState(false)

  const handleClick = (e, id) => {
    e.preventDefault()
    setExpanded(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <BsNavbar
      expand="lg"
      sticky="top"
      className="navbar-custom"
      variant={theme === 'dark' ? 'dark' : 'light'}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <BsNavbar.Brand href="#hero" className="fw-bold brand-text" onClick={(e) => handleClick(e, 'hero')}>
          Portfolio
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="main-navbar" />
        <BsNavbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link href="#hero" onClick={(e) => handleClick(e, 'hero')}>{t('nav.home')}</Nav.Link>
            <Nav.Link href="#about" onClick={(e) => handleClick(e, 'about')}>{t('nav.about')}</Nav.Link>
            <Nav.Link href="#projects" onClick={(e) => handleClick(e, 'projects')}>{t('nav.projects')}</Nav.Link>
            <Nav.Link href="#skills" onClick={(e) => handleClick(e, 'skills')}>{t('nav.skills')}</Nav.Link>
            <Nav.Link href="#contact" onClick={(e) => handleClick(e, 'contact')}>{t('nav.contact')}</Nav.Link>
          </Nav>
          <div className="d-flex gap-2">
            <Button variant="outline-secondary" size="sm" onClick={toggleTheme}>
              {theme === 'light' ? '\u{1F319}' : '\u{2600}\u{FE0F}'}
            </Button>
            <Button variant="outline-secondary" size="sm" onClick={toggleLanguage}>
              {language === 'ru' ? 'EN' : 'RU'}
            </Button>
          </div>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  )
}
