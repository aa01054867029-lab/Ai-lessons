import styles from './ActivityRow.module.css'

export type ActivityType = 'alert_processed' | 'approval_made' | 'kyc_verified' | 'system'

interface ActivityRowProps {
  type?: ActivityType
  description?: string
  timestamp?: string
}

const iconConfig: Record<ActivityType, { bg: string; path: string }> = {
  alert_processed: {
    bg: 'var(--bg-warning-subtle)',
    path: 'M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2zm0 3v4m0 2v.5',
  },
  approval_made: {
    bg: 'var(--bg-success-subtle)',
    path: 'M4 8l3 3 5-5',
  },
  kyc_verified: {
    bg: 'var(--surface-raised)',
    path: 'M8 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-4 6c0-2.2 1.8-4 4-4s4 1.8 4 4',
  },
  system: {
    bg: 'var(--surface-raised)',
    path: 'M8 5v3l2 2M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2z',
  },
}

export const ActivityRow = ({
  type = 'approval_made',
  description = 'Payment approved by the compliance team',
  timestamp = 'Just now',
}: ActivityRowProps) => {
  const { bg, path } = iconConfig[type]
  return (
    <div className={styles.row}>
      <div className={styles.icon} style={{ background: bg }}>
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.iconSvg} aria-hidden="true">
          <path d={path} />
        </svg>
      </div>
      <div className={styles.content}>
        <div className={styles.description}>{description}</div>
        <div className={styles.timestamp}>{timestamp}</div>
      </div>
    </div>
  )
}
