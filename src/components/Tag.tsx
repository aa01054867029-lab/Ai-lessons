import styles from './Tag.module.css'

export type TagVariant = 'neutral' | 'success' | 'warning' | 'error'

interface TagProps {
  variant?: TagVariant
  dismissible?: boolean
  label?: string
}

export const Tag = ({
  variant = 'neutral',
  dismissible = false,
  label = 'Label',
}: TagProps) => {
  return (
    <div className={`${styles.tag} ${styles[variant]}`}>
      <span>{label}</span>
      {dismissible && <button className={styles.close}>×</button>}
    </div>
  )
}
