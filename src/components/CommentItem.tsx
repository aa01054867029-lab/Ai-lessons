import styles from './CommentItem.module.css'

interface CommentItemProps {
  author?: string
  role?: string
  time?: string
  message?: string
}

export const CommentItem = ({
  author = 'Alexey Ivanov',
  role = 'Compliance officer',
  time = '2 hours ago',
  message = 'Approved the request with comments.',
}: CommentItemProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.avatar} />
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.author}>{author}</span>
          <span className={styles.role}>{role}</span>
          <span className={styles.time}>{time}</span>
        </div>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  )
}
