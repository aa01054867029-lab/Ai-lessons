import styles from './StatCard.module.css'

interface StatCardProps {
  label?: string
  value?: string
  trendLabel?: string
  trendVariant?: 'success' | 'warning' | 'error' | 'info'
}

export const StatCard = ({
  label = 'Revenue',
  value = '₽ 1.2M',
  trendLabel = 'Up 12% this month',
  trendVariant = 'success',
}: StatCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.topRow}>
        <span className={styles.label}>{label}</span>
        <span className={styles.icon} />
      </div>
      <div className={styles.value}>{value}</div>
      <div className={styles.trend}>{trendLabel}</div>
    </div>
  )
}
