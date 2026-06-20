import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs } from '../components/Tabs'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: { state: 'default' },
  argTypes: {
    state: { control: 'inline-radio', options: ['default', 'alt', 'disabled'] },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Alt: Story = { args: { state: 'alt' } }
export const Disabled: Story = { args: { state: 'disabled' } }
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      {['default', 'alt', 'disabled'].map((state) => (
        <div key={state} style={{ display: 'grid', gap: 8 }}>
          <strong style={{ textTransform: 'capitalize' }}>{state}</strong>
          <Tabs state={state as any} />
        </div>
      ))}
    </div>
  ),
}
