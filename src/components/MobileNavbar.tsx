import styles from './MobileNavbar.module.css'

interface MobileNavbarProps {
  title?: string
}

export const MobileNavbar = ({ title = 'Back' }: MobileNavbarProps) => {
  return (
    <div className={styles.mobileNavbar}>
      <button className={styles.backButton}>
        <span className={styles.backIcon}>←</span>
        <span>Назад</span>
      </button>
      <span className={styles.title}>{title}</span>
      <div className={styles.menuIcon} />
    </div>
  )
}
