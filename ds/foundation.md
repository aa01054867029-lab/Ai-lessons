# Foundation

**Бриф:** финтех · b2b · строгий, надёжный · web+mobile · ru

---

## Слой 1 — примитивные токены

### Палитра

#### Акцент (Deep Blue — авторитет, соответствие)
- accent-100 = #DBEAFE
- accent-300 = #93C5FD
- accent-500 = #1D4ED8  ← основной акцент
- accent-700 = #1E3A8A
- accent-900 = #1E3066

#### Нейтралы (9 ступеней)
- gray-00  = #FFFFFF
- gray-50  = #F9FAFB
- gray-100 = #F3F4F6
- gray-200 = #E5E7EB
- gray-300 = #D1D5DB
- gray-500 = #6B7280
- gray-700 = #374151
- gray-900 = #111827
- gray-950 = #030712

#### Функциональные
- success-500 = #16A34A
- warning-500 = #D97706
- error-500   = #DC2626
- info-500    = #0284C7

---

### Типографика

- font-sans = Inter  ← кириллица Щ/Ъ/Ь/Ы покрыта
- size-xs   = 12
- size-sm   = 14
- size-base = 16
- size-lg   = 18
- size-xl   = 20
- size-2xl  = 24
- size-3xl  = 32
- size-4xl  = 48
- weight-regular  = 400
- weight-medium   = 500
- weight-semibold = 600
- weight-bold     = 700
- line-height-base = 1.5   ← +5% от 1.43 под кириллицу
- letter-spacing-tight = -0.5%  ← для заголовков 3xl/4xl
- letter-spacing-label = 5%     ← для Label/xs (uppercase caps)

---

### Радиусы

- radius-none = 0
- radius-sm   = 4
- radius-md   = 8
- radius-lg   = 16

---

### Отступы

- space-1  = 4
- space-2  = 8
- space-3  = 12
- space-4  = 16
- space-6  = 24
- space-8  = 32
- space-12 = 48
- space-16 = 64

---

### Тени

- shadow-sm = 0 1 2 0 rgba(0,0,0,0.06), 0 1 3 0 rgba(0,0,0,0.1)
- shadow-md = 0 4 6 -1 rgba(0,0,0,0.1), 0 2 4 -1 rgba(0,0,0,0.06)
- shadow-lg = 0 10 15 -3 rgba(0,0,0,0.1), 0 4 6 -2 rgba(0,0,0,0.05)

Маппинг по умолчанию:
- Card (interactive/hover) → shadow-sm
- Modal → shadow-lg
- Toast → shadow-sm
- Dropdown / Select panel → shadow-md
- Sticky Sidebar / Summary panel → shadow-sm

---

## Слой 2 — смысловые токены

### Поверхности
- surface-default                 → gray-00
- surface-subtle                  → gray-50
- surface-raised                  → gray-100
- surface-action-primary          → accent-500
- surface-action-primary-hover    → accent-700
- surface-action-primary-loading  → accent-700
- surface-action-secondary        → gray-100
- surface-action-secondary-hover  → gray-200
- surface-action-ghost-hover      → gray-50
- surface-danger                  → error-500
- surface-interactive-hover       → gray-50
- surface-interactive-selected    → accent-100
- surface-disabled                → gray-100

### Текст
- text-default      → gray-900
- text-muted        → gray-500
- text-disabled     → gray-300
- text-on-action    → gray-00
- text-link         → accent-500
- text-error        → error-500
- text-success      → success-500
- text-warning      → warning-500

### Обводки
- border-default    → gray-200
- border-strong     → gray-300
- border-focus      → accent-500
- border-focus-ring → accent-500
- border-error      → error-500

### Состояния / Статусы
- bg-success        → success-500
- bg-warning        → warning-500
- bg-error          → error-500
- bg-info           → info-500
- bg-success-subtle → gray-50   ← временно, при расширении → success-100
- bg-warning-subtle → gray-50
- bg-error-subtle   → gray-50

---

## Слой 2-D — смысловые токены (Dark Mode)

> Те же имена, другие значения. Переключается через Variable Mode в Figma.

### Поверхности (Dark)
- surface-default                 → gray-950  (#030712)
- surface-subtle                  → gray-900  (#111827)
- surface-raised                  → gray-700  (#374151)
- surface-action-primary          → accent-500 (#1D4ED8)
- surface-action-primary-hover    → accent-300 (#93C5FD)
- surface-action-primary-loading  → accent-700 (#1E3A8A)
- surface-action-secondary        → gray-900  (#111827)
- surface-action-secondary-hover  → gray-700  (#374151)
- surface-action-ghost-hover      → gray-900  (#111827)
- surface-danger                  → error-500 (#DC2626)
- surface-interactive-hover       → gray-900  (#111827)
- surface-interactive-selected    → accent-900 (#1E3066)
- surface-disabled                → gray-900  (#111827)

### Текст (Dark)
- text-default      → gray-00   (#FFFFFF)
- text-muted        → gray-300  (#D1D5DB)
- text-disabled     → gray-500  (#6B7280)
- text-on-action    → gray-00   (#FFFFFF)
- text-link         → accent-300 (#93C5FD)
- text-error        → error-500 (#DC2626)
- text-success      → success-500 (#16A34A)
- text-warning      → warning-500 (#D97706)

### Обводки (Dark)
- border-default    → gray-700  (#374151)
- border-strong     → gray-500  (#6B7280)
- border-focus      → accent-300 (#93C5FD)
- border-focus-ring → accent-300 (#93C5FD)
- border-error      → error-500 (#DC2626)

### Состояния / Статусы (Dark)
- bg-success        → success-500 (#16A34A)
- bg-warning        → warning-500 (#D97706)
- bg-error          → error-500 (#DC2626)
- bg-info           → info-500  (#0284C7)
- bg-success-subtle → gray-900  (#111827)
- bg-warning-subtle → gray-900  (#111827)
- bg-error-subtle   → gray-900  (#111827)

---

## Слой 3 — компонентные токены

*На стартовом наборе не нужен. Добавляется отдельной директивой при расширении компонентов вариантами и состояниями.*
