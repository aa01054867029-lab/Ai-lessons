# Screen: ApprovalRequestCard — Карточка запроса на согласование

**Размер:** 1440px (desktop)  
**Figma:** страница `wireframes` → секция `Screens` → `Screen/ApprovalRequestCard`

---

## Назначение

Экран рассмотрения запроса на согласование операции. Левая колонка — детали и обсуждение, правая — блок принятия решения и история.

---

## Компоновка

```
Navbar (FILL)
Body (HORIZONTAL)
  Sidebar (240px, FILL vertical)
  Main (FILL, VERTICAL, padding 32/24, gap 24, surface-subtle)
    Breadcrumb
    RequestHeader     — заголовок + Badge + дата + Button/ghost
    Columns (HORIZONTAL, gap 24)
      LeftCol (FILL)
        RequestDetailsCard  — 8 KV-пар
        CommentsSection     — 3 × CommentItem + Textarea + SendRow
      RightCol (300px fixed)
        DecisionCard        — мета + 3 × Button (FILL)
        HistoryCard         — 2 × ActivityRow
```

---

## Компоненты

| Компонент | Кол-во | Вариант |
|-----------|--------|---------|
| Navbar | 1 | — |
| Sidebar | 1 | — |
| Breadcrumb | 1 | — |
| Badge | 1 | warning (статус «На рассмотрении») |
| Button | 4 | ghost × 1 (header) + primary + secondary + ghost (DecisionCard) |
| CommentItem | 3 | — |
| Textarea | 1 | default |
| ActivityRow | 2 | — |

---

## RequestHeader

HORIZONTAL, SPACE_BETWEEN, align CENTER.

- **TitleGroup:** «Запрос на согласование #3847» (`heading/2xl`) + Badge/warning + «Подана 13.05.2026» (`body/sm text-muted`)
- **HeaderBtns:** Button/ghost «Отклонить»

---

## LeftCol

### RequestDetailsCard
8 KV-строк: Инициатор · Подразделение · Сумма операции · Контрагент · Назначение · Период · Основание · Срок согласования.

### CommentsSection
Заголовок «Обсуждение» + divider.  
3 × CommentItem (с divider между ними).  
После: divider + Textarea/default (FILL) + SendRow (Button/primary «Отправить», выровнен вправо).

---

## RightCol — DecisionCard

Заголовок «Принять решение» + divider.  
Мета-блок: Сумма / Контрагент / Срок (срок в `text-error`).  
Divider.  
3 кнопки FILL:

| Кнопка | Вариант | Действие |
|--------|---------|---------|
| Одобрить | primary | — |
| Запросить информацию | secondary | — |
| Отклонить | ghost | — |

---

## RightCol — HistoryCard

Заголовок «История согласования» + divider + 2 × ActivityRow.
