import type { Meta, StoryObj } from '@storybook/react-vite'
import { Dropdown } from '../components/Dropdown'

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  args: { state: 'collapsed', label: 'Фильтр' },
  argTypes: {
    state: { control: 'inline-radio', options: ['collapsed', 'expanded', 'disabled'] },
    label: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Dropdown>

export default meta

type Story = StoryObj<typeof meta>

export const Collapsed: Story = {}
export const Expanded: Story = { args: { state: 'expanded' } }
export const Disabled: Story = { args: { state: 'disabled' } }

/** Все три состояния рядом. */
export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'grid', gap: 24, width: 280 }}>
      {(['collapsed', 'expanded', 'disabled'] as const).map((state) => (
        <div key={state} style={{ display: 'grid', gap: 6 }}>
          <span style={{ fontSize: 'var(--size-xs)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{state}</span>
          <Dropdown state={state} />
        </div>
      ))}
    </div>
  ),
}

/** Разные метки — короткая, стандартная, длинная. */
export const LabelLengths: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'grid', gap: 16, width: 320 }}>
      {[
        { label: 'Тип' },
        { label: 'Период' },
        { label: 'Категория операции' },
      ].map(({ label }) => (
        <div key={label} style={{ display: 'grid', gap: 6 }}>
          <span style={{ fontSize: 'var(--size-xs)', color: 'var(--text-muted)' }}>{label.length} символов</span>
          <Dropdown state="collapsed" label={label} />
        </div>
      ))}
    </div>
  ),
}

/** Dropdown рядом с кнопкой — типичный паттерн панели фильтров. */
export const WithActionButton: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', padding: 16, background: 'var(--surface-default)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)' }}>
      <span style={{ fontSize: 'var(--size-sm)', color: 'var(--text-muted)', marginRight: 4 }}>Фильтры:</span>
      <Dropdown state="collapsed" label="Период" />
      <Dropdown state="expanded" label="Статус" />
      <Dropdown state="disabled" label="Валюта" />
    </div>
  ),
}

/** Panel shadow — проверка shadow-md на панели вариантов (foundation.md). */
export const PanelShadowCheck: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'grid', gap: 8, padding: 32, background: 'var(--surface-subtle)', borderRadius: 'var(--radius-lg)' }}>
      <p style={{ margin: '0 0 16px', fontSize: 'var(--size-sm)', color: 'var(--text-muted)' }}>
        Панель использует <code>shadow-md</code> (foundation.md: "Dropdown/Select panel → shadow-md").
      </p>
      <Dropdown state="expanded" label="Период" />
    </div>
  ),
}
