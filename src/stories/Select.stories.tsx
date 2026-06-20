import type { Meta, StoryObj } from '@storybook/react-vite'
import { Select } from '../components/Select'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  args: { state: 'default' },
  argTypes: {
    state: { control: 'inline-radio', options: ['default', 'focus', 'error', 'disabled'] },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Focus: Story = { args: { state: 'focus' } }
export const Error: Story = { args: { state: 'error' } }
export const Disabled: Story = { args: { state: 'disabled' } }

/** Все состояния рядом с подписями. */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, width: 260 }}>
      {(['default', 'focus', 'error', 'disabled'] as const).map((state) => (
        <div key={state} style={{ display: 'grid', gap: 6 }}>
          <span style={{ fontSize: 'var(--size-xs)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{state}</span>
          <Select state={state} />
        </div>
      ))}
    </div>
  ),
}

/** Select в контексте формы — с меткой, подсказкой и сообщением об ошибке. */
export const InFormContext: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'grid', gap: 24, maxWidth: 360 }}>
      <div style={{ display: 'grid', gap: 6 }}>
        <label style={{ fontSize: 'var(--size-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-default)' }}>
          Категория риска
        </label>
        <Select state="default" />
        <span style={{ fontSize: 'var(--size-xs)', color: 'var(--text-muted)' }}>Укажите уровень риска по клиенту</span>
      </div>
      <div style={{ display: 'grid', gap: 6 }}>
        <label style={{ fontSize: 'var(--size-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-default)' }}>
          Тип операции <span style={{ color: 'var(--text-error)' }}>*</span>
        </label>
        <Select state="error" />
        <span style={{ fontSize: 'var(--size-xs)', color: 'var(--text-error)' }}>Обязательное поле</span>
      </div>
      <div style={{ display: 'grid', gap: 6 }}>
        <label style={{ fontSize: 'var(--size-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-disabled)' }}>
          Валюта (заблокировано)
        </label>
        <Select state="disabled" />
      </div>
    </div>
  ),
}

/** Focus-ring крупно — проверка контраста и видимости обводки. */
export const FocusRingDetail: Story = {
  parameters: { layout: 'padded', backgrounds: { default: 'dark' } },
  render: () => (
    <div style={{ display: 'grid', gap: 16, background: 'var(--surface-subtle)', padding: 32, borderRadius: 'var(--radius-lg)' }}>
      <p style={{ margin: 0, fontSize: 'var(--size-sm)', color: 'var(--text-muted)' }}>
        Focus-ring через <code>color-mix(border-focus-ring 16%)</code> — нет hardcoded hex.
      </p>
      <Select state="focus" />
    </div>
  ),
}
