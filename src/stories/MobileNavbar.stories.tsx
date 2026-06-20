import type { Meta, StoryObj } from '@storybook/react-vite'
import { MobileNavbar } from '../components/MobileNavbar'

const meta = {
  title: 'Components/MobileNavbar',
  component: MobileNavbar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof MobileNavbar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
