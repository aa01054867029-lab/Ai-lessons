import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../components/Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: { variant: 'primary', size: 'md', loading: false, disabled: false, children: 'Создать заявку' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'ghost'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = { args: { variant: 'primary', children: 'Подтвердить' } }
export const Secondary: Story = { args: { variant: 'secondary', children: 'Отклонить' } }
export const Ghost: Story = { args: { variant: 'ghost', children: 'Подробнее' } }
export const Loading: Story = { args: { variant: 'primary', loading: true, children: 'Сохраняем...' } }
export const Disabled: Story = { args: { disabled: true, children: 'Заблокировано' } }
export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(3, max-content)' }}>
      {['primary', 'secondary', 'ghost'].map((variant) => (
        <div key={variant} style={{ display: 'grid', gap: 8 }}>
          <strong style={{ textTransform: 'capitalize' }}>{variant}</strong>
          <Button variant={variant as any} size="sm">{variant === 'primary' ? 'Подтвердить' : variant === 'secondary' ? 'Отклонить' : 'Подробнее'}</Button>
          <Button variant={variant as any} size="md">{variant === 'primary' ? 'Подтвердить' : variant === 'secondary' ? 'Отклонить' : 'Подробнее'}</Button>
          <Button variant={variant as any} size="lg">{variant === 'primary' ? 'Подтвердить' : variant === 'secondary' ? 'Отклонить' : 'Подробнее'}</Button>
        </div>
      ))}
    </div>
  ),
}
