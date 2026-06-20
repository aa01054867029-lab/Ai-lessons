import styles from './Breadcrumb.module.css'

interface BreadcrumbProps {
  items?: string[]
  current?: string
}

export const Breadcrumb = ({
  items = ['Home', 'Projects', 'Compliance'],
  current = 'Approval Request',
}: BreadcrumbProps) => {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item} className={styles.item}>
          <a href="#" className={styles.link}>{item}</a>
          <span className={styles.separator}>→</span>
        </span>
      ))}
      <span className={styles.current}>{current}</span>
    </nav>
  )
}
