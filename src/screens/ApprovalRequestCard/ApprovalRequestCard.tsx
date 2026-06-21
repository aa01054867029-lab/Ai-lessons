import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge } from '../../components/Badge'
import { Button } from '../../components/Button'
import { Breadcrumb } from '../../components/Breadcrumb'
import { Navbar } from '../../components/Navbar'
import { Sidebar } from '../../components/Sidebar'
import { CommentItem } from '../../components/CommentItem'
import { ActivityRow } from '../../components/ActivityRow'
import { Textarea } from '../../components/Textarea'
import { useToast } from '../../context/ToastContext'
import { approvals } from '../../data/approvals'
import type { Comment } from '../../data/approvals'
import './ApprovalRequestCard.css'

const approval = approvals[0]

const requestDetails: [string, string][] = [
  ['Инициатор',         approval.initiator],
  ['Подразделение',     approval.department],
  ['Сумма операции',    approval.amount],
  ['Контрагент',        approval.counterparty],
  ['Назначение',        approval.purpose],
  ['Период исполнения', approval.period],
  ['Основание',         approval.basis],
  ['Срок согласования', approval.deadline],
]

const historyItems = [
  { type: 'alert_processed' as const, description: 'Алерт AML-001 закрыт', timestamp: '10 мин назад' },
  { type: 'alert_processed' as const, description: 'Алерт AML-001 закрыт', timestamp: '10 мин назад' },
]

export const ApprovalRequestCard = () => {
  const navigate = useNavigate()
  const { show } = useToast()
  const [comments, setComments] = useState<Comment[]>(approval.comments)
  const [commentText, setCommentText] = useState('')

  const handleSendComment = () => {
    if (!commentText.trim()) {
      show('error', 'Комментарий пустой', 'Введите текст перед отправкой')
      return
    }
    const now = new Date()
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`
    setComments((prev) => [...prev, { author: 'Вы', role: 'CO', time, message: commentText.trim() }])
    setCommentText('')
    show('success', 'Комментарий добавлен')
  }

  const handleApprove = () => {
    show('success', 'Запрос одобрен', `Запрос #${approval.id} успешно согласован`)
    setTimeout(() => navigate('/alert-queue'), 1200)
  }

  const handleRequestInfo = () => {
    show('warning', 'Запрошена информация', 'Инициатору отправлен запрос на доп. данные')
  }

  const handleReject = () => {
    show('error', 'Запрос отклонён', `Запрос #${approval.id} отклонён`)
    setTimeout(() => navigate('/alert-queue'), 1200)
  }

  return (
    <div className="arc-page">
      <Navbar />
      <div className="arc-body">
        <Sidebar activeItem="Согласования" />
        <main className="arc-main">

          <Breadcrumb
            items={['Главная', 'Согласования']}
            current="Запрос #3847"
          />

          <div className="arc-request-header">
            <div className="arc-title-group">
              <span className="arc-title">Запрос на согласование #{approval.id}</span>
              <Badge variant="warning" size="sm" label="На ревью" />
              <span className="arc-meta">Подана {approval.submittedAt}</span>
            </div>
            <div className="arc-header-btns">
              <Button variant="ghost" size="md">Экспорт</Button>
            </div>
          </div>

          <div className="arc-columns">

            <div className="arc-left">

              <div className="arc-card">
                <p className="arc-card-title">Детали запроса</p>
                <div className="arc-divider" />
                {requestDetails.map(([label, value]) => (
                  <div key={label} className="arc-kv-row">
                    <span className="arc-kv-label">{label}</span>
                    <span className="arc-kv-value">{value}</span>
                  </div>
                ))}
              </div>

              <div className="arc-card arc-comments-card">
                <p className="arc-card-title">Обсуждение</p>
                <div className="arc-divider" />
                {comments.map((c, i) => (
                  <div key={i} className="arc-comment-block">
                    <CommentItem
                      author={c.author}
                      role={c.role}
                      time={c.time}
                      message={c.message}
                    />
                    <div className="arc-divider" />
                  </div>
                ))}
                <Textarea
                  placeholder="Введите комментарий…"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  hint=""
                />
                <div className="arc-send-row">
                  <Button variant="primary" size="md" onClick={handleSendComment}>Отправить</Button>
                </div>
              </div>

            </div>

            <div className="arc-right">

              <div className="arc-card arc-decision-card">
                <p className="arc-card-title">Принять решение</p>
                <div className="arc-divider" />
                <div className="arc-dec-info">
                  <p className="arc-dec-main">Сумма: {approval.amount}</p>
                  <p className="arc-dec-muted">Контрагент: {approval.counterpartyShort}</p>
                  <p className="arc-dec-danger">Срок: {approval.deadline}</p>
                </div>
                <div className="arc-divider" />
                <Button variant="primary"   size="md" onClick={handleApprove}>Одобрить</Button>
                <Button variant="secondary" size="md" onClick={handleRequestInfo}>Запросить данные</Button>
                <Button variant="ghost"     size="md" onClick={handleReject}>Отклонить</Button>
              </div>

              <div className="arc-card">
                <p className="arc-card-title">История согласования</p>
                <div className="arc-divider" />
                {historyItems.map((item, i) => (
                  <ActivityRow
                    key={i}
                    type={item.type}
                    description={item.description}
                    timestamp={item.timestamp}
                  />
                ))}
              </div>

            </div>

          </div>

        </main>
      </div>
    </div>
  )
}
