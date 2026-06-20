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
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12, width: 260 }}>
      {['default', 'focus', 'error', 'disabled'].map((state) => (
        <div key={state} style={{ display: 'grid', gap: 8 }}>
          <strong style={{ textTransform: 'capitalize' }}>{state}</strong>
          <Select state={state as any} />
        </div>
      ))}
    </div>
  ),
}
