import type { Meta, StoryObj } from '@storybook/react-vite'
import { Alert } from '../components/Alert'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  args: { type: 'info' },
  argTypes: {
    type: { control: 'inline-radio', options: ['info', 'success', 'warning', 'error'] },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Info: Story = {}
export const Success: Story = { args: { type: 'success' } }
export const Warning: Story = { args: { type: 'warning' } }
export const Error: Story = { args: { type: 'error' } }
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      {['info', 'success', 'warning', 'error'].map((type) => (
        <Alert key={type} type={type as any} />
      ))}
    </div>
  ),
}
