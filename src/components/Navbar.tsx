import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.brand}>Brand</div>
      <nav className={styles.menu}>
        <a href="#" className={styles.link}>Dashboard</a>
        <a href="#" className={styles.link}>Reports</a>
        <a href="#" className={styles.link}>Settings</a>
      </nav>
    </header>
  )
}
