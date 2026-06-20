import styles from './Badge.module.css'

export type BadgeVariant = 'success' | 'warning' | 'error'
export type BadgeSize = 'sm' | 'md'

export interface BadgeProps {
  variant?: BadgeVariant
  size?: BadgeSize
  label?: string
}

export const Badge = ({
  variant = 'success',
  size = 'md',
  label = 'Badge',
}: BadgeProps) => {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${styles[size]}`}>
      {label}
    </span>
  )
}
