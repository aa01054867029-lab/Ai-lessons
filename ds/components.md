# Components Catalog — ComplyFlow DS

> Стартовый набор. Каждая запись = один ComponentSet или Component в Figma (секция **Foundation**, страница **wireframes**).

---

## Button

**Figma:** `Button` (ComponentSet, 36 ячеек)

| Проп | Значения |
|------|---------|
| variant | `primary` · `secondary` · `ghost` |
| state | `default` · `hover` · `disabled` · `loading` |
| size | `sm` · `md` · `lg` |

| Вариант | Фон | Hover-фон | Текст | Обводка |
|---------|-----|-----------|-------|---------|
| primary | `surface-action-primary` | `surface-action-primary-hover` | `text-on-action` | — |
| secondary | `surface-action-secondary` | `surface-action-secondary-hover` | `text-default` | `border-default` |
| ghost | transparent | `surface-action-ghost-hover` | `text-default` | `border-default` |

| Size | Высота | Padding H | Font-size |
|------|--------|-----------|----------|
| sm | 32 | 12 | 13 |
| md | 40 | 16 | 14 |
| lg | 48 | 20 | 16 |

Disabled: opacity 0.5. Loading: спиннер-плейсхолдер вместо текста. Радиус: `radius-md` (8).

> Расширено: добавлены состояния hover/disabled/loading и размеры sm/md/lg. Новые Semantic: surface-action-secondary-hover, surface-action-ghost-hover, surface-action-primary-loading.

---

## Input

**Figma:** `Input` (ComponentSet, 4 ячейки)

| Проп | Значения |
|------|---------|
| state | `default` · `focus` · `error` · `disabled` |

| Состояние | Фон | Placeholder | Обводка | Толщина |
|-----------|-----|-------------|---------|--------|
| default | `surface-default` | `text-muted` | `border-default` | 1px |
| focus | `surface-default` | `text-muted` | `border-focus` + `border-focus-ring` | 2px |
| error | `surface-default` | `text-muted` | `border-error` | 1px |
| disabled | `surface-disabled` | `text-disabled` | `border-default` | 1px, opacity 0.6 |

Радиус: `radius-md`. Высота: 44.

> Расширено: добавлены состояния focus и disabled. Новые Semantic: surface-disabled, border-focus-ring.

---

## Card

**Figma:** `Card` (ComponentSet, 6 ячеек)

| Проп | Значения |
|------|---------|
| type | `default` · `interactive` |
| state | `default` · `hover` · `selected` |

| Тип/Состояние | Фон | Обводка |
|---------------|-----|--------|
| default/default | `surface-default` | `border-default` 1px |
| default/hover | `surface-default` | `border-strong` 1px |
| default/selected | `surface-default` | `border-focus` 1px |
| interactive/default | `surface-default` | `border-default` 1px |
| interactive/hover | `surface-interactive-hover` | `border-strong` 1px |
| interactive/selected | `surface-interactive-selected` | `border-focus` 2px + `border-focus-ring` |

Радиус: `radius-md` (8). Padding: 16.

> Расширено: добавлены type interactive и состояния hover/selected. Новые Semantic: surface-interactive-hover, surface-interactive-selected.

---

## Modal

**Figma:** `Modal` (Component)

Фон: `surface-default`. Обводка: `border-default`. Радиус: `radius-lg` (16).  
Структура: заголовок (`heading/xl`) + текст (`body/sm`) + кнопки (Button). Padding: 32/24.

---

## Navbar

**Figma:** `Navbar` (Component)

Фон: `surface-default`. Нижняя обводка: `border-default`. Высота: 64.  
Структура: логотип слева + навигация справа. Padding: 32.

---

## IconButton

**Figma:** `IconButton` (ComponentSet, 9 ячеек)

| Проп | Значения |
|------|---------|
| state | `default` · `hover` · `disabled` |
| size | `sm` · `md` · `lg` |

| Состояние | Фон | Иконка |
|-----------|-----|-------|
| default | `surface-action-secondary` | `text-muted` |
| hover | `surface-action-secondary-hover` | `text-default` |
| disabled | `surface-disabled` | `text-disabled`, opacity 0.5 |

| Size | Размер | Иконка |
|------|--------|-------|
| sm | 32×32 | 12×12 |
| md | 40×40 | 16×16 |
| lg | 48×48 | 20×20 |

Радиус: `radius-md`.

