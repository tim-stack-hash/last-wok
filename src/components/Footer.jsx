import { Container } from 'react-bootstrap'
import { useLanguage } from '../context/LanguageContext'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer-section py-4 border-top">
      <Container className="text-center">
        <p className="text-secondary mb-0">&copy; 2026 Portfolio. {t('footer.rights')}</p>
      </Container>
    </footer>
  )
}
