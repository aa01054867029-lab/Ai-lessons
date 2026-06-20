import { Badge } from '../../components/Badge'
import { Button } from '../../components/Button'
import { Breadcrumb } from '../../components/Breadcrumb'
import { Card } from '../../components/Card'
import { Navbar } from '../../components/Navbar'
import { Sidebar } from '../../components/Sidebar'
import { CommentItem } from '../../components/CommentItem'
import { ActivityRow } from '../../components/ActivityRow'
import { Textarea } from '../../components/Textarea'
import './ApprovalRequestCard.css'

const requestDetails = [
  ['Инициатор', 'Смирнова Елена (Казначейство)'],
  ['Подразделение', 'Отдел казначейства'],
  ['Сумма операции', '₽ 45 000 000'],
  ['Контрагент', 'ООО «СтройГрупп» (ИНН 7721234567)'],
  ['Назначение', 'Авансовый платёж по договору №888'],
  ['Период исполнения', '01.06.2026 – 31.06.2026'],
  ['Основание', 'Договор №888 от 10.05.2026'],
  ['Срок согласования', 'до 16.05.2026'],
]

const comments = [
  {
    author: 'Марина К.',
    role: 'CO',
    time: '15:30',
    message: 'Проверила историю операций клиента...',
  },
  {
    author: 'Марина К.',
    role: 'CO',
    time: '15:30',
    message: 'Проверила историю операций клиента...',
  },
  {
    author: 'Марина К.',
    role: 'CO',
    time: '15:30',
    message: 'Проверила историю операций клиента...',
  },
]

const historyItems = [
  {
    type: 'approval_made' as const,
    description: 'Алерт AML-001 закрыт',
    timestamp: '10 мин назад',
  },
  {
    type: 'approval_made' as const,
    description: 'Алерт AML-001 закрыт',
    timestamp: '10 мин назад',
  },
]

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className="approval-request-card-detail-row">
    <span className="approval-request-card-detail-label">{label}</span>
    <span className="approval-request-card-detail-value">{value}</span>
  </div>
)

export const ApprovalRequestCard = () => {
  return (
    <div className="approval-request-card-page">
      <Sidebar activeItem="Согласования" />
      <div className="approval-request-card-shell">
        <Navbar />
        <main className="approval-request-card-main">
          <section className="approval-request-card-top-row">
            <Breadcrumb
              items={['Главная', 'Документы', 'Алерт #001']}
              current="Запрос на согласование #3847"
            />
            <Button variant="ghost" size="md">Действие</Button>
          </section>

          <section className="approval-request-card-header">
            <div>
              <div className="approval-request-card-title-row">
                <h1>Запрос на согласование #3847</h1>
                <Badge variant="warning" size="sm" label="На ревью" />
              </div>
              <p className="approval-request-card-header-meta">
                Подана 13.05.2026 · 2 часа без ответа
              </p>
            </div>
            <div className="approval-request-card-header-actions">
              <Button variant="secondary" size="md">Действие</Button>
            </div>
          </section>

          <section className="approval-request-card-columns">
            <div className="approval-request-card-left">
              <Card title="Детали запроса" description="">
                <div className="approval-request-card-details-grid">
                  {requestDetails.map(([label, value]) => (
                    <DetailRow key={label} label={label} value={value} />
                  ))}
                </div>
              </Card>

              <Card title="Обсуждение" description="">
                <div className="approval-request-card-comments">
                  <div className="approval-request-card-comments-list">
                    {comments.map((comment, index) => (
                      <CommentItem
                        key={`${comment.author}-${comment.time}-${index}`}
                        author={comment.author}
                        role={comment.role}
                        time={comment.time}
                        message={comment.message}
                      />
                    ))}
                  </div>

                  <div className="approval-request-card-comments-footer">
                    <Textarea placeholder="Введите комментарий..." />
                    <div className="approval-request-card-comments-actions">
                      <Button variant="primary" size="md">Действие</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <aside className="approval-request-card-right">
              <Card title="Принять решение" description="">
                <div className="approval-request-card-decision-meta">
                  <div>
                    <span className="approval-request-card-decision-label">Сумма</span>
                    <p>₽ 45 000 000</p>
                  </div>
                  <div>
                    <span className="approval-request-card-decision-label">Контрагент</span>
                    <p>ООО «СтройГрупп»</p>
                  </div>
                  <div>
                    <span className="approval-request-card-decision-label">Срок</span>
                    <p className="approval-request-card-decision-danger">до 16.05.2026</p>
                  </div>
                </div>
                <div className="approval-request-card-decision-actions">
                  <Button variant="primary" size="md">Одобрить</Button>
                  <Button variant="secondary" size="md">Запросить информацию</Button>
                  <Button variant="ghost" size="md">Отклонить</Button>
                </div>
              </Card>

              <Card title="История согласования" description="">
                <div className="approval-request-card-history">
                  {historyItems.map((item, index) => (
                    <ActivityRow
                      key={`${item.description}-${index}`}
                      type={item.type}
                      description={item.description}
                      timestamp={item.timestamp}
                    />
                  ))}
                </div>
              </Card>
            </aside>
          </section>
        </main>
      </div>
    </div>
  )
}
