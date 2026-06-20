import type { Meta, StoryObj } from '@storybook/react-vite'
import { CommentItem } from '../components/CommentItem'

const meta = {
  title: 'Components/CommentItem',
  component: CommentItem,
  tags: ['autodocs'],
  args: { author: 'Марина Соколова', role: 'CO', time: '5 минут назад', message: 'Проверено. Требуется уточнение по клиенту.' },
  argTypes: {
    author: { control: 'text' },
    role: { control: 'text' },
    time: { control: 'text' },
    message: { control: 'text' },
  },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof CommentItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
