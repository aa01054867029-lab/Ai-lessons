import { useState, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge } from '../../components/Badge'
import { Button } from '../../components/Button'
import { Breadcrumb } from '../../components/Breadcrumb'
import { Navbar } from '../../components/Navbar'
import { Sidebar } from '../../components/Sidebar'
import { ActivityRow } from '../../components/ActivityRow'
import { Textarea } from '../../components/Textarea'
import { useToast } from '../../context/ToastContext'
import './AlertCard.css'

const transactionRows: [string, string][] = [
  ['Сумма', '₽ 2 500 000'],
  ['Дата', '14.05.2026 11:47'],
  ['Тип', 'Исходящий перевод'],
  ['Контрагент', 'ООО «Транзит» (ИНН 7701234567)'],
  ['Назначение', 'Оплата по договору №142'],
  ['Счёт отправителя', '40702810XXXXXXXX1234'],
  ['Банк контрагента', 'АО «Мираторг Банк»'],
]

const amlFlags: [string, 'error' | 'warning'][] = [
  ['Крупная транзакция (>600 тыс. руб.)', 'error'],
  ['Контрагент в списке наблюдения', 'error'],
  ['Нетипичная активность для клиента', 'warning'],
  ['Цепочка транзакций через несколько счетов', 'warning'],
]

const clientRows: [string, string][] = [
  ['ФИО', 'Иванов Андрей Петрович'],
  ['ИНН', '772345678901'],
  ['КЮЛ / КФЛ', 'Физическое лицо'],
  ['Сегмент', 'Премиум'],
  ['Дата открытия счёта', '12.03.2019'],
  ['Риск-профиль клиента', 'Средний'],
  ['Предыдущие алерты', '3 (последний: AML-0891)'],
]

const activityItems: { type: 'alert_processed' | 'approval_made' | 'system'; description: string; timestamp: string }[] = [
  { type: 'alert_processed', description: 'Алерт AML-001 закрыт',  timestamp: '10 мин назад' },
  { type: 'approval_made',   description: 'Запрос #456 одобрен',    timestamp: '1 ч назад'    },
  { type: 'system',          description: 'Система обновлена',       timestamp: 'вчера'        },
]

const KVTable = ({ rows }: { rows: [string, string][] }) => (
  <>
    {rows.map(([label, value]) => (
      <div key={label} className="ac-kv-row">
        <span className="ac-kv-label">{label}</span>
        <span className="ac-kv-value">{value}</span>
      </div>
    ))}
  </>
)

const DetailCard = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="ac-card">
    <p className="ac-card-title">{title}</p>
    <div className="ac-card-divider" />
    {children}
  </div>
)

export const AlertCard = () => {
  const navigate = useNavigate()
  const { show } = useToast()
  const [comment, setComment] = useState('')

  const handleClose = () => {
    show('success', 'Алерт закрыт', 'AML-1042 переведён в архив')
    setTimeout(() => navigate('/alert-queue'), 1200)
  }

  const handleEscalate = () => {
    show('warning', 'Алерт эскалирован', 'Передан старшему compliance officer')
  }

  const handleComment = () => {
    if (!comment.trim()) {
      show('error', 'Комментарий пустой', 'Введите текст перед отправкой')
      return
    }
    show('success', 'Комментарий добавлен')
    setComment('')
  }

  return (
    <div className="alert-card-page">
      <Navbar />
      <div className="alert-card-body">
        <Sidebar activeItem="Алерты" />
        <main className="alert-card-main">

          <Breadcrumb
            items={['Главная', 'Алерты', 'Очередь алертов']}
            current="Алерт AML-1042"
          />

          <div className="ac-alert-header">
            <div className="ac-title-group">
              <span className="ac-title">Алерт AML-1042</span>
              <Badge variant="error"   size="sm" label="Отклонено" />
              <Badge variant="warning" size="sm" label="На ревью"  />
              <span className="ac-meta">14 мая 2026, 14:32</span>
            </div>
            <div className="ac-header-btns">
              <Button variant="secondary" size="md" onClick={handleEscalate}>Эскалировать</Button>
              <Button variant="primary"   size="md" onClick={handleClose}>Закрыть алерт</Button>
            </div>
          </div>

          <div className="ac-columns">
            <div className="ac-left-col">

              <DetailCard title="Детали транзакции">
                <KVTable rows={transactionRows} />
              </DetailCard>

              <DetailCard title="Сработавшие правила AML">
                {amlFlags.map(([label, variant]) => (
                  <div key={label} className="ac-flag-row">
                    <span className="ac-flag-label">{label}</span>
                    <Badge
                      variant={variant}
                      size="sm"
                      label={variant === 'error' ? 'Отклонено' : 'На ревью'}
                    />
                  </div>
                ))}
              </DetailCard>

              <DetailCard title="Информация о клиенте">
                <KVTable rows={clientRows} />
              </DetailCard>

            </div>

            <div className="ac-right-col">

              <div className="ac-card">
                <p className="ac-card-title">Оценка риска</p>
                <div className="ac-score-row">
                  <span className="ac-score-num">87</span>
                  <div className="ac-score-info">
                    <span className="ac-score-max">из 100</span>
                    <span className="ac-score-level">Высокий</span>
                  </div>
                </div>
                <div className="ac-risk-bar">
                  <div className="ac-risk-fill" style={{ width: '87%' }} />
                </div>
              </div>

              <DetailCard title="История действий">
                {activityItems.map((item) => (
                  <ActivityRow
                    key={item.description}
                    type={item.type}
                    description={item.description}
                    timestamp={item.timestamp}
                  />
                ))}
              </DetailCard>

              <div className="ac-card ac-comment-card">
                <p className="ac-card-title">Комментарий</p>
                <Textarea
                  placeholder="Введите комментарий…"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  hint=""
                />
                <Button variant="primary" size="md" onClick={handleComment}>Отправить</Button>
              </div>

            </div>
          </div>

        </main>
      </div>
    </div>
  )
}
