import styles from './Pagination.module.css'

interface PaginationProps {
  activePage?: number
  totalPages?: number
  onPageChange?: (page: number) => void
}

export const Pagination = ({ activePage = 2, totalPages = 5, onPageChange }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className={styles.pagination}>
      <span className={styles.info}>Страница {activePage} из {totalPages}</span>
      <div className={styles.controls}>
        <button
          className={styles.button}
          disabled={activePage <= 1}
          onClick={() => onPageChange?.(activePage - 1)}
        >
          Назад
        </button>
        {pages.map((page) => (
          <button
            key={page}
            className={`${styles.page} ${page === activePage ? styles.active : ''}`}
            onClick={() => onPageChange?.(page)}
          >
            {page}
          </button>
        ))}
        <button
          className={styles.button}
          disabled={activePage >= totalPages}
          onClick={() => onPageChange?.(activePage + 1)}
        >
          Далее
        </button>
      </div>
    </div>
  )
}
