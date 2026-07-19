import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import { useLanguage } from '../context/LanguageContext'
import { projects } from '../data/projects'
import './Projects.css'

export default function Projects() {
  const { language } = useLanguage()

  return (
    <section className="projects-section py-5" id="projects">
      <Container>
        <h2 className="text-center fw-bold mb-5">
          {language === 'ru' ? 'Мои проекты' : 'My Projects'}
        </h2>
        <Row className="g-4">
          {projects.map(project => (
            <Col key={project.id} xs={12} sm={6} lg={4}>
              <Card className="project-card h-100 border-0 shadow-sm">
                <Card.Img variant="top" src={project.image} alt={project.title[language]} className="project-image" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{project.title[language]}</Card.Title>
                  <Card.Text className="text-secondary flex-grow-1">
                    {project.description[language]}
                  </Card.Text>
                  <div className="d-flex flex-wrap gap-1 mt-auto">
                    {project.technologies.map(tech => (
                      <Badge key={tech} bg="primary" className="tech-tag">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="stretched-link"
                      aria-label={project.title[language]}
                    />
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
