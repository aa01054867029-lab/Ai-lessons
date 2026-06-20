import type { ComponentType } from 'react'
import { DashboardCO } from './DashboardCO/DashboardCO'
import { AlertQueue } from './AlertQueue/AlertQueue'
import { AlertCard } from './AlertCard/AlertCard'
import { ApprovalRequestCard } from './ApprovalRequestCard/ApprovalRequestCard'

export interface ScreenEntry {
  id: string
  name: string
  description: string
  route: string
  component: ComponentType
}

export const screens: ScreenEntry[] = [
  {
    id: 'dashboard-co',
    name: 'Dashboard CO',
    description: 'Рабочий стол compliance officer: метрики, алерты и история действий',
    route: '/dashboard-co',
    component: DashboardCO,
  },
  {
    id: 'alert-queue',
    name: 'Alert Queue',
    description: 'Очередь алертов с фильтрами, таблицей и пагинацией',
    route: '/alert-queue',
    component: AlertQueue,
  },
  {
    id: 'alert-card',
    name: 'Alert Card',
    description: 'Детальный экран алерта с оценкой риска и историей',
    route: '/alert-card',
    component: AlertCard,
  },
  {
    id: 'approval-request-card',
    name: 'Approval Request Card',
    description: 'Карточка запроса на согласование с деталями, решением и обсуждением',
    route: '/approval-request-card',
    component: ApprovalRequestCard,
  },
]
