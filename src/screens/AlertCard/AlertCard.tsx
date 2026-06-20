import { Badge } from '../../components/Badge'
import { Button } from '../../components/Button'
import { Breadcrumb } from '../../components/Breadcrumb'
import { Card } from '../../components/Card'
import { Navbar } from '../../components/Navbar'
import { Sidebar } from '../../components/Sidebar'
import { ActivityRow } from '../../components/ActivityRow'
import { Textarea } from '../../components/Textarea'
import './AlertCard.css'

const transactionRows: [string, string][] = [
  ['Сумма', '₽ 1 250 000'],
  ['Дата', '14.05.2025'],
  ['Тип', 'Межбанковский перевод'],
  ['Контрагент', 'ООО «ПромТех»'],
  ['Назначение', 'Оплата услуги безопасности'],
  ['Счёт отправителя', '40817810099910004312'],
  ['Банк контрагента', 'Сбербанк'],
]

const amlFlags: [string, 'success' | 'warning' | 'error'][] = [
  ['Сумма выше порога', 'error'],
  ['Новый получатель', 'warning'],
  ['Открыт счет менее 3 мес.', 'warning'],
  ['Несоответствие юрисдикции', 'error'],
]

const clientRows: [string, string][] = [
  ['ФИО', 'Иванов Иван Иванович'],
  ['ИНН', '7707083893'],
  ['КЮЛ/КФЛ', 'ЮЛ'],
  ['Сегмент', 'Средний бизнес'],
  ['Дата открытия', '11.02.2023'],
  ['Риск-профиль', 'Высокий'],
  ['Предыдущие алерты', '3'],
]

const activityItems = [
  {
    type: 'alert_processed',
    description: 'Алерт AML-1042 создан системой',
    timestamp: '5 мин назад',
  },
  {
    type: 'approval_made',
    description: 'Запрос на проверку отправлен в команду KYC',
    timestamp: '22 мин назад',
  },
  {
    type: 'system',
    description: 'Система зафиксировала пересечение с черным списком',
    timestamp: '1 ч назад',
  },
]

const DetailTable = ({ rows }: { rows: [string, string][] }) => {
  return (
    <div className="alert-card-table">
      {rows.map(([label, value]) => (
        <div key={label} className="alert-card-table-row">
          <span className="alert-card-table-label">{label}</span>
          <span className="alert-card-table-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export const AlertCard = () => {
  return (
    <div className="alert-card-page">
      <Sidebar activeItem="Алерты" />
      <div className="alert-card-shell">
        <Navbar />

        <main className="alert-card-main">
          <Breadcrumb
            items={['Главная', 'Алерты', 'Очередь алертов']}
            current="Алерт AML-1042"
          />

          <section className="alert-card-header">
            <div className="alert-card-header-left">
              <div className="alert-card-title-group">
                <p className="alert-card-eyebrow">Алерт AML-1042</p>
                <h1>Детали алерта</h1>
              </div>
              <div className="alert-card-statuses">
                <Badge variant="error" size="sm" label="Высокий риск" />
                <Badge variant="warning" size="sm" label="Новый" />
              </div>
              <p className="alert-card-meta">14 мая 2025 · 10:32</p>
            </div>

            <div className="alert-card-actions">
              <Button variant="secondary" size="md">Закрыть</Button>
              <Button variant="primary" size="md">Принять в работу</Button>
            </div>
          </section>

          <section className="alert-card-columns">
            <div className="alert-card-left-col">
              <Card title="Детали транзакции" description="">
                <DetailTable rows={transactionRows} />
              </Card>

              <Card title="AML-флаги" description="">
                <div className="alert-card-flags">
                  {amlFlags.map(([label, variant]) => (
                    <div key={label} className="alert-card-flag-row">
                      <span>{label}</span>
                      <Badge variant={variant as 'success' | 'warning' | 'error'} size="sm" label={variant === 'error' ? 'Высокий' : 'Средний'} />
                    </div>
                  ))}
                </div>
              </Card>

              <Card title="Информация о клиенте" description="">
                <DetailTable rows={clientRows} />
              </Card>
            </div>

            <aside className="alert-card-right-col">
              <Card title="Оценка риска" description="">
                <div className="alert-card-risk-score">
                  <span className="risk-score-value">87</span>
                  <span className="risk-score-max">из 100</span>
                  <span className="risk-result">Высокий</span>
                </div>
                <div className="alert-card-progress">
                  <div className="alert-card-progress-bar" />
                </div>
              </Card>

              <Card title="История" description="">
                <div className="alert-card-activity-list">
                  {activityItems.map((item) => (
                    <ActivityRow
                      key={item.description}
                      type={item.type as any}
                      description={item.description}
                      timestamp={item.timestamp}
                    />
                  ))}
                </div>
              </Card>

              <Card title="Комментарий" description="">
                <Textarea placeholder="Добавьте комментарий…" />
                <Button variant="primary" size="md">Добавить</Button>
              </Card>
            </aside>
          </section>
        </main>
      </div>
    </div>
  )
}
