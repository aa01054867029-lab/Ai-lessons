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
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      {['success', 'error', 'warning'].map((type) => (
        <Toast key={type} type={type as any} />
      ))}
    </div>
  ),
}
