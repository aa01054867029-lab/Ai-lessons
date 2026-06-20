import type { Meta, StoryObj } from '@storybook/react-vite'
import { Modal } from '../components/Modal'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    title: 'Подтвердите действие',
    description: 'Вы действительно хотите завершить оценку заявки?',
    primaryLabel: 'Да, подтвердить',
    secondaryLabel: 'Отменить',
  },
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

/** Базовый модал подтверждения действия. */
export const Default: Story = {}

/** Деструктивное действие — удаление / отзыв. Кнопка primary сигнализирует об опасности через контекст. */
export const DangerAction: Story = {
  args: {
    title: 'Заблокировать клиента?',
    description: 'Клиент ООО Ромашка будет заблокирован до завершения расследования. Все активные транзакции будут приостановлены.',
    primaryLabel: 'Заблокировать',
    secondaryLabel: 'Отменить',
  },
}

/** Длинный заголовок и описание — проверка переноса и ширины контейнера. */
export const LongContent: Story = {
  args: {
    title: 'Запрос на согласование №AML-2024-00831 требует вашего рассмотрения',
    description:
      'Клиент ПАО Технологии Будущего направил запрос на проведение операции на сумму ₽ 9 100 000. ' +
      'По результатам предварительного скоринга клиент получил оценку риска «Высокий». ' +
      'Пожалуйста, ознакомьтесь с деталями операции и примите решение о согласовании или отклонении запроса. ' +
      'Срок рассмотрения — до 24:00 текущего дня.',
    primaryLabel: 'Согласовать',
    secondaryLabel: 'Отклонить',
  },
}

/** Информационный модал без деструктивных действий. */
export const InfoOnly: Story = {
  args: {
    title: 'Что такое KYC-верификация?',
    description:
      'KYC (Know Your Customer) — обязательная процедура идентификации клиента. ' +
      'Включает проверку документов, подтверждение источника средств и оценку уровня риска. ' +
      'Завершение KYC открывает доступ к полному функционалу платформы.',
    primaryLabel: 'Понятно',
    secondaryLabel: 'Подробнее',
  },
}

/** Все варианты рядом на одном холсте. */
export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'grid', gap: 32, maxWidth: 560 }}>
      <Modal
        title="Подтвердите действие"
        description="Базовый сценарий подтверждения."
        primaryLabel="Подтвердить"
        secondaryLabel="Отменить"
      />
      <Modal
        title="Заблокировать клиента?"
        description="Деструктивное действие — требует явного намерения пользователя."
        primaryLabel="Заблокировать"
        secondaryLabel="Отменить"
      />
      <Modal
        title="Запрос на согласование №AML-2024-00831 требует вашего рассмотрения"
        description="Длинный заголовок и описание — проверка ширины и переноса строк в модальном окне."
        primaryLabel="Согласовать"
        secondaryLabel="Отклонить"
      />
    </div>
  ),
}
