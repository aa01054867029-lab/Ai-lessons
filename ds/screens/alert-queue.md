# Screen: AlertQueue — Очередь алертов

**Размер:** 1440px (desktop)  
**Figma:** страница `wireframes` → секция `Screens` → `Screen/AlertQueue`

---

## Назначение

Список всех алертов CO с фильтрацией по статусу и риску, массовыми действиями и пагинацией. Основная рабочая очередь.

---

## Компоновка

```
Navbar (FILL)
Body (HORIZONTAL)
  Sidebar (240px, FILL vertical)
  Main (FILL, VERTICAL, padding 32/32, gap 24, surface-subtle)
    PageHeader        — «Очередь алертов» + Badge/warning «47 новых»
    FilterBar         — Tabs × 4 + Input/search + Dropdown/фильтр
    BulkActionsBar    — visible: false
    TableCard         — 8 строк данных
    Pagination
    EmptyState        — visible: false
```

---

## Компоненты

| Компонент | Кол-во | Вариант |
|-----------|--------|---------|
| Navbar | 1 | — |
| Sidebar | 1 | — |
| Badge | 9 | warning × 1 (header) + risk × 8 + status × 8 |
| Tabs | 4 | default / alt (первый активный) |
| Input | 1 | default |
| Dropdown | 1 | collapsed |
| Checkbox | 8 | unchecked, default |
| Button | 2 | secondary + ghost (BulkActionsBar, скрытая) |
| IconButton | 8 | sm (действия строки) |
| Pagination | 1 | — |

---

## FilterBar

HORIZONTAL, SPACE_BETWEEN, align CENTER.

- **Левая часть:** 4 вкладки Tabs — «Все» (активная, State=alt) · «Новые» · «В обработке» · «Закрыты»
- **Правая часть:** Input (поиск по ID/клиенту) + Dropdown (фильтр уровня риска: Все / Высокий / Средний / Низкий)

---

## BulkActionsBar

`visible: false`. Появляется при выборе строк через Checkbox.  
Структура: «Выбрано N алертов» (text-muted) + Spacer (FILL) + Button/secondary «Закрыть» + Button/ghost «Эскалировать».

---

## TableCard

Card (`surface-default`, radius 8, shadow-sm). Структура:

**Заголовок-строка** (`surface-subtle`, 12px v-padding):

| # | Заголовок | Ширина |
|---|-----------|--------|
| 0 | — (Checkbox) | 40 |
| 1 | ID | 80 |
| 2 | Клиент | 180 |
| 3 | Тип | 140 |
| 4 | Сумма | 120 |
| 5 | Риск | 100 |
| 6 | Дата | 100 |
| 7 | Статус | 120 |
| 8 | — (Действия) | 60 |

**8 строк данных** (divider 1px `border-default` между строками).

Маппинг Badge по риску: Высокий → `Variant=error`, Средний → `Variant=warning`, Низкий → `Variant=success`.  
Маппинг Badge по статусу: Новый → warning, В работе → success, Закрыт → success, Эскалирован → error.

---

## EmptyState

`visible: false`. Текст «Нет алертов по выбранным фильтрам» + Button/primary «Обновить».

---

## Edge cases — осознанно пропущены (audit 2026-05-14)

- **Table → состояние загрузки:** скелетон строк — добавить в следующей итерации
- **Table → ошибка загрузки:** Alert/error + кнопка «Повторить» — добавить в следующей итерации
