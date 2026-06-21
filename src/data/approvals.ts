export type ApprovalStatus = 'warning' | 'success' | 'error'

export interface Comment {
  author: string
  role: string
  time: string
  message: string
}

export interface Approval {
  id: string
  initiator: string
  department: string
  amount: string
  counterparty: string
  counterpartyShort: string
  purpose: string
  period: string
  basis: string
  deadline: string
  status: ApprovalStatus
  submittedAt: string
  comments: Comment[]
}

export const approvals: Approval[] = [
  {
    id: '3847',
    initiator: 'Смирнова Елена (Казначейство)',
    department: 'Отдел казначейства',
    amount: '₽ 45 000 000',
    counterparty: 'ООО «СтройГрупп» (ИНН 7712345678)',
    counterpartyShort: 'ООО «СтройГрупп»',
    purpose: 'Авансовый платёж по договору подряда №88',
    period: '01.06.2026 – 31.08.2026',
    basis: 'Договор №88 от 10.05.2026',
    deadline: 'до 16.05.2026',
    status: 'warning',
    submittedAt: '13.05.2026',
    comments: [
      { author: 'Марина К.', role: 'CO', time: '15:30', message: 'Проверила историю операций клиента...' },
      { author: 'Марина К.', role: 'CO', time: '15:30', message: 'Проверила историю операций клиента...' },
      { author: 'Марина К.', role: 'CO', time: '15:30', message: 'Проверила историю операций клиента...' },
    ],
  },
]
