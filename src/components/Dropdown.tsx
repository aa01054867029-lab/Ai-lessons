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
        <svg className={styles.chevron} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 6l4 4 4-4" />
        </svg>
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
