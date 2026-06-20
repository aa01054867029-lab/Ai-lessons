# Screen: Clients

**Final Screen Node ID:** (заполнится после Phase 4)

## Composition

### Shell (1440×900, FIXED×FIXED, HORIZONTAL)
- Background: `surface-subtle`

### Sidebar (FIXED 240 × FILL) — NavItem/Active: "Клиенты"

### Main (FILL × FILL, VERTICAL)

#### TopBar (FILL × 64) — "Клиенты"

#### Body (FILL × FILL, VERTICAL, gap space-6, padding space-8)

##### PageHeader (FILL × HUG, HORIZONTAL, space-between)
- Left: "Клиенты" size-2xl bold | "Всего: 1 284 клиента" body/sm text-muted
- Right: Button/Primary/Md "Добавить клиента" + Lucide/plus 16px

##### Filters Row (FILL × HUG, HORIZONTAL, gap space-3)
- Input (search, 320×44) — Lucide/search 16px + placeholder "Поиск по названию, ИНН..."
- Dropdown "Все статусы" (150×44) + Lucide/chevron-down 12px
- Dropdown "Все риски" (150×44) + Lucide/chevron-down 12px
- Spacer (FILL)
- Button/Secondary/Md "Экспорт" + Lucide/download 16px

##### Table/Default (FILL × HUG, shadow-sm)
- Columns: Наименование 200 | ИНН 130 | Статус KYC 120 | Риск 110 | Менеджер 130 | Дата 100
- 6 rows, разные статусы
- Checkbox column header (выбрать все)

##### Pagination (FILL × HUG)
- Component: `Pagination` → instance
- "Показано 6 из 1 284" text-muted body/sm
- Кнопки: ← 1 2 3 ... 214 →

##### Edge case — EmptyState (visible:false)
- "Клиенты не найдены" body/base text-default
- "Попробуйте изменить фильтры" body/sm text-muted
- Button/Secondary/Md "Сбросить фильтры"

## Tokens used
- surface-subtle, surface-default, border-default
- text-default, text-muted, text-on-action
- shadow-sm, radius-md

## Иконки (Lucide)
- search, chevron-down, plus, download
