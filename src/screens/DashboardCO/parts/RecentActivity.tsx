import { ActivityRow } from '../../../components/ActivityRow'
import './RecentActivity.css'

const activities = [
  { type: 'alert_processed', description: 'Алерт AML-001 закрыт', timestamp: '10 мин назад' },
  { type: 'approval_made', description: 'Запрос #456 одобрен', timestamp: '1 ч назад' },
  { type: 'kyc_verified', description: 'KYC Иванов верифицирован', timestamp: '2 ч назад' },
  { type: 'system', description: 'Система обновлена', timestamp: 'вчера' },
]

export const RecentActivity = () => {
  return (
    <div className="activity-card">
      <p className="activity-card-title">Последние действия</p>
      <div className="activity-card-divider" />
      <div className="recent-activity">
        {activities.map((activity, index) => (
          <ActivityRow
            key={`${activity.description}-${index}`}
            type={activity.type as any}
            description={activity.description}
            timestamp={activity.timestamp}
          />
        ))}
      </div>
    </div>
  )
}
