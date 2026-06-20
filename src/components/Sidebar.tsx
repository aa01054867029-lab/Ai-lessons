import styles from './Sidebar.module.css'
import { Badge } from './Badge'

export type NavItemState = 'default' | 'active'

interface SidebarProps {
  activeItem?: string
}

export const Sidebar = ({ activeItem = 'Дашборд' }: SidebarProps) => {
  const items = ['Дашборд', 'Алерты', 'Документы', 'Согласования']

  return (
    <aside className={styles.sidebar}>
      <div className={styles.group}>
        {items.map((item) => (
          <button
            key={item}
            className={`${styles.item} ${activeItem === item ? styles.active : ''}`}
          >
            <span>{item}</span>
            {item === 'Согласования' && <Badge variant="success" size="sm" label="1" />}
          </button>
        ))}
      </div>
      <div className={styles.group}>
        <button className={`${styles.item} ${activeItem === 'Настройки' ? styles.active : ''}`}>
          Настройки
        </button>
      </div>
    </aside>
  )
}
