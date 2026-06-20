import type { Meta, StoryObj } from '@storybook/react-vite'
import { Table } from '../components/Table'

const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  args: { density: 'default' },
  argTypes: {
    density: { control: 'inline-radio', options: ['default', 'compact'] },
  },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Compact: Story = { args: { density: 'compact' } }
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      <div>
        <strong>Default density</strong>
        <Table density="default" />
      </div>
      <div>
        <strong>Compact density</strong>
        <Table density="compact" />
      </div>
    </div>
  ),
}
