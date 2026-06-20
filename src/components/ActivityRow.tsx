import styles from './ActivityRow.module.css'

export type ActivityType = 'alert_processed' | 'approval_made' | 'kyc_verified' | 'system'

interface ActivityRowProps {
  type?: ActivityType
  description?: string
  timestamp?: string
}

const badgeBackground = {
  alert_processed: 'var(--bg-warning-subtle)',
  approval_made: 'var(--bg-success-subtle)',
  kyc_verified: 'var(--surface-raised)',
  system: 'var(--surface-raised)',
}

export const ActivityRow = ({
  type = 'approval_made',
  description = 'Payment approved by the compliance team',
  timestamp = 'Just now',
}: ActivityRowProps) => {
  return (
    <div className={styles.row}>
      <div className={styles.icon} style={{ background: badgeBackground[type] }} />
      <div className={styles.content}>
        <div className={styles.description}>{description}</div>
        <div className={styles.timestamp}>{timestamp}</div>
      </div>
    </div>
  )
}
