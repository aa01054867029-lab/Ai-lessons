import type { Meta, StoryObj } from '@storybook/react-vite'
import { Toast } from '../components/Toast'

const meta = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: { type: 'success' },
  argTypes: {
    type: { control: 'inline-radio', options: ['success', 'error', 'warning'] },
  },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Toast>

export default meta

type Story = StoryObj<typeof meta>

export const Success: Story = {}
export const Error: Story = { args: { type: 'error' } }
export const Warning: Story = { args: { type: 'warning' } }

/** Все три типа рядом — матрица Type. */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12, maxWidth: 480 }}>
      {(['success', 'error', 'warning'] as const).map((type) => (
        <Toast key={type} type={type} />
      ))}
    </div>
  ),
}

/** Стек уведомлений — несколько toast одновременно (типичный паттерн системы нотификаций). */
export const StackedNotifications: Story = {
  render: () => (
    <div
      style={{
        position: 'relative',
        display: 'grid',
        gap: 8,
        maxWidth: 480,
        padding: 24,
        background: 'var(--surface-subtle)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-default)',
      }}
    >
      <p style={{ margin: '0 0 12px', fontSize: 'var(--size-xs)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        Очередь уведомлений
      </p>
      <Toast type="error" />
      <Toast type="warning" />
      <Toast type="success" />
    </div>
  ),
}

/** Узкий контейнер — проверка min-width 320px и переноса текста. */
export const NarrowContainer: Story = {
  render: () => (
    <div style={{ width: 340 }}>
      <Toast type="warning" />
    </div>
  ),
}

/** Проверка видимости левой полосы (bar) — align-self: stretch должен растянуть бар на высоту контента. */
export const BarVisibilityCheck: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, maxWidth: 480 }}>
      <p style={{ margin: 0, fontSize: 'var(--size-sm)', color: 'var(--text-muted)' }}>
        Левая полоса (<code>align-self: stretch</code>) должна быть видна на всю высоту тоста.
      </p>
      {(['success', 'error', 'warning'] as const).map((type) => (
        <Toast key={type} type={type} />
      ))}
    </div>
  ),
}
