import { Container, Row, Col, Button } from 'react-bootstrap'
import { useLanguage } from '../context/LanguageContext'
import './Hero.css'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero-section" id="hero">
      <Container>
        <Row className="align-items-center min-vh-75 py-5">
          <Col lg={7} className="hero-content text-center text-lg-start">
            <p className="hero-greeting">{t('hero.greeting')}</p>
            <h1 className="display-3 fw-bold hero-name">{t('hero.name')}</h1>
            <h2 className="h3 text-primary mb-3">{t('hero.title')}</h2>
            <p className="lead text-secondary mb-4">{t('hero.description')}</p>
            <Button
              href="https://github.com/timur-mir"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              {t('hero.cta')}
            </Button>
          </Col>
          <Col lg={5} className="text-center mt-4 mt-lg-0">
            <img
              src="/avatar.jpg"
              alt="Profile"
              className="hero-photo rounded-circle img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
