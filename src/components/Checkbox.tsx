import styles from './Checkbox.module.css'

export type CheckboxChecked = 'unchecked' | 'checked'
export type CheckboxState = 'default' | 'hover' | 'disabled'

interface CheckboxProps {
  checked?: CheckboxChecked
  state?: CheckboxState
  label?: string
}

export const Checkbox = ({
  checked = 'unchecked',
  state = 'default',
  label = '',
}: CheckboxProps) => {
  const isChecked = checked === 'checked'

  return (
    <label className={`${styles.wrapper} ${styles[state]} ${styles[checked]}`}>
      <span className={styles.box}>
        {isChecked && <span className={styles.checkmark} />}
      </span>
      {label ? <span className={styles.label}>{label}</span> : null}
    </label>
  )
}