> Расширено: добавлены size sm/md/lg (2026-05-14). Матрица: state × size = 3 × 3 = 9 ячеек.

---

## Badge

**Figma:** `Badge` (ComponentSet, 6 ячеек)

| Проп | Значения |
|------|---------|
| variant | `success` · `warning` · `error` |
| size | `sm` · `md` |

| Вариант | Фон | Текст |
|---------|-----|-------|
| success | success-subtle | success text |
| warning | warning-subtle | warning text |
| error | error-subtle | error text |

| Size | Высота | Font-size | Padding H |
|------|--------|-----------|----------|
| sm | 20 | 11 | 6 |
| md | 24 | 12 | 8 |

Радиус: pill (height/2). Типографика: `label/xs`, weight-medium.

> Расширено: добавлен size sm/md.

---

> **UI Kit — extended** (директива `grow_ui_kit`, перезапущена 2026-05-14).  
> Секция в Figma: «UI Kit — extended» (node `64:148`), страница **wireframes**, рядом с «Foundation».  
> 13 компонентов: Table, Sidebar, NavItem, Dropdown, Toast, Textarea, Checkbox, Tabs, Select, Breadcrumb, Pagination, Tooltip, Alert, Tag.

---

## Table

**Figma:** `Table` (ComponentSet `67:206`, 2 варианта)

| Проп | Значения |
|------|---------|
| Density | `default` · `compact` |

**Анатомия:** TableContainer → HeaderRow → Row → Cell

| Элемент | Фон | Текст | Обводка |
|---------|-----|-------|---------|
| HeaderRow | `surface-raised` | `text-muted` (`label/sm`) | — |
| Row (default) | `surface-default` | `text-default` (`body/sm`) | `border-default` (bottom 1px) |
| Row (hover) | `surface-subtle` | `text-default` | `border-default` |
| Row (selected) | `surface-subtle` | `text-default` | `border-default` |

| Вариант | Высота строки | Padding vertical |
|---------|---------------|-----------------|
| default | 56 | space-3 (12) |
| compact | 40 | space-2 (8) |

Cell padding: space-3 (12) horizontal. itemSpacing между ячейками: space-4 (16).

---

## Sidebar

**Figma:** `Sidebar` (Component `68:153`) + `NavItem` (ComponentSet `68:152`, 2 варианта)

**Анатомия:** SidebarContainer → NavGroup (верх) → NavItem + BottomGroup (низ) → NavItem

Ширина: 240px. Фон: `surface-default`. Правая обводка: `border-default` (1px).

**NavItem** (ComponentSet, 2 варианта):

| Проп | Значения |
|------|---------|
| ItemState | `default` · `active` |

| Состояние | Фон | Текст |
|-----------|-----|-------|
| default | transparent | `text-default` (`label/base`) |
| hover | `surface-subtle` | `text-default` |
| active | `surface-raised` | `text-default` (`label/base`, weight-semibold) |

Container padding: space-4 (16) vertical, space-3 (12) horizontal. NavItem padding: space-2 (8) vertical, space-3 (12) horizontal. itemSpacing: space-1 (4). CountBadge — instance `Badge`.

---

## Dropdown

**Figma:** `Dropdown` (ComponentSet `69:163`, 3 варианта)

| Проп | Значения |
|------|---------|
| State | `collapsed` · `expanded` · `disabled` |

**Анатомия:** DropdownTrigger (Label + ChevronIcon 16×16) + DropdownPanel → DropdownOption

| Элемент | Фон | Текст | Обводка |
|---------|-----|-------|---------|
| Trigger | `surface-default` | `text-default` (`body/sm`) | `border-default` (1px) |
| Trigger focus | `surface-default` | `text-default` | `border-focus` |
| ChevronIcon | — | `text-muted` | — |
| Panel | `surface-default` | — | `border-default` (1px) |
| Option default | transparent | `text-default` (`body/sm`) | — |
| Option hover | `surface-subtle` | `text-default` | — |
| Option selected | `surface-subtle` | `text-default` | — |

| Trigger disabled | `surface-disabled` | `text-disabled` | `border-default` (1px), opacity 0.5 |

Trigger min-width: 140px. Trigger padding: space-2 (8) vertical, space-3 (12) horizontal. Радиус: `radius-md` (8). Option padding: space-2 (8) vertical, space-3 (12) horizontal.

> Расширено: добавлен State=disabled (2026-05-14).

---

## Breadcrumb

