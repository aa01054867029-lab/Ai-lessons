import type { Meta, StoryObj } from '@storybook/react-vite'
import { Modal } from '../components/Modal'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: { title: 'Подтвердите действие', description: 'Вы действительно хотите завершить оценку заявки?', primaryLabel: 'Да, подтвердить', secondaryLabel: 'Отменить' },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    primaryLabel: { control: 'text' },
    secondaryLabel: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
