import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.brand}>ComplyFlow</div>
      <nav className={styles.menu}>
        <a href="#" className={styles.link}>Дашборд</a>
        <a href="#" className={styles.link}>Алерты</a>
        <a href="#" className={styles.link}>Согласования</a>
      </nav>
    </header>
  )
}
