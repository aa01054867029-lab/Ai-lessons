# Screen: EscalationCard — Эскалация (mobile)

**Размер:** 375px (mobile, iOS-высота ~812px, контент скроллируется)  
**Figma:** страница `wireframes` → секция `Screens` → `Screen/EscalationCard`

---

## Назначение

Мобильный экран для руководителя, которому CO эскалировал кейс. Содержит всю необходимую информацию и кнопки решения в нижнем фиксированном footer.

---

## Компоновка

```
MobileNavbar         — «← Назад» + заголовок + иконка меню
NavBorder            — 1px border-default
ScrollContent (VERTICAL, padding 16, gap 12)
  AlertBanner        — Alert/warning (или fallback)
  EssenceCard        — суть вопроса + 4 KV-пары
  CORecommendationCard — текст + аватар CO
  DataCard           — 5 KV-пар + список AML-флагов
DecisionFooter       — 3 × Button/FILL + divider сверху
```

---

## Компоненты

| Компонент | Кол-во | Вариант |
|-----------|--------|---------|
| Badge | 1 | error (в EssenceCard header) |
| Alert | 1 | warning |
| Button | 3 | primary + secondary + ghost (FILL) |

---

## MobileNavbar

HORIZONTAL, SPACE_BETWEEN, align CENTER, padding 16/12.

- **Левая часть:** иконка «←» (20×20) + «Назад» (`label/base text-link`)
- **Центр:** «Эскалация #ESC-089» (`label/base text-default`)
- **Правая часть:** иконка меню 24×24 (прозрачная заглушка)

Нижняя граница: 1px `border-default`.

---

## AlertBanner

`Alert/warning` (или кастомный frame с amber-тоном). Содержание:
- Заголовок: «Требуется решение по эскалации»
- Описание: «Алерт AML-1042 передан на уровень руководителя. Срок: сегодня до 18:00.»

---

## EssenceCard

Заголовок (`heading/lg`) + Badge/error в одной строке (SPACE_BETWEEN).  
Divider.  
Абзац с описанием кейса (`body/sm text-default`).  
4 KV-строки (VERTICAL layout, label/xs text-muted → body/sm text-default):
Алерт · Клиент · Сумма · Оценка риска.

---

## CORecommendationCard

Заголовок «Рекомендация CO» + divider.  
Текст рекомендации (`body/sm text-default`).  
Строка CO: аватар (28×28, cornerRadius 14) + имя (`label/base`) + роль/время (`label/xs text-muted`).

---

## DataCard

Заголовок «Данные транзакции» + divider.  
5 KV-строк (VERTICAL): Дата и время · Тип · Контрагент · Банк · Назначение.  
Divider.  
Заголовок «Сработавшие правила AML» (`label/sm text-muted`).  
4 строки: dot (6×6, `surface-danger`) + текст флага (`body/sm text-default`).

---

## DecisionFooter

`surface-default`, padding 16/16, paddingBottom 32 (safe-area iOS).  
Divider сверху + заголовок «Принять решение» (`heading/lg`).  
3 × Button (FILL, layoutSizingHorizontal=FILL):

| Кнопка | Вариант |
|--------|---------|
| Заблокировать и эскалировать | primary |
| Запросить доп. материалы | secondary |
| Закрыть алерт | ghost |
