# Screen: Settings

**Final Screen Node ID:** (заполнится после Phase 4)

## Composition

### Shell (1440×900) — NavItem/Active: "Настройки"

### Body

#### PageHeader
- Left: "Настройки" size-2xl bold | "Управление профилем организации" body/sm text-muted

#### Settings Layout (FILL × HUG, HORIZONTAL, gap space-6)

##### Left nav (FIXED 220 × HUG, VERTICAL, gap space-1)
- NavItem/Active "Профиль" + Lucide/building 16px
- NavItem/Default "Безопасность" + Lucide/lock 16px
- NavItem/Default "Уведомления" + Lucide/bell 16px
- NavItem/Default "Интеграции" + Lucide/plug 16px

##### Form Card (FILL × HUG, Card/Default, shadow-sm, padding space-8, VERTICAL gap space-6)
- Section title "Данные организации" label/lg bold

- Field: "Название организации"
  - Input/Default, value "ООО «Альфа Финанс»", FILL

- Field: "ИНН"
  - Input/Default, value "7701234567", FILL

- Field: "Email для уведомлений"
  - Input/Default, value "admin@alpha.ru", FILL

- Field: "Телефон"
  - Input/Default, value "+7 (495) 123-45-67", FILL

- Divider border-default 1px

- Section title "Уведомления" label/lg bold

- Checkbox/Checked "Получать уведомления по email"
- Checkbox/Unchecked "SMS-уведомления об изменениях статуса"
- Checkbox/Checked "Еженедельный отчёт на email"

- Divider border-default 1px

- Actions Row (HORIZONTAL, gap space-3, MAX alignment)
  - Button/Secondary/Md "Отмена"
  - Button/Primary/Md "Сохранить изменения"

## Tokens used
- surface-subtle, surface-default, border-default
- text-default, text-muted, shadow-sm

## Иконки
- building, lock, bell, plug
