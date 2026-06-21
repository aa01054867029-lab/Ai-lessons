import { useNavigate } from 'react-router-dom'
import { alerts, statusLabel } from '../../../data/alerts'
import './AlertsTable.css'

export const AlertsTable = () => {
  const navigate = useNavigate()
  const preview = alerts.slice(0, 3)

  return (
    <div className="alerts-table">
      <div className="alerts-row alerts-row--head">
        <div>Документ</div>
        <div>Статус</div>
        <div>Дата</div>
      </div>
      {preview.map((row) => (
        <div
          key={row.id}
          className="alerts-row alerts-row--clickable"
          onClick={() => navigate('/alert-card')}
        >
          <div className="alerts-cell--id">{row.id}</div>
          <div>{statusLabel[row.status]}</div>
          <div>{row.date}</div>
        </div>
      ))}
    </div>
  )
}
