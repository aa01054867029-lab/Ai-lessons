# Директива: Генерация PRD и публикация в Notion

## Задача
Собрать все артефакты проекта в полноценный PRD и опубликовать как структурированную страницу в Notion с базами данных, views и профессиональным оформлением. **Каждая секция должна быть раскрыта полностью — без сокращений, с конкретными данными из артефактов.**

## Контекст — входные документы

Прочитай **ВСЕ** файлы проекта перед началом работы:

| Файл | Что брать |
|---|---|
| `brief.md` | Контекст продукта, сценарии, матрица ролей, открытые вопросы |
| `competitive_analysis_final.md` | SWOT, Feature matrix, UX-паттерны |
| `competitor_swot.md` | Развёрнутые S/W/O/T по каждому конкуренту |
| `competitor_features.md` | Feature-by-feature сравнение |
| `competitor_ux_patterns.md` | UX-паттерны «перенять / избежать» |
| `audit/audit_report.md` | UX-аудит Sumsub (16 проблем, 10 эвристик) |
| `personas.md` | 3 персоны с JTBD, паттернами, раздражителями, дизайн-выводами |
| `interview_marina.md` | Полное интервью + Итоги: 7 гипотез, 6 инсайтов, 6 edge cases, 3 противоречия, 5 рекомендаций |
| `features_list.md` | 46 фич из 6 источников |
| `prioritization.md` | MoSCoW (12 Must, 16 Should, 14 Could, 4 Won't) с обоснованиями |
| `mvp_scope.md` | MVP scope, сценарий Марины (5 экранов), метрики, что не входит |
| `prd.md` | Собранный PRD: Executive Summary, OKR, User Stories с AC, NFR, Roadmap |
| `deep_research_results.md` | Глубокое исследование рынка, технологий, регуляторики |

## Инструкция

### Шаг 1 — Создать главную страницу PRD

**Иконка:** 📋  
**Заголовок:** «ComplyFlow — PRD v1.0»

Начать с `<table_of_contents/>` для навигации.

---

### Шаг 2 — Заполнить секции

Ниже — шаблон **каждой** секции с указанием, что именно и откуда брать. **Не сокращай** — переноси все данные.

---

#### Секция 1: Executive Summary

Формат: `<callout icon="⚡" color="yellow_bg">`

Содержание (внутри callout):
- **Одно предложение:** что это + для кого + юрисдикция (из `brief.md`)
- **Проблема:** 8 инструментов без интеграции, 85-90% ложных алертов, решения в Slack, 4 дня на подготовку к проверке. Конкретные цифры из `interview_marina.md`
- **Ключевой инсайт:** ни один из 5 конкурентов не имеет approval workflow — конкретные имена из `competitive_analysis_final.md`
- **Решение:** MVP из 12 фич — перечислить кратко
- **Primary-персона:** Марина, её JTBD (из `personas.md`)

---

#### Секция 2: Цели и метрики

**2.1 North Star метрика** — в `<callout icon="⭐" color="blue_bg">`:
- Метрика + объяснение почему именно она (из `prd.md`)

**2.2 OKR** — 3 Objective, каждый с 3 Key Results:

Для **каждого** Objective — отдельная таблица:
```
<table header-row="true">
<tr><td>Key Result</td><td>Цель</td><td>Срок</td><td>Как измеряем</td></tr>
<tr><td>KR X.1</td><td>...</td><td>...</td><td>...</td></tr>
<tr><td>KR X.2</td><td>...</td><td>...</td><td>...</td></tr>
<tr><td>KR X.3</td><td>...</td><td>...</td><td>...</td></tr>
</table>
```

**КРИТИЧНО:** Каждая строка таблицы — отдельный `<tr>`. НИКОГДА не объединять строки. Каждый KR = отдельный `<tr>`.

Данные: из `prd.md` секция 2.

---

#### Секция 3: Целевая аудитория

Для **каждой персоны** (3 штуки):

**3.1 Марина — Compliance Officer (Primary)**
- `<callout icon="👩‍💼" color="blue_bg">` — краткий профиль: роль, компания, численность, кол-во клиентов, рост, кол-во алертов, кол-во инструментов, готовность к проверке ЦБ
- JTBD — полная формулировка из `personas.md`
- **Типичный день** — пронумерованный список из `interview_marina.md` (5 пунктов с конкретным временем)
- **Раздражители** — маркированный список, 5 пунктов с цитатами из интервью
- **Дизайн-инсайты** — маркированный список, 5 пунктов (из секции «Инсайты → Дизайн-решения» в `personas.md`)

**3.2 Алексей — CEO / Founder (Primary)**
- `<callout icon="👨‍💼" color="purple_bg">` — профиль
- JTBD
- **Сценарий конфликта** — описание конкретного кейса (из `personas.md` и `interview_marina.md` блок 5)
- **Дизайн-инсайты** — 4 пункта

**3.3 Дмитрий — Backend-разработчик (Secondary)**
- `<callout icon="👨‍💻" color="green_bg">` — профиль
- JTBD
- **Дизайн-инсайты** — 4 пункта

**3.4 Сводная таблица**
```
<table header-row="true" header-column="true">
```
Колонки: (пусто), Марина (CO), Алексей (CEO), Дмитрий (Dev)
Строки: JTBD, Приоритет, Частота, Ключевой дизайн-вывод, Dealbreaker — каждая в отдельном `<tr>`

Данные: из `personas.md` сводная таблица (5 строк × 4 колонки).

---

#### Секция 4: Конкурентный ландшафт

**4.1 Обзор рынка** — абзац (из `competitive_analysis_final.md` + `deep_research_results.md`)

**4.2 SWOT конкурентов** — 5 toggle-блоков (`<details>`):
Для **каждого** конкурента (Sumsub, ComplyAdvantage, Unit21, Salv, Ondato):
```
<details>
<summary>Название — категория</summary>
    **S:** 3-5 пунктов (из competitor_swot.md)
    **W:** 3-5 пунктов
    **O:** 2-3 пункта (наши возможности)
    **T:** 1-2 пункта
</details>
```
Не сокращать до 1 строки — переносить **все** пункты из `competitor_swot.md`.

**4.3 Таблица дифференциаторов**
```
<table header-row="true" header-column="true">
```
Строки (каждая — отдельный `<tr>`): Approval Workflow, Эскалация CEO, Перечень РФМ, ФЭС (v1.1), IDF-кириллица, Бизнес-язык правил, Free tier, KYC, Transaction monitoring, API

Данные: из `prd.md` секция 4.

**4.4 UX-аудит Sumsub** — `<callout icon="🔍" color="orange_bg">`:
- Общая статистика: 16 проблем × 10 эвристик. Severity breakdown: X catastrophic, X major, X minor, X cosmetic
- **Catastrophic** — конкретные проблемы
- **Перенять** — 3-5 паттернов
- **Избежать** — 3-5 антипаттернов

Данные: из `audit/audit_report.md`

---

#### Секция 5: Инсайты из исследования

**5.1 Общая статистика** — `<callout icon="🎙️" color="green_bg">`:
«Симуляция: X вопросов, Y блоков. 7/7 гипотез подтверждены. 6 новых инсайтов, 6 edge cases, 3 противоречия.»

**5.2 Подтверждённые гипотезы** — таблица:
```
<table header-row="true">
<tr><td>Гипотеза</td><td>Статус</td><td>Доказательство</td></tr>
```
**ВСЕ 7 строк** из `interview_marina.md` секция «Подтвердившиеся предположения» — каждая гипотеза в отдельном `<tr>`.

**5.3 Новые инсайты** — таблица:
```
<tr><td>#</td><td>Инсайт</td><td>Влияние на продукт</td></tr>
```
**ВСЕ 6 строк** из `interview_marina.md` секция «Новые инсайты».

**5.4 Противоречия** — таблица:
```
<tr><td>Предположение</td><td>Реальность</td><td>Вывод</td></tr>
```
**ВСЕ 3 строки** из `interview_marina.md`.

**5.5 Edge cases** — маркированный список с эмодзи ⚠️:
**ВСЕ 6 edge cases** из `interview_marina.md`, каждый с пометкой «Был ли учтён».

**5.6 Рекомендации для дизайна** — пронумерованный список:
**ВСЕ 5 рекомендаций** из `interview_marina.md`.

---

#### Секция 6: MVP Scope

**6.1 Формулировка** — `<callout icon="🎯" color="green_bg">`:
Одно предложение из `mvp_scope.md`

**6.2 Must Have** — таблица:
```
<tr><td>#</td><td>Фича</td><td>Описание</td><td>Обоснование</td></tr>
```
**ВСЕ 12 строк** (F01, F02, F04, F07, F08, F09, F13, F15, F16, F26, F32, F46) — каждая в отдельном `<tr>`.
Данные: из `prioritization.md` (Must Have) + `features_list.md` (описания).

**6.3 Основной сценарий Марины** — пронумерованный список (7 шагов из `prd.md`).

**6.4 Не входит в MVP** — таблица:
```
<tr><td>Фича</td><td>Версия</td><td>Почему не сейчас</td></tr>
```
3 строки (ФЭС, IDF, CEO Dashboard) — каждая в отдельном `<tr>`.

---

#### Секция 7: User Stories

Вставить ссылку на базу данных User Stories:
```
<database url="[URL]" inline="false">User Stories</database>
```

---

#### Секция 8: Нефункциональные требования

**3 подсекции** (Производительность, Безопасность, Доступность), каждая — отдельная таблица.

Производительность:
```
Строки: API latency (<300ms p95, <1s p99), Dashboard load (<2s), Alert queue (100 алертов <1s), Concurrent users (≥50)
```

Безопасность:
```
Строки: Шифрование (TLS 1.3 + AES-256), 2FA (TOTP обязательно), Audit trail (immutable), ПД (152-ФЗ), Retention (≥5 лет), ГОСТ (подготовка v1.1)
```

Доступность:
```
Строки: SLA (99.9%), Web (4 браузера), Адаптивность (Desktop-first), API (REST, JSON, OpenAPI 3.0)
```

**КАЖДЫЙ параметр** = отдельный `<tr>`.

---

#### Секция 9: Риски и открытые вопросы

**9.1 Риски** — `<callout icon="🔴" color="red_bg">`:
- **Высокие** (3 риска с митигацией)
- **Средние** (3 риска с митигацией)
Данные: из `prd.md` секция 8.

**9.2 Открытые вопросы** — таблица:
```
<tr><td>#</td><td>Вопрос</td><td>Как узнать</td></tr>
```
**ВСЕ 5 вопросов** — каждый в отдельном `<tr>`.

---

#### Секция 10: Roadmap

Таблица с **3 строками** (по одной на версию):
```
<tr><td>Версия</td><td>Срок</td><td>Фокус</td><td>Ключевые фичи</td></tr>
<tr><td>v1.0 MVP</td><td>Мес. 1-3</td><td>Core workflow</td><td>KYC, РФМ, Alert queue, Bulk, Approval, Эскалация, Audit trail, RBAC, API, Нотификации</td></tr>
<tr><td>v1.1 Growth</td><td>Мес. 4-6</td><td>Автоматизация</td><td>IDF, ФЭС, CEO Dashboard, No-code rules, Swagger, Sandbox, Обучение</td></tr>
<tr><td>v2.0 Scale</td><td>Мес. 7-12</td><td>Расширение</td><td>ПДЛ, Liveness, KYB, ГОСТ, Graph analytics, LLM</td></tr>
```

---

#### Секция 11: Feature Roadmap (Database)

Вставить ссылку на базу Feature Roadmap:
```
<database url="[URL]" inline="false">Feature Roadmap</database>
```

---

#### Секция 12: Приложения

**12.1 MoSCoW-сводка** — таблица:
```
<tr><td>Категория</td><td>Кол-во</td><td>%</td></tr>
```
4 строки + итого: Must(12/26%), Should(16/35%), Could(14/30%), Won't(4/9%).

**12.2 Исходные документы** — маркированный список:
Каждый документ с кратким описанием (без ссылок — они локальные).

---

### Шаг 3 — Заполнить базу User Stories

**Для каждой** из 11 User Stories (US-01 — US-11):

**Свойства:**
- Story: «US-XX: Название»
- Priority: Must / Should / Could / Wont
- Persona: Марина CO / Алексей CEO / Дмитрий Dev / PM
- Status: Not started

**Содержимое страницы** (заполнить, НЕ оставлять пустой!):

```
**Как** [персона], **я хочу** [действие], **чтобы** [результат].

### Acceptance Criteria

- [ ] AC 1
- [ ] AC 2
- [ ] AC 3
- [ ] AC 4
- [ ] AC 5
```

Данные: из `prd.md` секция 6 (User Stories).

### Шаг 4 — Заполнить базу Feature Roadmap

Добавить **ВСЕ 46 фич** из `features_list.md` + `prioritization.md`:

**Свойства:**
- Feature: Название фичи
- Version: v1.0 MVP / v1.1 Growth / v2.0 Scale
- Priority: Must / Should / Could / Wont
- Description: Краткое описание из `features_list.md`

Маппинг версий:
- Must have (12 фич) → v1.0 MVP
- Should have (16 фич) → v1.1 Growth
- Could have (14 фич) → v2.0 Scale
- Won't have (4 фичи) → v2.0 Scale, Priority: Wont

### Шаг 5 — Создать Views

**User Stories database:**
1. Table view (default) — все US
2. Board view — сгруппировать по Priority

**Feature Roadmap database:**
1. Table view (default) — все фичи
2. Board view — сгруппировать по Version

---

## Правила форматирования Notion

### Таблицы
- **КАЖДАЯ строка данных = отдельный `<tr>`**. Никогда не объединять несколько строк в одну.
- Всегда использовать `header-row="true"`.
- Для таблиц с первой колонкой-заголовком: `header-column="true"`.
- Формат ячеек: `<td>содержимое</td>`. Rich text внутри ячеек через `**bold**`, *italic*.

### Callouts
- Использовать для Executive Summary, North Star, профилей персон, рисков.
- Формат: `<callout icon="emoji" color="color_bg">содержание</callout>`
- Контент внутри callout — с табуляцией.

### Toggles (Details)
- Использовать для SWOT конкурентов.
- Формат: `<details><summary>заголовок</summary>содержание</details>`
- Контент внутри — с табуляцией.

### Цвета
- `yellow_bg` — Executive Summary
- `blue_bg` — North Star, Марина
- `purple_bg` — Алексей
- `green_bg` — Дмитрий, MVP scope, интервью
- `orange_bg` — UX-аудит
- `red_bg` — риски

---

## Verification Checklist

После публикации проверь:

- [ ] **Структура:** 12 секций + table of contents
- [ ] **Таблицы:** каждая строка = отдельный `<tr>` (НИКОГДА не сливать)
- [ ] **OKR:** 3 Objective × 3 KR = 9 Key Results видны
- [ ] **Персоны:** 3 профиля + сводная таблица (5 строк)
- [ ] **Конкуренты:** 5 toggles с развёрнутым SWOT + таблица дифференциаторов (10 строк)
- [ ] **Инсайты:** 7 гипотез + 6 инсайтов + 3 противоречия + 6 edge cases + 5 рекомендаций
- [ ] **MVP:** таблица с 12 фичами (все Must Have)
- [ ] **User Stories DB:** 11 записей, **каждая с содержимым** (формулировка + AC)
- [ ] **Feature Roadmap DB:** 46 записей с Version и Priority
- [ ] **Roadmap таблица:** 3 строки (v1.0, v1.1, v2.0)
- [ ] **Board views:** созданы для обеих баз

## Формат результата

1. PRD-контент уже сохранён локально в `prd.md`
2. Опубликуй в Notion как структурированную страницу
3. Верни ссылку на созданную страницу
4. Пройди verification checklist
