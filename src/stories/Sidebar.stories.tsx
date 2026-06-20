import type { Meta, StoryObj } from '@storybook/react-vite'
import { Sidebar } from '../components/Sidebar'

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  args: { activeItem: 'Dashboard' },
  argTypes: {
    activeItem: { control: { type: 'select' }, options: ['Dashboard', 'Approvals', 'Clients', 'Reports'] },
  },
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const ApprovalsActive: Story = { args: { activeItem: 'Approvals' } }
export const ClientsActive: Story = { args: { activeItem: 'Clients' } }
