# Screen: Dashboard

**Final Screen Node ID:** (заполнится после Phase 4)

## Composition

### Shell (1440×900, FIXED×FIXED, HORIZONTAL)
- Background: `surface-subtle` → gray-50
- Auto Layout: horizontal, gap 0

### Sidebar (FIXED 240 × FILL)
- Component: `Sidebar` → instance
- Background: `surface-default`
- Right border: `border-default` 1px
- NavItems:
  - NavItem/Active: "Дашборд" (Lucide / layout-dashboard 16px)
  - NavItem/Default: "Клиенты" (Lucide / users 16px)
  - NavItem/Default: "Документы" (Lucide / file-text 16px)
  - NavItem/Default: "Риски" (Lucide / shield-alert 16px)
  - NavItem/Default: "Настройки" (Lucide / settings 16px)

### Main (FILL × FILL, VERTICAL)

#### TopBar (FILL × HUG, height 64)
- Component: `Navbar` → instance
- Background: `surface-default`
- Border bottom: `border-default` 1px
- Left: Logo placeholder rect (120×28, fill `border-default`) + текст "ComplyFlow" label/base
- Right: Lucide / bell 20px (text-muted) + Avatar rect (32×32, fill `surface-action-primary`, radius 16)

#### Body (FILL × FILL, VERTICAL, gap space-6, padding space-8)
- Background: `surface-subtle`

##### PageHeader (FILL × HUG, HORIZONTAL, space-between)
- Left: txt "Дашборд" size-2xl bold, txt "Добро пожаловать, Алексей" body/sm text-muted
- Right: Button/Primary/Md "Добавить клиента" + Lucide/plus 16px

##### KPI Row (FILL × HUG, HORIZONTAL, gap space-4)
- 4 × Card/Default (FILL grow=1 × HUG), radius-md, shadow-sm, border `border-default`
  - Card 1: Lucide/users 20px text-muted | "Активные клиенты" label/sm text-muted | "1 284" size-2xl bold | Badge/Success "↑ 12%"
  - Card 2: Lucide/clock 20px text-muted | "На проверке" label/sm text-muted | "47" size-2xl bold | Badge/Warning "↓ 3"
  - Card 3: Lucide/shield 20px text-muted | "Риск-оценок" label/sm text-muted | "238" size-2xl bold | Badge/Success "↑ 5%"
  - Card 4: Lucide/check-circle 20px text-muted | "Завершённые KYC" label/sm text-muted | "1 041" size-2xl bold | Badge/Success "↑ 8%"

##### Section label: "Последние клиенты" label/lg bold

##### Table/Default (FILL × HUG, shadow-sm)
- Component: `Table` → instance
- Columns: Клиент 220 | ИНН 140 | Статус 130 | Риск 120 | Дата 140
- 5 rows с реалистичными данными
- Statuses: Badge/Success "Активный", Badge/Warning "На проверке", Badge/Muted "Завершён"

##### Edge case — EmptyState (FILL × HUG, visible:false)
- Card/Default центровой, padding space-12
- Lucide/inbox 48px text-muted
- "Клиентов пока нет" text-default body/base
- Button/Primary/Md "Добавить первого клиента"

## Tokens used
- surface-subtle, surface-default, border-default
- text-default, text-muted, text-on-action
- surface-action-primary, bg-success, bg-warning
- shadow-sm, radius-md, space-4, space-6, space-8

## Иконки (Lucide)
- layout-dashboard, users, file-text, shield-alert, settings (sidebar nav)
- bell, plus, users, clock, shield, check-circle, inbox (content)
