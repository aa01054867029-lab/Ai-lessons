import styles from './Card.module.css'

export type CardType = 'default' | 'interactive'
export type CardState = 'default' | 'hover' | 'selected'

export interface CardProps {
  type?: CardType
  state?: CardState
  title?: string
  description?: string
}

export const Card = ({
  type = 'default',
  state = 'default',
  title = 'Card title',
  description = 'Card description',
}: CardProps) => {
  return (
    <div className={`${styles.card} ${styles[type]} ${styles[state]}`}>
      <div className={styles.header}>{title}</div>
      <div className={styles.body}>{description}</div>
    </div>
  )
}
