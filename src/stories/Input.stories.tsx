import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '../components/Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: { state: 'default', placeholder: 'Введите текст' },
  argTypes: {
    state: { control: 'inline-radio', options: ['default', 'focus', 'error', 'disabled'] },
    placeholder: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Focus: Story = { args: { state: 'focus' } }
export const Error: Story = { args: { state: 'error', placeholder: 'Ошибка в поле' } }
export const Disabled: Story = { args: { state: 'disabled' } }
export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'grid', gap: 12, width: 320 }}>
      {['default', 'focus', 'error', 'disabled'].map((state) => (
        <div key={state}>
          <strong style={{ display: 'block', marginBottom: 6, textTransform: 'capitalize' }}>{state}</strong>
          <Input state={state as any} placeholder={state === 'error' ? 'Ошибка в поле' : 'Введите текст'} />
        </div>
      ))}
    </div>
  ),
}
