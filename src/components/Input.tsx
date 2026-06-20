import styles from './Input.module.css'

export type InputState = 'default' | 'focus' | 'error' | 'disabled'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  state?: InputState
}

export const Input = ({ state = 'default', disabled, ...props }: InputProps) => {
  return (
    <input
      className={`${styles.input} ${styles[state]}`}
      disabled={disabled || state === 'disabled'}
      {...props}
    />
  )
}
