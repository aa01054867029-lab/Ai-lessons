import type { Meta, StoryObj } from '@storybook/react-vite'
import { useMemo } from 'react'

const meta = {
  title: 'Foundation/Tokens',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<Record<string, unknown>>

export default meta

type Story = StoryObj<typeof meta>

const palette = [
  '--accent-100','--accent-300','--accent-500','--accent-700','--accent-900',
  '--gray-00','--gray-50','--gray-100','--gray-200','--gray-300','--gray-500','--gray-700','--gray-900','--gray-950',
  '--success-500','--warning-500','--error-500','--info-500',
]
const semantics = [
  '--surface-default','--surface-subtle','--surface-raised',
  '--surface-action-primary','--surface-action-primary-hover','--surface-action-primary-loading',
  '--surface-action-secondary','--surface-action-secondary-hover','--surface-action-ghost-hover',
  '--surface-danger','--surface-interactive-hover','--surface-interactive-selected','--surface-disabled',
  '--text-default','--text-muted','--text-disabled','--text-on-action','--text-link',
  '--text-error','--text-success','--text-warning',
  '--border-default','--border-strong','--border-focus','--border-focus-ring','--border-error',
  '--bg-success','--bg-warning','--bg-error','--bg-info',
  '--bg-success-subtle','--bg-warning-subtle','--bg-error-subtle',
]
const typographyTokens = [
  '--size-xs','--size-sm','--size-base','--size-lg','--size-xl','--size-2xl','--size-3xl','--size-4xl',
  '--weight-regular','--weight-medium','--weight-semibold','--weight-bold',
  '--line-height-base','--letter-spacing-tight','--letter-spacing-label',
]

const textStyles: { name: string; cls: string; sample: string }[] = [
  { name: 'display/4xl', cls: 'ds-display-4xl', sample: 'ComplyFlow' },
  { name: 'display/3xl', cls: 'ds-display-3xl', sample: 'Панель управления' },
  { name: 'heading/2xl', cls: 'ds-heading-2xl', sample: 'Алерты и риски' },
  { name: 'heading/xl',  cls: 'ds-heading-xl',  sample: 'Запрос на согласование' },
  { name: 'heading/lg',  cls: 'ds-heading-lg',  sample: 'Детали клиента' },
  { name: 'body/base',   cls: 'ds-body-base',   sample: 'Основной текст описания запроса' },
  { name: 'body/sm',     cls: 'ds-body-sm',     sample: 'Вспомогательная информация и статус' },
  { name: 'label/base',  cls: 'ds-label-base',  sample: 'Подтвердить · Отклонить' },
  { name: 'label/sm',    cls: 'ds-label-sm',    sample: 'Метка поля · Подсказка' },
  { name: 'label/xs',    cls: 'ds-label-xs',    sample: 'HIGH RISK · PENDING' },
]

const getValue = (token: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(token).trim()

const sectionStyle: React.CSSProperties = {
  display: 'grid', gap: 16, padding: 20,
  border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)',
  background: 'var(--surface-default)',
}
const gridStyle: React.CSSProperties = {
  display: 'grid', gap: 12,
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
}
const cardStyle: React.CSSProperties = {
  padding: 12, borderRadius: 'var(--radius-sm)',
  border: '1px solid var(--border-default)', background: 'var(--surface-subtle)',
}

/** Примитивные токены — палитра, тени, радиусы, отступы */
export const PrimitiveTokens: Story = {
  render: () => {
    const values = useMemo(() => palette.map((t) => ({ t, v: getValue(t) })), [])
    return (
      <section style={sectionStyle}>
        <h2 style={{ margin: 0 }}>Primitive tokens</h2>
        <div style={gridStyle}>
          {values.map(({ t, v }) => (
            <div key={t} style={cardStyle}>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>{t}</div>
              <div style={{ minHeight: 40, borderRadius: 4, background: `var(${t})`, border: '1px solid var(--border-default)' }} />
              <div style={{ marginTop: 8, fontSize: 11, fontFamily: 'monospace' }}>{v || '—'}</div>
            </div>
          ))}
        </div>
      </section>
    )
  },
}

/** Семантические токены — surface, text, border, bg */
export const SemanticTokens: Story = {
  render: () => {
    const values = useMemo(() => semantics.map((t) => ({ t, v: getValue(t) })), [])
    return (
      <section style={sectionStyle}>
        <h2 style={{ margin: 0 }}>Semantic tokens</h2>
        <div style={gridStyle}>
          {values.map(({ t, v }) => (
            <div key={t} style={cardStyle}>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>{t}</div>
              <div style={{ minHeight: 40, borderRadius: 4, background: `var(${t})`, border: '1px solid var(--border-default)' }} />
              <div style={{ marginTop: 8, fontSize: 11, fontFamily: 'monospace' }}>{v || '—'}</div>
            </div>
          ))}
        </div>
      </section>
    )
  },
}

/** Токены типографики — размеры, веса, межстрочный, трекинг */
export const TypographyTokens: Story = {
  render: () => {
    const values = useMemo(() => typographyTokens.map((t) => ({ t, v: getValue(t) })), [])
    return (
      <section style={sectionStyle}>
        <h2 style={{ margin: 0 }}>Typography tokens</h2>
        <div style={{ display: 'grid', gap: 8 }}>
          {values.map(({ t, v }) => (
            <div key={t} style={{ ...cardStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'monospace' }}>{t}</span>
              <span style={{ fontSize: 12, fontFamily: 'monospace' }}>{v || '—'}</span>
            </div>
          ))}
        </div>
      </section>
    )
  },
}

/** Текстовые стили — каждый TextStyle из ds/ строкой-примером */
export const TextStyles: Story = {
  render: () => (
    <section style={sectionStyle}>
      <h2 style={{ margin: 0 }}>Text styles</h2>
      <div style={{ display: 'grid', gap: 4 }}>
        {textStyles.map(({ name, cls, sample }) => (
          <div
            key={name}
            style={{
              display: 'flex', alignItems: 'baseline', gap: 24,
              padding: '12px 16px',
              borderBottom: '1px solid var(--border-default)',
            }}
          >
            <span style={{ minWidth: 120, fontSize: 11, color: 'var(--text-muted)', fontFamily: 'monospace', flexShrink: 0 }}>
              {name}
            </span>
            <span className={cls} style={{ color: 'var(--text-default)' }}>{sample}</span>
          </div>
        ))}
      </div>
    </section>
  ),
}
