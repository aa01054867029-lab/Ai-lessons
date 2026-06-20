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

/** Обе плотности рядом — сравнение высоты строк. */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: 'var(--size-sm)', color: 'var(--text-muted)' }}>Default density</p>
        <Table density="default" />
      </div>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: 'var(--size-sm)', color: 'var(--text-muted)' }}>Compact density</p>
        <Table density="compact" />
      </div>
    </div>
  ),
}

const longRows = [
  { name: 'ООО Международная финансовая группа «Горизонт»', status: 'Активен', amount: '₽ 4 850 000' },
  { name: 'АО Стройинвест и Партнёры', status: 'На проверке', amount: '₽ 1 230 000' },
  { name: 'ПАО Технологии Будущего', status: 'Приостановлен', amount: '₽ 780 500' },
  { name: 'ООО Агропром', status: 'Активен', amount: '₽ 620 000' },
  { name: 'ЗАО НефтеХимТрейд', status: 'Активен', amount: '₽ 9 100 000' },
  { name: 'ИП Смирнов Д.В.', status: 'Заблокирован', amount: '₽ 45 000' },
  { name: 'ООО Логистика Юг', status: 'Активен', amount: '₽ 340 000' },
  { name: 'АО КапиталГрупп', status: 'На проверке', amount: '₽ 2 700 000' },
]

/** Таблица с 8 строками и длинными именами клиентов — проверка переноса и overflow. */
export const LongContent: Story = {
  render: () => (
    <div style={{ maxWidth: 760 }}>
      <Table density="default" rows={longRows} />
    </div>
  ),
}

/** Та же таблица в компактном режиме — больше информации на экране. */
export const LongContentCompact: Story = {
  render: () => (
    <div style={{ maxWidth: 760 }}>
      <Table density="compact" rows={longRows} />
    </div>
  ),
}

/** Пустое состояние — нет данных для отображения. */
export const EmptyState: Story = {
  render: () => <Table density="default" rows={[]} />,
}

/** Крайний случай — одна строка. */
export const SingleRow: Story = {
  render: () => (
    <Table density="default" rows={[{ name: 'ООО Ромашка', status: 'Активен', amount: '₽ 120 000' }]} />
  ),
}
