import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '../components/Badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: { variant: 'success', size: 'md', label: 'Готово' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['success', 'warning', 'error'] },
    size: { control: 'inline-radio', options: ['sm', 'md'] },
    label: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Success: Story = { args: { variant: 'success', label: 'Успех' } }
export const Warning: Story = { args: { variant: 'warning', label: 'Внимание' } }
export const Error: Story = { args: { variant: 'error', label: 'Ошибка' } }
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      {['success', 'warning', 'error'].map((variant) => (
        <div key={variant} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Badge variant={variant as any} size="sm" label={variant} />
          <Badge variant={variant as any} size="md" label={`${variant} — средний`} />
        </div>
      ))}
    </div>
  ),
}
