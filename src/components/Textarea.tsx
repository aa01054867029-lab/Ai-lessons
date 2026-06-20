import styles from './Textarea.module.css'

export type TextareaState = 'default' | 'focus' | 'error' | 'disabled'

interface TextareaProps {
  state?: TextareaState
  hint?: string
}

export const Textarea = ({ state = 'default', hint = 'Additional details', ...props }: TextareaProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const disabled = state === 'disabled'

  return (
    <div className={styles.container}>
      <textarea
        className={`${styles.textarea} ${styles[state]}`}
        disabled={disabled}
        placeholder="Write a comment…"
        {...props}
      />
      <div className={styles.hint}>{hint}</div>
    </div>
  )
}
