import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tag } from '../components/Tag'

const meta = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  args: { variant: 'neutral', dismissible: false, label: 'Тег' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['neutral', 'success', 'warning', 'error'] },
    dismissible: { control: 'boolean' },
    label: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Tag>

export default meta

type Story = StoryObj<typeof meta>

export const Neutral: Story = {}
export const Success: Story = { args: { variant: 'success', label: 'Готово' } }
export const Warning: Story = { args: { variant: 'warning', label: 'Внимание' } }
export const Error: Story = { args: { variant: 'error', label: 'Ошибка' } }
export const Dismissible: Story = { args: { dismissible: true, label: 'Закрыть' } }
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      {['neutral', 'success', 'warning', 'error'].map((variant) => (
        <Tag key={variant} variant={variant as any} label={variant} dismissible />
      ))}
    </div>
  ),
}
