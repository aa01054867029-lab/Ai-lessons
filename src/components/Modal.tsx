import { Button } from './Button'
import styles from './Modal.module.css'

export interface ModalProps {
  title?: string
  description?: string
  primaryLabel?: string
  secondaryLabel?: string
}

export const Modal = ({
  title = 'Modal title',
  description = 'Modal description text',
  primaryLabel = 'Confirm',
  secondaryLabel = 'Cancel',
}: ModalProps) => {
  return (
    <div className={styles.modal}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          <Button variant="secondary" size="md">{secondaryLabel}</Button>
          <Button variant="primary" size="md">{primaryLabel}</Button>
        </div>
      </div>
    </div>
  )
}