**Figma:** `Breadcrumb` (Component `72:148`)

**Анатомия:** BreadcrumbContainer (horizontal) → BreadcrumbItem (ссылка) + Separator («→») + BreadcrumbItemCurrent (не ссылка)

| Элемент | Текст |
|---------|-------|
| BreadcrumbItem | `text-link` (`body/sm`) |
| BreadcrumbItem hover | `text-link` + underline |
| Separator | `text-muted` (`body/sm`) |
| BreadcrumbItemCurrent | `text-muted` (`body/sm`) |

itemSpacing: space-2 (8).

---

## Pagination

**Figma:** `Pagination` (Component `72:154`)

**Анатомия:** PaginationContainer (horizontal, space-between) → InfoText + PageButtons (PrevButton + PageNumber × N + Ellipsis + NextButton)

| Элемент | Фон | Текст |
|---------|-----|-------|
| InfoText | — | `text-muted` (`body/sm`) |
| PageNumber default | transparent | `text-default` (`label/base`) |
| PageNumber active | `surface-action-primary` | `text-on-action` |
| PageNumber hover | `surface-subtle` | `text-default` |
| PrevButton / NextButton | — | `text-link` (`label/base`) |
| PrevButton / NextButton disabled | — | `text-disabled` |

PageNumber min-size: 32×32. PageNumber radius: `radius-md` (8). PageNumber padding: space-2 (8) h, space-1 (4) v. itemSpacing: space-1 (4). Container padding: space-3 (12) vertical.

---

## Toast

**Figma:** `Toast` (ComponentSet `69:179`, 3 варианта)  
**Status:** в DS, не используется на текущих экранах (нужен для системы уведомлений)

| Проп | Значения |
|------|---------|
| Type | `success` · `error` · `warning` |

**Анатомия:** ToastContainer (horizontal) → StatusIcon (20×20) + TextGroup (Title + Description) + CloseButton (20×20)

| Вариант | Фон | Left border (3px) | Icon | Title | Description |
|---------|-----|--------------------|------|-------|-------------|
| success | `bg-success-subtle` | `bg-success` | `text-success` | `text-default` (`label/base`) | `text-muted` (`body/sm`) |
| error | `bg-error-subtle` | `bg-error` | `text-error` | `text-default` | `text-muted` |
| warning | `bg-warning-subtle` | `bg-warning` | `text-warning` | `text-default` | `text-muted` |

CloseButton: `text-muted`. Container padding: space-4 (16). Icon↔TextGroup spacing: space-3 (12). Title↔Description spacing: space-1 (4). Min-width: 320px, max-width: 480px. Радиус: `radius-md` (8).

---

## Textarea

**Figma:** `Textarea` (ComponentSet `70:156`, 4 варианта)

| Проп | Значения |
|------|---------|
| State | `default` · `focus` · `error` · `disabled` |

**Анатомия:** TextareaContainer (vertical) → TextareaField + HintText (опционально)

| Состояние | Фон | Текст | Обводка |
|-----------|-----|-------|---------|
| default | `surface-default` | `text-default` (`body/sm`) | `border-default` (1px) |
| focus | `surface-default` | `text-default` | `border-focus` (2px) |
| error | `surface-default` | `text-default` | `border-error` (1px) |
| disabled | `surface-disabled` | `text-disabled` | `border-default` (1px), opacity 0.6 |

Placeholder: `text-muted` (`body/sm`). HintText default: `text-muted` (`label/sm`). HintText error: `text-error` (`label/sm`). Field padding: space-3 (12). Field min-height: 80px. Радиус: `radius-md` (8). Field↔HintText spacing: space-1 (4).

> Расширено: добавлены focus и disabled (2026-05-14). Новые Semantic: не потребовались.

---

## Checkbox

**Figma:** `Checkbox` (ComponentSet `70:163`, 6 вариантов)

| Проп | Значения |
|------|---------|
| Checked | `unchecked` · `checked` |
| State | `default` · `hover` · `disabled` |

**Анатомия:** CheckboxContainer (horizontal) → CheckboxBox (20×20) + Label (опционально)

