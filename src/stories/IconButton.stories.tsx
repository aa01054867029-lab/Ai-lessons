import type { Meta, StoryObj } from '@storybook/react-vite'
import { IconButton } from '../components/IconButton'

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  args: { state: 'default', size: 'md', disabled: false },
  argTypes: {
    state: { control: 'inline-radio', options: ['default', 'hover', 'disabled'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Hover: Story = { args: { state: 'hover' } }
export const Disabled: Story = { args: { state: 'disabled', disabled: true } }
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(3, max-content)' }}>
      {['sm', 'md', 'lg'].map((size) => (
        <div key={size} style={{ display: 'grid', gap: 8 }}>
          <strong style={{ textTransform: 'capitalize' }}>{size}</strong>
          {['default', 'hover', 'disabled'].map((state) => (
            <IconButton key={state} size={size as any} state={state as any} disabled={state === 'disabled'} />
          ))}
        </div>
      ))}
    </div>
  ),
}
