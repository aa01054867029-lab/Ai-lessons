import type { Meta, StoryObj } from '@storybook/react-vite'
import { Sidebar } from '../components/Sidebar'

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  args: { activeItem: 'Дашборд' },
  argTypes: {
    activeItem: {
      control: { type: 'select' },
      options: ['Дашборд', 'Алерты', 'Документы', 'Согласования', 'Настройки'],
    },
  },
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const AlertsActive: Story = { args: { activeItem: 'Алерты' } }
export const ApprovalsActive: Story = { args: { activeItem: 'Согласования' } }
export const SettingsActive: Story = { args: { activeItem: 'Настройки' } }
