import { Link } from 'react-router-dom'
import { screens } from './registry'
import './IndexScreen.css'

export const IndexScreen = () => {
  return (
    <main className="index-screen">
      <section className="index-hero">
        <p className="index-eyebrow">ComplyFlow UI Kit</p>
        <h1>Экраны</h1>
        <p className="index-copy">
          Статичные экраны, собранные из дизайн-системы. Логика и данные — отдельный шаг.
        </p>
      </section>

      <section className="index-grid-section">
        <div className="index-grid">
          {screens.map((screen) => (
            <Link key={screen.id} to={screen.route} className="index-card">
              <div>
                <p className="index-card-name">{screen.name}</p>
                <p className="index-card-description">{screen.description}</p>
              </div>
              <span className="index-card-route">{screen.route}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="index-footer">
        <p>
          Дизайн-система:{' '}
          <Link to="/showcase" style={{ color: 'var(--text-link)' }}>
            /showcase
          </Link>
          {' · '}
          <a href="http://localhost:6006" style={{ color: 'var(--text-link)' }}>
            Storybook :6006
          </a>
        </p>
      </section>
    </main>
  )
}
