# DS Contract — ComplyFlow

> Минимальный контракт для курсовой. Расширяется директивой при добавлении компонентов.

**Icon library:** Lucide (MIT, рендерится через `figma.createNodeFromSvg()`)
**Screens mode:** Bulk — все wireframes → SectionNode «Screens»

---

## 1. Источник истины

| Артефакт | Файл / место |
|----------|-------------|
| Токены (примитив + семантика) | Figma Variables → коллекции **Primitive** / **Semantic** |
| Принципы токенов | `ds/foundation.md` |
| Компоненты | Figma → страница **wireframes** → секция **Foundation** |
| Каталог компонентов | `ds/components.md` |

---

## 2. Правило слоёв

```
Primitive  →  Semantic  →  Компонент / утилита
```

- **Никогда** не используй Primitive-токен напрямую в компоненте.
- Всегда ссылайся на Semantic-токен (`surface-*`, `text-*`, `border-*`, `bg-*`).
- Если нужного Semantic-токена нет — добавь его в `foundation.md` отдельной директивой.

---

## 3. Цвет

- Фоны: `surface-default`, `surface-subtle`, `surface-raised`, `surface-action-primary`, `surface-action-secondary`, `surface-danger`
- Текст: `text-default`, `text-muted`, `text-disabled`, `text-on-action`, `text-link`, `text-error`, `text-success`, `text-warning`
- Обводки: `border-default`, `border-strong`, `border-focus`, `border-error`
- Статусные фоны: `bg-success`, `bg-warning`, `bg-error`, `bg-info`; суффикс `-subtle` для приглушённых вариантов

---

## 4. Типографика

Шрифт: **Inter** (кириллица покрыта).

| Стиль | Размер | Насыщенность | Применение |
|-------|--------|-------------|------------|
| display/4xl | 48 | Bold | Герои, splash |
| display/3xl | 32 | Bold | H1 страницы |
| heading/2xl | 24 | SemiBold | H2 раздела |
| heading/xl | 20 | SemiBold | H3 блока |
| heading/lg | 18 | SemiBold | Подзаголовок карточки |
| body/base | 16 | Regular | Основной текст |
| body/sm | 14 | Regular | Вспомогательный текст |
| label/base | 14 | Medium | Кнопки, табы |
| label/sm | 12 | Medium | Метки форм |
| label/xs | 12 | Medium + 5% ls | Uppercase-бейджи |

Line-height: **1.5** (для кириллицы).

---

## 5. Отступы

Шаг сетки — **4 px**. Допустимые значения: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64.

---

## 6. Радиусы

| Токен | Значение | Применение |
|-------|---------|------------|
| radius-none | 0 | Таблицы, разделители |
| radius-sm | 4 | Бейджи, чипы |
| radius-md | 8 | Кнопки, инпуты, карточки |
| radius-lg | 16 | Модальные окна, панели |

---

## 7. Компоненты стартового набора

Все компоненты — в Figma, страница **wireframes**, секция **Foundation**.

| Компонент | Варианты | Figma-имя |
|-----------|---------|-----------| 
| Button | primary · secondary · ghost | `Button` |
| Input | default · error | `Input` |
| Card | — | `Card` |
| Modal | — | `Modal` |
| Navbar | — | `Navbar` |
| IconButton | — | `IconButton` |
| Badge | success · warning · error | `Badge` |

## 7.1 Компоненты расширенного набора (UI Kit — extended)

Секция в Figma: «UI Kit — extended», рядом с «Foundation».

| Компонент | Варианты | Figma-имя |
|-----------|---------|-----------|
| Table | Density: default · compact | `Table` |
| Sidebar | NavItem ItemState: default · active | `Sidebar` |
| Dropdown | State: collapsed · expanded | `Dropdown` |
| Breadcrumb | — | `Breadcrumb` |
| Pagination | — | `Pagination` |
| Toast | Type: success · error · warning | `Toast` |
| Textarea | State: default · error | `Textarea` |
| Checkbox | Checked: unchecked · checked | `Checkbox` |

---

## 8. Правила именования

- Компонент: `PascalCase`
- Вариант: `variant=camelCase`
- Semantic-токен: `kebab-case` (два сегмента: `категория-роль`)
- Primitive-токен: `kebab-case` (два сегмента: `цвет-ступень` или `свойство-ступень`)

---

## 9. Что НЕ входит в текущий набор

Следующие компоненты добавляются отдельными директивами:
- DatePicker
- Tabs / Stepper
- Компонентные токены (Слой 3)
- Расширение матрицы variants (hover/focus/disabled/loading для всех компонентов)