| Checked / State | Box Фон | Box Обводка | Icon |
|-----------------|---------|-------------|------|
| unchecked / default | `surface-default` | `border-default` (1.5px) | — |
| unchecked / hover | `surface-default` | `border-strong` (1.5px) | — |
| unchecked / disabled | `surface-raised` | `border-default` (1.5px) | —, opacity 0.5 |
| checked / default | `surface-action-primary` | — | `text-on-action` (галочка 12×12) |
| checked / hover | `surface-action-primary-hover` | — | `text-on-action` (галочка 12×12) |
| checked / disabled | `surface-raised` | `border-default` (1.5px) | —, opacity 0.5 |

> **Нейминг исправлен (audit 2026-05-14):** варианты `Checked=false/true` переименованы в `Checked=unchecked/checked` для консистентности.

Label: `text-default` (`body/sm`). Label disabled: `text-disabled`. Box radius: `radius-sm` (4). Box↔Label spacing: space-2 (8).

> Расширено: добавлена ось State (hover · disabled) (2026-05-14). Матрица: 2 × 3 = 6 ячеек.

---

## Tabs

**Figma:** `Tabs` (ComponentSet `71:178`, 3 варианта)

| Проп | Значения |
|------|---------|
| State | `default` · `alt` · `disabled` |

**Анатомия:** TabStrip → TabItem (label + ActiveIndicator 2px bottom)

| Элемент | Текст | Индикатор |
|---------|-------|-----------|
| Tab default | `text-muted` (`body/sm`) | — |
| Tab active | `text-default` (`body/sm Medium`) | `surface-action-primary` 2px bottom |
| Tab disabled | `text-disabled` (`body/sm`) | —, opacity 0.4 |

Container border-bottom: `border-default`. Padding H: space-4 (16). Высота: 44px.

> Расширено: добавлен State=disabled (TabItem с disabled-вкладкой) (2026-05-14).

---

## Select

**Figma:** `Select` (ComponentSet `71:188`, 4 варианта)  
**Status:** в DS, не используется на текущих экранах (нужен для форм фильтрации)

| Проп | Значения |
|------|---------|
| State | `default` · `focus` · `error` · `disabled` |

**Анатомия:** SelectTrigger (Label + ChevronIcon 16×16)

| Состояние | Фон | Обводка | Hint |
|-----------|-----|---------|------|
| default | `surface-default` | `border-default` 1px | — |
| focus | `surface-default` | `border-focus` 2px | — |
| error | `surface-default` | `border-error` 1px | `text-error` (`label/xs`) |
| disabled | `surface-disabled` | `border-default` 1px | —, opacity 0.5 |

Placeholder: `text-muted` (`body/sm`). Радиус: `radius-md`. Высота trigger: 40px.

> Расширено: добавлены focus и disabled (2026-05-14). Новые Semantic: не потребовались.

---

## Tooltip

**Figma:** `Tooltip` (Component `72:169`)  
**Status:** в DS, не используется на текущих экранах

**Анатомия:** TooltipBubble (horizontal)

Фон: `surface-action-primary`. Текст: `text-on-action` (`label/xs`). Радиус: `radius-sm`. Padding: 6 vertical, 10 horizontal.

---

## Alert

**Figma:** `Alert` (ComponentSet `72:191`, 4 варианта)

| Проп | Значения |
|------|---------|
| Type | `info` · `success` · `warning` · `error` |

**Анатомия:** AlertContainer → StatusBar (3px left) + TextGroup (Title + Description)

| Вариант | Фон | Bar | Title | Description |
|---------|-----|-----|-------|-------------|
| info | `surface-subtle` | `bg-info` | `text-default` (`label/base`) | `text-muted` (`body/sm`) |
| success | `surface-subtle` | `bg-success` | `text-default` | `text-muted` |
| warning | `surface-subtle` | `bg-warning` | `text-default` | `text-muted` |
| error | `surface-subtle` | `bg-error` | `text-default` | `text-muted` |

Обводка: `border-default` 1px. Радиус: `radius-md`. Padding: 14 vertical, 16 horizontal. Bar↔TextGroup spacing: space-3 (12).

---

## Tag

**Figma:** `Tag` (ComponentSet `72:197`, 8 вариантов)  
**Status:** в DS, не используется на текущих экранах (нужен для системы меток клиентов)

| Проп | Значения |
|------|---------|
| Dismissible | `false` · `true` |
| Variant | `neutral` · `success` · `warning` · `error` |

**Анатомия:** TagContainer → Label + CloseIcon (12×12, опционально)

