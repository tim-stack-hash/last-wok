import { useParams, Link } from 'react-router-dom'
import { Container, Badge } from 'react-bootstrap'
import { useLanguage } from '../context/LanguageContext'
import { projects } from '../data/projects'
import './ProjectPage.css'

export default function ProjectPage() {
  const { id } = useParams()
  const { language } = useLanguage()
  const project = projects.find(p => p.id === Number(id))

  if (!project) {
    return (
      <Container className="py-5 text-center">
        <h2>Project not found</h2>
        <Link to="/" className="text-primary">Back to home</Link>
      </Container>
    )
  }

  return (
    <Container className="py-5">
      <Link to="/" className="text-primary text-decoration-none fw-medium d-inline-block mb-4">
        &larr; {language === 'ru' ? 'Назад на главную' : 'Back to home'}
      </Link>
      <div className="project-detail-card border-0 shadow-sm rounded overflow-hidden">
        <img
          src={project.image}
          alt={project.title[language]}
          className="w-100"
          style={{ maxHeight: 400, objectFit: 'cover' }}
        />
        <div className="p-4 p-md-5">
          <h1 className="fw-bold mb-3">{project.title[language]}</h1>
          <p className="lead text-secondary mb-4">{project.description[language]}</p>
          <h5 className="mb-3">Technologies:</h5>
          <div className="d-flex flex-wrap gap-2 mb-4">
            {project.technologies.map(tech => (
              <Badge key={tech} bg="primary" className="fs-6 px-3 py-2">
                {tech}
              </Badge>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              {language === 'ru' ? 'Смотреть на GitHub' : 'View on GitHub'} &rarr;
            </a>
          )}
        </div>
      </div>
    </Container>
  )
}
