import styles from './Pagination.module.css'

interface PaginationProps {
  activePage?: number
  totalPages?: number
}

export const Pagination = ({ activePage = 2, totalPages = 5 }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <div className={styles.pagination}>
      <span className={styles.info}>Page {activePage} of {totalPages}</span>
      <div className={styles.controls}>
        <button className={styles.button}>Prev</button>
        {pages.map((page) => (
          <button
            key={page}
            className={`${styles.page} ${page === activePage ? styles.active : ''}`}
          >
            {page}
          </button>
        ))}
        <button className={styles.button}>Next</button>
      </div>
    </div>
  )
}
