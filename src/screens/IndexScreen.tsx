import { Link } from 'react-router-dom'
import { screens } from './registry'
import './IndexScreen.css'

export const IndexScreen = () => {
  return (
    <main className="index-screen">
      <section className="index-hero">
        <div>
          <p className="index-eyebrow">ComplyFlow UI Kit</p>
          <h1>Статичные экраны</h1>
          <p className="index-copy">
            Набор экранов, собранных из дизайн-системы. Логика и данные — отдельный шаг.
          </p>
        </div>
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
        <p>Открыть все экраны: <code>http://localhost:5173/</code></p>
        <p>Прямые ссылки:</p>
        <ul className="index-links-list">
          {screens.map((screen) => (
            <li key={screen.id}><Link to={screen.route}>{screen.route}</Link></li>
          ))}
        </ul>
      </section>

      <section className="index-footer">
        <p>Смотреть дизайн-систему: Storybook каталог и компоненты.</p>
      </section>
    </main>
  )
}
