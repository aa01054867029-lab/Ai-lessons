import './AlertsTable.css'

const rows = [
  { document: 'Алерт #2025-001', status: 'На ревью', date: '14.05.2025' },
  { document: 'Алерт #2025-002', status: 'Одобрено', date: '13.05.2025' },
  { document: 'Алерт #2025-003', status: 'Отклонено', date: '12.05.2025' },
]

export const AlertsTable = () => {
  return (
    <div className="alerts-table">
      <div className="alerts-row alerts-row--head">
        <div>Документ</div>
        <div>Статус</div>
        <div>Дата</div>
      </div>
      {rows.map((row) => (
        <div key={row.document} className="alerts-row">
          <div>{row.document}</div>
          <div>{row.status}</div>
          <div>{row.date}</div>
        </div>
      ))}
    </div>
  )
}
