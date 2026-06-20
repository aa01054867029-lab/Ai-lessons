# Screen: Documents

**Final Screen Node ID:** (заполнится после Phase 4)

## Composition

### Shell (1440×900) — NavItem/Active: "Документы"

### Body

#### PageHeader
- Left: "Документы" size-2xl bold | "Реестр документов KYC" body/sm text-muted
- Right: Button/Primary/Md "Загрузить документ" + Lucide/upload 16px

#### Filters Row
- Input search (320×44) "Поиск документа..."
- Dropdown "Все типы" + chevron-down
- Dropdown "Все статусы" + chevron-down
- Spacer
- Button/Secondary "Фильтры" + Lucide/sliders-horizontal 16px

#### Table/Default (shadow-sm)
- Columns: Документ 220 | Клиент 180 | Тип 120 | Статус 120 | Загружен 100 | Действия 80
- 7 rows
- Действия: IconButton с Lucide/eye 16px + Lucide/download 16px

#### Pagination
- "Показано 7 из 3 841"

#### Edge case — EmptyState (visible:false)
- Lucide/file-x 48px text-muted
- "Документы не найдены"
- Button/Secondary "Сбросить фильтры"

## Токены
- surface-subtle, surface-default, border-default, shadow-sm

## Иконки
- upload, search, chevron-down, sliders-horizontal, eye, download, file-x
