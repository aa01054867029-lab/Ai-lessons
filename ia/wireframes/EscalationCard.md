# EscalationCard

**Размер:** mobile 375×812
**Назначение:** Карточка эскалации к CEO — запрос PM + отказ CO + Override/Поддержать блокировку (F15). Открывается из уведомления Email/Slack.

---

## Секции (сверху вниз, single-column, скроллируется)

### MobileHeader (высота 56px, горизонтальный Auto Layout, padding 16px)
- Лого-текст «ComplyFlow» (левый край, Inter Medium, 16px)
- Аватар-плейсхолдер 32×32 + «CEO» (правый край)

### EscalationBanner (горизонтальный Auto Layout, padding 16px, фон #F7F7F7)
- Прямоугольник-плейсхолдер 24×24 (иконка предупреждения)
- Вертикальный стек:
  - «Требуется ваше решение» (Inter Medium, 15px)
  - «Запрос #12 · эскалирован Дмитрием Соколовым · 10.05.2026, 09:15» (Inter Regular, 12px)

### RequestBlock (вертикальный Auto Layout, padding 16px, itemSpacing 12px)
- Заголовок (Inter Medium, 14px): «Что запросил Product Manager»
- Карточка (padding 12px, фон #F7F7F7):
  - «Дмитрий Соколов · Product Manager» (Inter Medium, 13px)
  - «Изменить порог правила F07: с 600 000 ₽ до 800 000 ₽» (Inter Regular, 13px)
  - «Обоснование: 60% ложных срабатываний по B2B-зарплатным операциям» (Inter Regular, 12px)

### CODecisionBlock (вертикальный Auto Layout, padding 16px, itemSpacing 12px)
- Заголовок (Inter Medium, 14px): «Решение Compliance Officer»
- Карточка (padding 12px, фон #F7F7F7):
  - «Марина Ковалёва · Compliance Officer» (Inter Medium, 13px)
  - Статус: «Отклонено» (Inter Medium, 13px)
  - «Обоснование: 115-ФЗ, ст. 7 п. 2 — пороговые операции от 600 000 ₽ подлежат обязательному контролю. Изменение порога без согласования с регулятором создаёт правовой риск.» (Inter Regular, 12px)
  - «Отклонено 10.05.2026 в 08:58» (Inter Regular, 11px)

### RegulatoryContext (вертикальный Auto Layout, padding 16px, itemSpacing 8px)
- Заголовок (Inter Medium, 14px): «Контекст для принятия решения»
- Текст (Inter Regular, 13px): «Поддержать блокировку: CO остаётся в рамках 115-ФЗ, PM не получает изменение.»
- Текст (Inter Regular, 13px): «Override: вы принимаете бизнес-риск на себя. Решение фиксируется в Audit Trail с меткой «CEO override» и может быть запрошено аудитором ЦБ.»

### DecisionPanel (вертикальный Auto Layout, padding 16px, itemSpacing 12px)
- Заголовок (Inter Medium, 14px): «Ваше решение»
- Кнопка на всю ширину (375−32=343px): «Поддержать блокировку»
- Кнопка на всю ширину: «Override — принять риск»
- Поле ввода на всю ширину (Inter Regular, 13px, высота 80px): «Обоснование override (обязательно)…»
  - Подпись под полем: «Это поле обязательно при Override. Минимум 20 символов.»

### AuditNote (padding 16px)
- Текст (Inter Regular, 11px): «Решение будет зафиксировано в Audit Trail с датой, ролью CEO и текстом обоснования. Запись неизменяема.»

---

## Пустое состояние / ошибка
- Вертикальный стек по центру экрана:
  - Прямоугольник-плейсхолдер 56×56
  - «Эскалация уже решена» (Inter Medium, 16px)
  - «Марина Ковалёва приняла решение до вас» (Inter Regular, 13px)
