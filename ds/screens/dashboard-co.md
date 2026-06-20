# Screen: DashboardCO — Рабочий стол CO

**Размер:** 1440px (desktop)  
**Figma:** страница `wireframes` → секция `Screens` → `Screen/DashboardCO`

---

## Назначение

Главный экран Compliance Officer. Агрегирует ключевые показатели дня, превью очереди алертов, быстрые действия и ленту последних событий.

---

## Компоновка

```
Navbar (FILL)
Body (HORIZONTAL)
  Sidebar (240px, FILL vertical)
  Main (FILL, VERTICAL, padding 32/32, gap 24, surface-subtle)
    PageHeader        — заголовок + кнопка «Экспорт»
    StatsRow          — 3 × StatCard (FILL)
    AlertPreview      — Card с компактной таблицей (5 строк)
    QuickActions      — 4 × Button/secondary
    RecentActivity    — Card с 4 × ActivityRow
    EmptyState        — visible: false (fallback)
```

---

## Компоненты

| Компонент | Кол-во | Вариант |
|-----------|--------|---------|
| Navbar | 1 | — |
| Sidebar | 1 | — |
| StatCard | 3 | — (FILL ширина) |
| Button | 5 | secondary × 4, primary × 1 |
| ActivityRow | 4 | alert_processed, approval_made, kyc_verified, system |
| Badge | 1 | warning («47 новых») |

---

## PageHeader

- Заголовок: `heading/2xl` «Рабочий стол»
- Кнопка: Button/secondary «Экспорт отчёта»
- Макет: HORIZONTAL, SPACE_BETWEEN, align CENTER

---

## StatsRow

Три `StatCard` с `layoutSizingHorizontal = FILL`. Данные:

| Карточка | Значение | Тренд |
|----------|---------|-------|
| Алерты сегодня | 47 | +12 от вчера |
| На рассмотрении | 8 | — |
| Закрыты (мес.) | 134 | — |

---

## AlertPreview

Card (`surface-default`, radius 8, shadow-sm) с заголовком «Активные алерты» и компактной таблицей (5 строк: ID · Клиент · Риск · Дата · Статус). Внизу — Button/ghost «Смотреть все алерты».

---

## QuickActions

HORIZONTAL gap 8, 4 кнопки Button/secondary:
- «Принять алерт» · «Создать запрос» · «Проверить клиента» · «Сформировать отчёт»

---

## RecentActivity

Card с заголовком «Последние события» и 4 `ActivityRow` (разные варианты). Divider между строками.

---

## EmptyState

`visible: false`. Показывается когда алертов нет. Текст «Нет новых задач» + Button/primary «Обновить».
