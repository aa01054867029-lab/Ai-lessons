import styles from './Select.module.css'

export type SelectState = 'default' | 'focus' | 'error' | 'disabled'

interface SelectProps {
  state?: SelectState
}

export const Select = ({ state = 'default' }: SelectProps) => {
  return (
    <div className={`${styles.select} ${styles[state]}`}>
      <span className={styles.label}>Choose option</span>
      <span className={styles.chevron}>▾</span>
    </div>
  )
}
