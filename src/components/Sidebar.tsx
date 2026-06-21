import { useNavigate } from 'react-router-dom'
import styles from './Sidebar.module.css'
import { Badge } from './Badge'

export type NavItemState = 'default' | 'active'

interface SidebarProps {
  activeItem?: string
}

const navRoutes: Record<string, string> = {
  'Дашборд':      '/dashboard-co',
  'Алерты':       '/alert-queue',
  'Документы':    '/alert-queue',
  'Согласования': '/approval-request-card',
  'Настройки':    '/dashboard-co',
}

export const Sidebar = ({ activeItem = 'Дашборд' }: SidebarProps) => {
  const navigate = useNavigate()
  const items = ['Дашборд', 'Алерты', 'Документы', 'Согласования']

  return (
    <aside className={styles.sidebar}>
      <div className={styles.group}>
        {items.map((item) => (
          <button
            key={item}
            className={`${styles.item} ${activeItem === item ? styles.active : ''}`}
            onClick={() => navigate(navRoutes[item])}
          >
            <span>{item}</span>
            {item === 'Согласования' && <Badge variant="success" size="sm" label="1" />}
          </button>
        ))}
      </div>
      <div className={styles.group}>
        <button
          className={`${styles.item} ${activeItem === 'Настройки' ? styles.active : ''}`}
          onClick={() => navigate(navRoutes['Настройки'])}
        >
          Настройки
        </button>
      </div>
    </aside>
  )
}