| Variant | Фон | Текст | Close icon |
|---------|-----|-------|-----------|
| neutral | `surface-raised` | `text-default` | `text-muted` |
| success | `bg-success-subtle` | `text-success` | `text-success` |
| warning | `bg-warning-subtle` | `text-warning` | `text-warning` |
| error | `bg-error-subtle` | `text-error` | `text-error` |

Обводка: `border-default` 1px. Типографика: `label/xs`. Радиус: `radius-sm`. Padding: 4 vertical, 8 horizontal. Label↔Close spacing: space-1 (4).

> Расширено: добавлена ось Variant (success/warning/error) (2026-05-14). Матрица: 2 × 4 = 8 ячеек.

---

> **UI Kit — экранные компоненты** (директива `directive_final_screens`, 2026-05-14).  
> Секция в Figma: «UI Kit — extended», страница **wireframes**, y ≈ 2300.  
> Создаются как повторяющиеся единицы на финальных экранах.

---

## StatCard

**Figma:** `StatCard` (Component, секция «UI Kit — extended»)

**Назначение:** KPI-метрика на дашборде. Показывает Label + Value + TrendBadge.

**Анатомия:**

```
StatCard (VERTICAL, 280px fixed × AUTO, padding 16, gap 8)
  TopRow (HORIZONTAL, SPACE_BETWEEN)
    Label (label/sm, text-muted)
    Icon (20×20 placeholder)
  Value (heading/2xl, text-default)
  TrendBadge (frame, bg-*-subtle, label/xs)
```

| Токен | Значение |
|-------|---------|
| Фон | `surface-default` |
| Тень | `shadow-sm` |
| Радиус | `radius-md` (8) |

**Используется в:** `dashboard-co.md` (StatsRow × 3)

---

## ActivityRow

**Figma:** `ActivityRow` (ComponentSet, 4 варианта)

**Назначение:** Строка ленты событий. Иконка-круг + описание + метка времени.

| Проп | Значения |
|------|---------|
| type | `alert_processed` · `approval_made` · `kyc_verified` · `system` |

**Анатомия:**

```
ActivityRow (HORIZONTAL, gap 10, align CENTER)
  IconCircle (28×28, cornerRadius 14, bg по типу)
  TextGroup (VERTICAL, gap 2)
    Description (body/sm, text-default)
    Timestamp (label/xs, text-muted)
```

| Тип | Фон IconCircle |
|-----|---------------|
| alert_processed | `bg-warning-subtle` |
| approval_made | `bg-success-subtle` |
| kyc_verified | `bg-info-subtle` (или `surface-raised`) |
| system | `surface-raised` |

**Используется в:** `dashboard-co.md` (RecentActivity × 4), `alert-card.md` (ActivityCard × 3), `approval-request-card.md` (HistoryCard × 2)

---

## CommentItem

**Figma:** `CommentItem` (Component, секция «UI Kit — extended»)

**Назначение:** Элемент треда обсуждения в карточке запроса на согласование.

**Анатомия:**

```
CommentItem (HORIZONTAL, gap 10, align MIN)
  Avatar (32×32, cornerRadius 16, surface-raised)
  TextGroup (VERTICAL, gap 4, FILL)
    HeaderRow (HORIZONTAL, gap 6, align CENTER)
      Author (label/base, text-default)
      Role (label/sm, text-muted)
      Time (label/sm, text-muted)
    Body (body/sm, text-default)
```

| Токен | Значение |
|-------|---------|
| Avatar | `surface-raised` |
| Разделитель | `border-default` 1px (между CommentItem) |

**Используется в:** `approval-request-card.md` (CommentsSection × 3)

---

## MobileNavbar

**Figma:** `MobileNavbar` (Component `110:148`, секция «UI Kit — extended»)

**Назначение:** Навбар для мобильных экранов (375px). Не имеет боковой навигации.

**Анатомия:**

```
MobileNavbar (HORIZONTAL, SPACE_BETWEEN, padding 16/12)
  BackBtn (HORIZONTAL, gap 4)
    BackArrow (20×20, cornerRadius 4, text-link)
    Label «Назад» (label/base, text-link)
  Title (label/base, text-default)
  MenuIcon (24×24, прозрачная заглушка)
```

| Токен | Значение |
|-------|---------|
| Фон | `surface-default` |
| Нижняя обводка | `border-default` 1px |

> **Создан (audit 2026-05-14):** ранее на Screen/EscalationCard был бесплатный FRAME. Заменён на instance.

**Используется в:** `escalation-card.md` (верхняя навбар мобильного экрана)
