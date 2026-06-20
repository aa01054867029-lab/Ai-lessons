import styles from './Alert.module.css'

export type AlertType = 'info' | 'success' | 'warning' | 'error'

interface AlertProps {
  type?: AlertType
}

export const Alert = ({ type = 'info' }: AlertProps) => {
  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      <div className={styles.bar} />
      <div className={styles.content}>
        <span className={styles.title}>Alert title</span>
        <span className={styles.description}>This is an important alert message.</span>
      </div>
    </div>
  )
}
