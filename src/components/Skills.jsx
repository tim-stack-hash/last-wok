import { Container, Row, Col, ProgressBar } from 'react-bootstrap'
import { useLanguage } from '../context/LanguageContext'
import { skills } from '../data/projects'
import './Skills.css'

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section className="skills-section py-5" id="skills">
      <Container>
        <h2 className="text-center fw-bold mb-5">{t('skills.title')}</h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="skills-list">
              {skills.map(skill => (
                <div key={skill.name} className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="fw-medium">{skill.name}</span>
                    <span className="text-secondary">{skill.level}%</span>
                  </div>
                  <ProgressBar
                    now={skill.level}
                    variant="primary"
                    className="skill-bar"
                  />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
