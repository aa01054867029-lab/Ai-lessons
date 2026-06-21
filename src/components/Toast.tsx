import styles from './Toast.module.css'

export type ToastType = 'success' | 'error' | 'warning'

interface ToastProps {
  type?: ToastType
  title?: string
  description?: string
  onClose?: () => void
}

export const Toast = ({ type = 'success', title = 'Уведомление', description, onClose }: ToastProps) => {
  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.bar} />
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        {description && <span className={styles.description}>{description}</span>}
      </div>
      <button className={styles.close} onClick={onClose}>×</button>
    </div>
  )
}
