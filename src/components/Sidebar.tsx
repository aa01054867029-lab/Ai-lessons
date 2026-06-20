import styles from './Sidebar.module.css'
import { Badge } from './Badge'

export type NavItemState = 'default' | 'active'

interface SidebarProps {
  activeItem?: string
}

export const Sidebar = ({ activeItem = 'Dashboard' }: SidebarProps) => {
  const items = ['Dashboard', 'Approvals', 'Clients', 'Reports']

  return (
    <aside className={styles.sidebar}>
      <div className={styles.group}>
        {items.map((item) => (
          <button
            key={item}
            className={`${styles.item} ${activeItem === item ? styles.active : ''}`}
          >
            <span>{item}</span>
            {item === 'Approvals' && <Badge variant="success" size="sm" label="5" />}
          </button>
        ))}
      </div>
      <div className={styles.group}>
        <button className={styles.item}>Settings</button>
      </div>
    </aside>
  )
}
