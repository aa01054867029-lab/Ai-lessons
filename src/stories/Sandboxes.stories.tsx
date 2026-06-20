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

const meta = {
  title: 'Sandboxes/Blocks',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<Record<string, unknown>>

export default meta

type Story = StoryObj<typeof meta>

export const ModalForm: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 24, padding: 24, maxWidth: 760 }}>
      <Modal title="Подтвердите действие" description="Проверьте данные и нажмите подтвердить" primaryLabel="Подтвердить" secondaryLabel="Отменить" />
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button variant="secondary">Отмена</Button>
        <Button variant="primary">Сохранить</Button>
        <Badge variant="success" size="md" label="Новый" />
      </div>
    </div>
  ),
}

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

export const DataFeedback: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 24, maxWidth: 760 }}>
      <Table density="default" />
      <div style={{ display: 'grid', gap: 16 }}>
        <Toast type="success" />
        <Toast type="warning" />
        <Toast type="error" />
      </div>
      <div style={{ padding: 16, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', background: 'var(--surface-default)' }}>
        <Tooltip content="Содержимое подсказки" />
      </div>
    </div>
  ),
}
