import type { Meta, StoryObj } from '@storybook/react-vite'
import { StatCard } from '../components/StatCard'

const meta = {
  title: 'Components/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  args: { label: 'Доход', value: '₽ 2.3M', trendLabel: 'Рост 11%', trendVariant: 'success' },
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    trendLabel: { control: 'text' },
    trendVariant: { control: 'inline-radio', options: ['success', 'warning', 'error', 'info'] },
  },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof StatCard>

export default meta

type Story = StoryObj<typeof meta>

export const Success: Story = {}
export const Warning: Story = { args: { trendVariant: 'warning', trendLabel: 'Внимание: нестабильность' } }
export const Error: Story = { args: { trendVariant: 'error', trendLabel: 'Падение 4%' } }
export const Info: Story = { args: { trendVariant: 'info', trendLabel: 'Статус системы' } }
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, width: 320 }}>
      {['success', 'warning', 'error', 'info'].map((variant) => (
        <StatCard key={variant} label="Доход" value="₽ 2.3M" trendVariant={variant as any} trendLabel={`Статус ${variant}`} />
      ))}
    </div>
  ),
}
