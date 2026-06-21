export type AlertRisk = 'error' | 'warning' | 'success'
export type AlertStatus = 'error' | 'warning' | 'success'

export interface Alert {
  id: string
  client: string
  type: string
  amount: string
  risk: AlertRisk
  date: string
  status: AlertStatus
}

export const alerts: Alert[] = [
  { id: 'AML-1042', client: 'Иванов А.П.',   type: 'Транзакция', amount: '₽ 2 500 000', risk: 'error',   date: '14.05.2026', status: 'warning' },
  { id: 'AML-1041', client: 'ООО «Транзит»', type: 'Клиент',     amount: '—',            risk: 'warning', date: '14.05.2026', status: 'success' },
  { id: 'AML-1040', client: 'Петрова М.С.',  type: 'Транзакция', amount: '₽ 750 000',    risk: 'success', date: '13.05.2026', status: 'success' },
  { id: 'AML-1039', client: 'ПАО «Финтех»', type: 'Контрагент', amount: '—',            risk: 'error',   date: '13.05.2026', status: 'warning' },
  { id: 'AML-1038', client: 'Сидоров К.Е.', type: 'Транзакция', amount: '₽ 1 200 000',  risk: 'warning', date: '12.05.2026', status: 'success' },
  { id: 'AML-1037', client: 'ООО «Логос»',  type: 'Клиент',     amount: '—',            risk: 'success', date: '12.05.2026', status: 'success' },
  { id: 'AML-1036', client: 'Козлов И.В.',  type: 'Транзакция', amount: '₽ 320 000',    risk: 'warning', date: '11.05.2026', status: 'warning' },
  { id: 'AML-1035', client: 'АО «Альфа»',   type: 'Контрагент', amount: '—',            risk: 'error',   date: '11.05.2026', status: 'error'   },
]

export const riskLabel: Record<AlertRisk, string>    = { error: 'Высокий', warning: 'Средний', success: 'Низкий'    }
export const statusLabel: Record<AlertStatus, string> = { error: 'Отклонено', warning: 'На ревью', success: 'Одобрено' }
