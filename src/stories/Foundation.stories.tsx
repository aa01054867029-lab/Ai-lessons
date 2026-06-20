import type { Meta, StoryObj } from '@storybook/react-vite'
import { useMemo } from 'react'

const meta = {
  title: 'Foundation/Tokens',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<Record<string, unknown>>

export default meta

type Story = StoryObj<typeof meta>

const palette = ['--accent-100','--accent-300','--accent-500','--accent-700','--accent-900','--gray-00','--gray-50','--gray-100','--gray-200','--gray-300','--gray-500','--gray-700','--gray-900','--gray-950','--success-500','--warning-500','--error-500','--info-500']
const semantics = ['--surface-default','--surface-subtle','--surface-raised','--surface-action-primary','--surface-action-primary-hover','--surface-action-primary-loading','--surface-action-secondary','--surface-action-secondary-hover','--surface-action-ghost-hover','--surface-danger','--surface-interactive-hover','--surface-interactive-selected','--surface-disabled','--text-default','--text-muted','--text-disabled','--text-on-action','--text-link','--text-error','--text-success','--text-warning','--border-default','--border-strong','--border-focus','--border-focus-ring','--border-error','--bg-success','--bg-warning','--bg-error','--bg-info','--bg-success-subtle','--bg-warning-subtle','--bg-error-subtle']
const typography = ['--size-xs','--size-sm','--size-base','--size-lg','--size-xl','--size-2xl','--size-3xl','--size-4xl','--weight-regular','--weight-medium','--weight-semibold','--weight-bold','--line-height-base','--letter-spacing-tight','--letter-spacing-label']

const getValue = (token: string) => getComputedStyle(document.documentElement).getPropertyValue(token).trim()

const sectionStyle: React.CSSProperties = { display: 'grid', gap: 10, padding: 12, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)' }
const gridStyle: React.CSSProperties = { display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }
const cardStyle: React.CSSProperties = { padding: 12, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-default)', background: 'var(--surface-default)' }

export const PrimitiveTokens: Story = {
  render: () => {
    const values = useMemo(() => palette.map((token) => ({ token, value: getValue(token) })), [])
    return (
      <section style={sectionStyle}>
        <h2>Primitive tokens</h2>
        <div style={gridStyle}>
          {values.map(({ token, value }) => (
            <div key={token} style={cardStyle}>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: 8 }}>{token}</div>
              <div style={{ minHeight: 40, borderRadius: 'var(--radius-sm)', background: `var(${token})` }} />
              <div style={{ marginTop: 8 }}>{value || '—'}</div>
            </div>
          ))}
        </div>
      </section>
    )
  },
}

export const SemanticTokens: Story = {
  render: () => {
    const values = useMemo(() => semantics.map((token) => ({ token, value: getValue(token) })), [])
    return (
      <section style={sectionStyle}>
        <h2>Semantic tokens</h2>
        <div style={gridStyle}>
          {values.map(({ token, value }) => (
            <div key={token} style={cardStyle}>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: 8 }}>{token}</div>
              <div style={{ minHeight: 40, borderRadius: 'var(--radius-sm)', background: `var(${token})` }} />
              <div style={{ marginTop: 8 }}>{value || '—'}</div>
            </div>
          ))}
        </div>
      </section>
    )
  },
}

export const Typography: Story = {
  render: () => {
    const values = useMemo(() => typography.map((token) => ({ token, value: getValue(token) })), [])
    return (
      <section style={sectionStyle}>
        <h2>Typography tokens</h2>
        <div style={{ display: 'grid', gap: 20 }}>
          {values.map(({ token, value }) => (
            <div key={token} style={cardStyle}>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: 8 }}>{token}</div>
              <div style={{ fontSize: token.endsWith('xl') ? 24 : token.endsWith('lg') ? 20 : token.endsWith('base') ? 16 : token.endsWith('sm') ? 14 : 12, lineHeight: 1.4, fontWeight: 'var(--weight-medium)' }}>
                Пример текста
              </div>
              <div style={{ marginTop: 8 }}>{value || '—'}</div>
            </div>
          ))}
        </div>
      </section>
    )
  },
}
