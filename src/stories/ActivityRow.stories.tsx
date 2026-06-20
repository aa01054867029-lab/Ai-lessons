import type { Meta, StoryObj } from '@storybook/react-vite'
import { ActivityRow } from '../components/ActivityRow'

const meta = {
  title: 'Components/ActivityRow',
  component: ActivityRow,
  tags: ['autodocs'],
  args: { type: 'approval_made', description: 'Сделка подтверждена', timestamp: 'Только что' },
  argTypes: {
    type: { control: 'inline-radio', options: ['alert_processed', 'approval_made', 'kyc_verified', 'system'] },
    description: { control: 'text' },
    timestamp: { control: 'text' },
  },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof ActivityRow>

export default meta

type Story = StoryObj<typeof meta>

export const ApprovalMade: Story = {}
export const AlertProcessed: Story = { args: { type: 'alert_processed', description: 'Требуется проверка риска', timestamp: '1 мин назад' } }
export const KycVerified: Story = { args: { type: 'kyc_verified', description: 'KYC прошла успешно', timestamp: '2 часа назад' } }
export const System: Story = { args: { type: 'system', description: 'Системное уведомление о задаче', timestamp: 'Сейчас' } }
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      {['alert_processed', 'approval_made', 'kyc_verified', 'system'].map((type) => (
        <ActivityRow key={type} type={type as any} description={`Пример состояния ${type.replace('_', ' ')}`} />
      ))}
    </div>
  ),
}
