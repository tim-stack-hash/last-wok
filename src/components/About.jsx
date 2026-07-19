import { Container, Row, Col, Card } from 'react-bootstrap'
import { useLanguage } from '../context/LanguageContext'
import './About.css'

export default function About() {
  const { t } = useLanguage()

  const stats = [
    { value: t('about.expValue'), label: t('about.experience') },
    { value: t('about.projValue'), label: t('about.projects') },
    { value: t('about.clientValue'), label: t('about.clients') },
  ]

  return (
    <section className="about-section py-5" id="about">
      <Container>
        <h2 className="text-center fw-bold mb-4">{t('about.title')}</h2>
        <p className="text-center text-secondary lead mb-5 mx-auto" style={{ maxWidth: 700 }}>
          {t('about.description')}
        </p>
        <Row className="g-4 justify-content-center">
          {stats.map((stat, i) => (
            <Col key={i} xs={12} sm={6} md={4}>
              <Card className="stat-card text-center border-0 shadow-sm h-100">
                <Card.Body className="py-4">
                  <h3 className="display-5 fw-bold text-primary mb-2">{stat.value}</h3>
                  <p className="text-secondary mb-0">{stat.label}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
