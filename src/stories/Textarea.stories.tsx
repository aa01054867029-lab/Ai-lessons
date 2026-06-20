import type { Meta, StoryObj } from '@storybook/react-vite'
import { Textarea } from '../components/Textarea'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: { state: 'default', placeholder: 'Комментарий' },
  argTypes: {
    state: { control: 'inline-radio', options: ['default', 'focus', 'error', 'disabled'] },
    placeholder: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Focus: Story = { args: { state: 'focus' } }
export const Error: Story = { args: { state: 'error' } }
export const Disabled: Story = { args: { state: 'disabled' } }
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12, width: 320 }}>
      {['default', 'focus', 'error', 'disabled'].map((state) => (
        <div key={state} style={{ display: 'grid', gap: 8 }}>
          <strong style={{ textTransform: 'capitalize' }}>{state}</strong>
          <Textarea state={state as any} placeholder="Комментарий" />
        </div>
      ))}
    </div>
  ),
}
