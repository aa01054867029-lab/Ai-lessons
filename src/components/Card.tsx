import styles from './Card.module.css'

export type CardType = 'default' | 'interactive'
export type CardState = 'default' | 'hover' | 'selected'

export interface CardProps {
  type?: CardType
  state?: CardState
  title?: string
  description?: string
  children?: React.ReactNode
}

export const Card = ({
  type = 'default',
  state = 'default',
  title,
  description,
  children,
}: CardProps) => {
  return (
    <div className={`${styles.card} ${styles[type]} ${styles[state]}`}>
      {title ? <div className={styles.header}>{title}</div> : null}
      {description ? <div className={styles.body}>{description}</div> : null}
      {children}
    </div>
  )
}
