import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useLanguage } from '../context/LanguageContext'
import './Contact.css'

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent!')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact-section py-5" id="contact">
      <Container>
        <h2 className="text-center fw-bold mb-5">{t('contact.title')}</h2>
        <Row className="g-5 justify-content-center">
          <Col md={7} lg={6}>
            <Form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
              <Form.Control
                type="text"
                name="name"
                placeholder={t('contact.name')}
                value={form.name}
                onChange={handleChange}
                required
                size="lg"
              />
              <Form.Control
                type="email"
                name="email"
                placeholder={t('contact.email')}
                value={form.email}
                onChange={handleChange}
                required
                size="lg"
              />
              <Form.Control
                as="textarea"
                name="message"
                placeholder={t('contact.message')}
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                size="lg"
              />
              <Button variant="primary" type="submit" size="lg">
                {t('contact.send')}
              </Button>
            </Form>
          </Col>
          <Col md={5} lg={4}>
            <div className="contact-info d-flex flex-column gap-3">
              <div>
                <strong className="text-primary">{t('contact.phone')}:</strong>
                <p className="text-secondary mb-0">+998 93 880 77 66</p>
              </div>
              <div>
                <strong className="text-primary">Email:</strong>
                <p className="text-secondary mb-0">timurmirmolov5656@gmail.com</p>
              </div>
              <div>
                <strong className="text-primary">{t('contact.location')}:</strong>
                <p className="text-secondary mb-0">Tashkent, Uzbekistan</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
