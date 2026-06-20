import styles from './Toast.module.css'

export type ToastType = 'success' | 'error' | 'warning'

interface ToastProps {
  type?: ToastType
}

export const Toast = ({ type = 'success' }: ToastProps) => {
  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.bar} />
      <div className={styles.content}>
        <span className={styles.title}>Notification</span>
        <span className={styles.description}>This is a toast message.</span>
      </div>
      <button className={styles.close}>×</button>
    </div>
  )
}
