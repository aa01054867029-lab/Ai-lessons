import styles from './Dropdown.module.css'

export type DropdownState = 'collapsed' | 'expanded' | 'disabled'

interface DropdownProps {
  state?: DropdownState
  label?: string
}

export const Dropdown = ({ state = 'collapsed', label = 'Filter' }: DropdownProps) => {
  const options = ['Last 7 days', 'Last month', 'Custom range']
  const expanded = state === 'expanded'
  const disabled = state === 'disabled'

  return (
    <div className={`${styles.dropdown} ${styles[state]}`}>
      <button className={styles.trigger} disabled={disabled}>
        <span>{label}</span>
        <span className={styles.chevron}>▾</span>
      </button>
      {expanded && (
        <div className={styles.panel}>
          {options.map((option) => (
            <div key={option} className={styles.option}>{option}</div>
          ))}
        </div>
      )}
    </div>
  )
}
