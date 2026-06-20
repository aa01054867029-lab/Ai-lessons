import type { Meta, StoryObj } from '@storybook/react-vite'
import { Dropdown } from '../components/Dropdown'

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  args: { state: 'collapsed' },
  argTypes: {
    state: { control: 'inline-radio', options: ['collapsed', 'expanded', 'disabled'] },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Dropdown>

export default meta

type Story = StoryObj<typeof meta>

export const Collapsed: Story = {}
export const Expanded: Story = { args: { state: 'expanded' } }
export const Disabled: Story = { args: { state: 'disabled' } }
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, width: 260 }}>
      {['collapsed', 'expanded', 'disabled'].map((state) => (
        <div key={state} style={{ display: 'grid', gap: 8 }}>
          <strong style={{ textTransform: 'capitalize' }}>{state}</strong>
          <Dropdown state={state as any} />
        </div>
      ))}
    </div>
  ),
}
