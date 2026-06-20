# Screen: Risks

**Final Screen Node ID:** (заполнится после Phase 4)

## Composition

### Shell (1440×900) — NavItem/Active: "Риски"

### Body

#### PageHeader
- Left: "Риски" size-2xl bold | "Мониторинг риск-оценок" body/sm text-muted
- Right: Button/Primary/Md "Новая оценка" + Lucide/plus 16px

#### Risk Summary Row (FILL × HUG, HORIZONTAL, gap space-4)
- 3 × Card/Default (FILL grow=1), shadow-sm, border-default
  - Card Низкий: цветная полоска success 4px top | Lucide/shield-check 20px success | "Низкий риск" label/sm text-muted | "847" size-2xl bold success | Badge/Success "67%"
  - Card Средний: полоска warning | Lucide/shield 20px warning | "Средний риск" | "312" warning | Badge/Warning "25%"
  - Card Высокий: полоска error | Lucide/shield-x 20px error | "Высокий риск" | "125" error | Badge/Error "10%"

#### Section label: "Последние риск-оценки" label/lg bold

#### Table/Default (shadow-sm)
- Columns: Клиент 200 | Уровень 120 | Категория 140 | Оценка 100 | Аналитик 130 | Дата 100
- 6 rows, Badge для уровней

#### Pagination — "Показано 6 из 1 284"

#### Edge case — EmptyState (visible:false)
- Lucide/shield 48px text-muted
- "Риск-оценок пока нет"
- Button/Primary "Создать первую оценку"

## Иконки
- shield-check, shield, shield-x, shield-alert, plus
