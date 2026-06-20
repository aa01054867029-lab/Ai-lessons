import { Badge } from '../../../components/Badge'
import { Checkbox } from '../../../components/Checkbox'
import { IconButton } from '../../../components/IconButton'
import './AlertQueueTable.css'

const rows = [
  { id: '2025-001', client: 'Client A', type: 'Payment', amount: '₽ 120,000', risk: 'Высокий', status: 'Новый', date: '14.05.2025' },
  { id: '2025-002', client: 'Client B', type: 'Transfer', amount: '₽ 78,500', risk: 'Средний', status: 'В работе', date: '13.05.2025' },
  { id: '2025-003', client: 'Client C', type: 'Withdrawal', amount: '₽ 34,900', risk: 'Низкий', status: 'Закрыт', date: '12.05.2025' },
  { id: '2025-004', client: 'Client D', type: 'Deposit', amount: '₽ 250,000', risk: 'Высокий', status: 'Эскалирован', date: '11.05.2025' },
  { id: '2025-005', client: 'Client E', type: 'Invoice', amount: '₽ 56,200', risk: 'Средний', status: 'В работе', date: '10.05.2025' },
  { id: '2025-006', client: 'Client F', type: 'Payment', amount: '₽ 90,100', risk: 'Низкий', status: 'Новый', date: '09.05.2025' },
  { id: '2025-007', client: 'Client G', type: 'Transfer', amount: '₽ 210,300', risk: 'Средний', status: 'Новый', date: '08.05.2025' },
  { id: '2025-008', client: 'Client H', type: 'Payment', amount: '₽ 142,750', risk: 'Высокий', status: 'В работе', date: '07.05.2025' },
]

const riskVariant = (risk: string) => {
  if (risk === 'Высокий') return 'error'
  if (risk === 'Средний') return 'warning'
  return 'success'
}

const statusVariant = (status: string) => {
  if (status === 'Новый' || status === 'В работе') return 'warning'
  if (status === 'Эскалирован') return 'error'
  return 'success'
}

export const AlertQueueTable = () => {
  return (
    <div className="alert-queue-table">
      <div className="alert-queue-row alert-queue-row--head">
        <div className="col-checkbox" />
        <div className="col-id">ID</div>
        <div className="col-client">Клиент</div>
        <div className="col-type">Тип</div>
        <div className="col-amount">Сумма</div>
        <div className="col-risk">Риск</div>
        <div className="col-date">Дата</div>
        <div className="col-status">Статус</div>
        <div className="col-actions" />
      </div>

      {rows.map((row) => (
        <div key={row.id} className="alert-queue-row">
          <div className="col-checkbox">
            <Checkbox checked="unchecked" />
          </div>
          <div className="col-id">{row.id}</div>
          <div className="col-client">{row.client}</div>
          <div className="col-type">{row.type}</div>
          <div className="col-amount">{row.amount}</div>
          <div className="col-risk"><Badge variant={riskVariant(row.risk)} size="sm" label={row.risk} /></div>
          <div className="col-date">{row.date}</div>
          <div className="col-status"><Badge variant={statusVariant(row.status)} size="sm" label={row.status} /></div>
          <div className="col-actions"><IconButton size="sm" /></div>
        </div>
      ))}
    </div>
  )
}
