import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from '../components/Card'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: { type: 'default', state: 'default', title: 'Заголовок карты', description: 'Краткое описание статуса запроса.' },
  argTypes: {
    type: { control: 'inline-radio', options: ['default', 'interactive'] },
    state: { control: 'inline-radio', options: ['default', 'hover', 'selected'] },
    title: { control: 'text' },
    description: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Interactive: Story = { args: { type: 'interactive' } }
export const Selected: Story = { args: { type: 'interactive', state: 'selected' } }
export const Hover: Story = { args: { type: 'default', state: 'hover' } }
export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(3, minmax(220px,1fr))' }}>
      {['default', 'interactive'].map((type) => (
        <div key={type} style={{ display: 'grid', gap: 8 }}>
          <strong style={{ textTransform: 'capitalize' }}>{type}</strong>
          {['default', 'hover', 'selected'].map((state) => (
            <Card key={state} type={type as any} state={state as any} />
          ))}
        </div>
      ))}
    </div>
  ),
}
