import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tooltip } from '../components/Tooltip'

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: { content: 'Подсказка по элементу интерфейса' },
  argTypes: {
    content: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithCustomText: Story = { args: { content: 'Дополнительная информация по кнопке' } }
