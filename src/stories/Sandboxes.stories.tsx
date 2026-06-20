import type { Meta, StoryObj } from '@storybook/react-vite'
import { Modal } from '../components/Modal'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Badge } from '../components/Badge'
import { Navbar } from '../components/Navbar'
import { Tabs } from '../components/Tabs'
import { Breadcrumb } from '../components/Breadcrumb'
import { Pagination } from '../components/Pagination'
import { Table } from '../components/Table'
import { Toast } from '../components/Toast'
import { Tooltip } from '../components/Tooltip'
import { Select } from '../components/Select'
import { Dropdown } from '../components/Dropdown'
import { Textarea } from '../components/Textarea'
import { Alert } from '../components/Alert'

const meta = {
  title: 'Sandboxes/Blocks',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<Record<string, unknown>>

export default meta

type Story = StoryObj<typeof meta>

/** Модальное окно с заголовком, Input и кнопками — как компоненты ведут себя в связке. */
export const ModalForm: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 24, padding: 24, maxWidth: 560 }}>
      <Modal
        title="Подтвердите согласование"
        description="Проверьте данные запроса перед отправкой на утверждение."
        primaryLabel="Подтвердить"
        secondaryLabel="Отменить"
      />
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <Badge variant="success" size="md" label="Новый клиент" />
        <Badge variant="warning" size="md" label="Ожидает проверки" />
        <Button variant="secondary">Отмена</Button>
        <Button variant="primary">Сохранить</Button>
      </div>
    </div>
  ),
}

/** Форма с Input / Select / Dropdown + состояния ошибки + кнопки submit/cancel. */
export const FormBlock: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 20, padding: 24, maxWidth: 480, background: 'var(--surface-default)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-default)' }}>
      <h3 style={{ margin: 0, fontSize: 'var(--size-xl)', fontWeight: 'var(--weight-semibold)' }}>
        Новая заявка
      </h3>
      <div style={{ display: 'grid', gap: 8 }}>
        <label style={{ fontSize: 'var(--size-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-default)' }}>
          Название клиента
        </label>
        <Input state="default" placeholder="ООО Ромашка" />
      </div>
      <div style={{ display: 'grid', gap: 8 }}>
        <label style={{ fontSize: 'var(--size-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-default)' }}>
          ИНН (ошибка)
        </label>
        <Input state="error" placeholder="Неверный формат ИНН" />
        <span style={{ fontSize: 'var(--size-xs)', color: 'var(--text-error)' }}>Введите 10 или 12 цифр</span>
      </div>
      <div style={{ display: 'grid', gap: 8 }}>
        <label style={{ fontSize: 'var(--size-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-default)' }}>
          Категория риска
        </label>
        <Select state="default" />
      </div>
      <div style={{ display: 'grid', gap: 8 }}>
        <label style={{ fontSize: 'var(--size-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-default)' }}>
          Период
        </label>
        <Dropdown state="collapsed" label="Выберите период" />
      </div>
      <div style={{ display: 'grid', gap: 8 }}>
        <label style={{ fontSize: 'var(--size-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-default)' }}>
          Комментарий
        </label>
        <Textarea state="default" hint="Не более 500 символов" />
      </div>
      <Alert type="info" />
      <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
        <Button variant="secondary">Отменить</Button>
        <Button variant="primary">Отправить заявку</Button>
      </div>
    </div>
  ),
}

/** Navbar + Breadcrumb + Tabs + Pagination в одном контексте навигации. */
export const NavigationPanel: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      <Navbar />
      <Breadcrumb />
      <Tabs />
      <Pagination />
    </div>
  ),
}

/** Table + Toast × 3 типа + Tooltip — данные и обратная связь. */
export const DataFeedback: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 24, maxWidth: 760 }}>
      <Table density="default" />
      <div style={{ display: 'grid', gap: 12 }}>
        <Toast type="success" />
        <Toast type="warning" />
        <Toast type="error" />
      </div>
      <div style={{ padding: 16, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', background: 'var(--surface-default)' }}>
        <Tooltip content="Кликните, чтобы увидеть детали запроса" />
      </div>
    </div>
  ),
}
