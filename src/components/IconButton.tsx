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
      <span className={styles.icon} />
    </button>
  )
}
