import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from '../components/Checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: { checked: 'unchecked', state: 'default', label: 'Подтвердить получение' },
  argTypes: {
    checked: { control: 'inline-radio', options: ['unchecked', 'checked'] },
    state: { control: 'inline-radio', options: ['default', 'hover', 'disabled'] },
    label: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Unchecked: Story = {}
export const Checked: Story = { args: { checked: 'checked' } }
export const Disabled: Story = { args: { state: 'disabled' } }
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      {['default', 'hover', 'disabled'].map((state) => (
        <div key={state} style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <div style={{ minWidth: 100, textTransform: 'capitalize' }}>{state}</div>
          <Checkbox state={state as any} label="Уведомление" />
          <Checkbox checked="checked" state={state as any} label="Уведомление" />
        </div>
      ))}
    </div>
  ),
}
