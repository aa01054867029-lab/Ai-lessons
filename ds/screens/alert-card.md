# Screen: AlertCard — Карточка алерта

**Размер:** 1440px (desktop)  
**Figma:** страница `wireframes` → секция `Screens` → `Screen/AlertCard`

---

## Назначение

Детальный просмотр и работа с конкретным алертом. Двухколоночный макет: левая колонка — данные алерта, правая — оценка риска, история и поле для комментария.

---

## Компоновка

```
Navbar (FILL)
Body (HORIZONTAL)
  Sidebar (240px, FILL vertical)
  Main (FILL, VERTICAL, padding 32/24, gap 24, surface-subtle)
    Breadcrumb
    AlertHeader       — заголовок + Badge × 2 + кнопки
    Columns (HORIZONTAL, gap 24)
      LeftCol (FILL)
        TransactionCard   — 7 KV-пар
        AMLFlagsCard      — 4 флага с Badge по severity
        ClientInfoCard    — 7 KV-пар
      RightCol (300px fixed)
        RiskScoreCard     — числовая оценка + прогресс-бар
        ActivityCard      — 3 × ActivityRow
        CommentForm       — Textarea + Button/primary
```

---

## Компоненты

| Компонент | Кол-во | Вариант |
|-----------|--------|---------|
| Navbar | 1 | — |
| Sidebar | 1 | — |
| Breadcrumb | 1 | — |
| Badge | 6 | error × 1 (риск) + warning × 1 (статус) + error/warning × 4 (AML flags) |
| Button | 2 | secondary «Закрыть» + primary «Принять в работу» |
| ActivityRow | 3 | alert_processed · approval_made · system |
| Textarea | 1 | default |

---

## AlertHeader

HORIZONTAL, SPACE_BETWEEN, align CENTER.

- **TitleGroup:** «Алерт AML-1042» (`heading/2xl`) + Badge/error (Высокий риск) + Badge/warning (Новый) + дата `body/sm text-muted`
- **HeaderBtns:** Button/secondary «Закрыть» + Button/primary «Принять в работу»

---

## LeftCol

### TransactionCard
7 KV-строк (label/sm text-muted → body/sm text-default, SPACE_BETWEEN):
Сумма · Дата · Тип · Контрагент · Назначение · Счёт отправителя · Банк контрагента.

### AMLFlagsCard
4 строки: описание (`body/sm text-default`, FILL) + Badge (severity).

### ClientInfoCard
7 KV-строк: ФИО · ИНН · КЮЛ/КФЛ · Сегмент · Дата открытия счёта · Риск-профиль · Предыдущие алерты.

---

## RightCol (300px)

### RiskScoreCard
- Большое число «87» (`display/4xl text-default`) + «из 100» + «Высокий» (`text-error`)
- Прогресс-бар (8px, radius 4): серый фон + красная заливка 87% ширины (`surface-danger`)

### ActivityCard
Заголовок + divider + 3 × ActivityRow.

### CommentForm
Заголовок «Комментарий» + Textarea/default (FILL) + Button/primary «Добавить» (FILL).
