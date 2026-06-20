import styles from './IconButton.module.css'

export type IconButtonState = 'default' | 'hover' | 'disabled'
export type IconButtonSize = 'sm' | 'md' | 'lg'

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state?: IconButtonState
  size?: IconButtonSize
}

export const IconButton = ({
  state = 'default',
  size = 'md',
  disabled,
  ...props
}: IconButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[state]} ${styles[size]}`}
      disabled={disabled || state === 'disabled'}
      {...props}
    >
      <svg
        viewBox="0 0 16 16"
        className={styles.icon}
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="8" cy="4" r="1.5" />
        <circle cx="8" cy="8" r="1.5" />
        <circle cx="8" cy="12" r="1.5" />
      </svg>
    </button>
  )
}
