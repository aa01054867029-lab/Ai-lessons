import { useNavigate } from 'react-router-dom'
import { Badge } from '../../../components/Badge'
import { Checkbox } from '../../../components/Checkbox'
import { IconButton } from '../../../components/IconButton'
import { alerts, riskLabel, statusLabel } from '../../../data/alerts'
import type { Alert } from '../../../data/alerts'
import './AlertQueueTable.css'

interface AlertQueueTableProps {
  data?: Alert[]
}

export const AlertQueueTable = ({ data = alerts }: AlertQueueTableProps) => {
  const navigate = useNavigate()

  if (data.length === 0) {
    return (
      <div className="aq-empty">
        <p className="aq-empty-text">Нет алертов по выбранным фильтрам</p>
      </div>
    )
  }

  return (
    <div className="aq-table">
      <div className="aq-row aq-row--head">
        <div className="aq-col-cb" />
        <div className="aq-col-id">ID</div>
        <div className="aq-col-client">Клиент</div>
        <div className="aq-col-type">Тип</div>
        <div className="aq-col-amount">Сумма</div>
        <div className="aq-col-risk">Риск</div>
        <div className="aq-col-date">Дата</div>
        <div className="aq-col-status">Статус</div>
        <div className="aq-col-act" />
      </div>

      {data.map((row) => (
        <div
          key={row.id}
          className="aq-row aq-row--clickable"
          onClick={() => navigate('/alert-card')}
        >
          <div className="aq-col-cb" onClick={(e) => e.stopPropagation()}>
            <Checkbox checked="unchecked" />
          </div>
          <div className="aq-col-id aq-id">{row.id}</div>
          <div className="aq-col-client">{row.client}</div>
          <div className="aq-col-type aq-muted">{row.type}</div>
          <div className="aq-col-amount">{row.amount}</div>
          <div className="aq-col-risk">
            <Badge variant={row.risk} size="sm" label={riskLabel[row.risk]} />
          </div>
          <div className="aq-col-date aq-muted">{row.date}</div>
          <div className="aq-col-status">
            <Badge variant={row.status} size="sm" label={statusLabel[row.status]} />
          </div>
          <div className="aq-col-act" onClick={(e) => e.stopPropagation()}>
            <IconButton size="sm" />
          </div>
        </div>
      ))}
    </div>
  )
}
