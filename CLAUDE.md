# CLAUDE.md — ComplyFlow

**ComplyFlow** — финтех-платформа для Compliance Officer (b2b, ru). Курсовой проект.  
Stack: Vite + React + TypeScript + CSS Modules. Живая версия: https://ai-lessons-big14.vercel.app

---

## Design System

Контракт: [`ds/CONTRACT.md`](ds/CONTRACT.md) · Токены: [`ds/foundation.md`](ds/foundation.md) · Компоненты: [`ds/components.md`](ds/components.md)

**Figma:** fileKey `db4toOFLXGlhYUNH4CD1YT` · Страницы: `wireframes`, `sitemap`, `userflow`

---

## Навыки (`.claude/skills/`)

| Навык | Когда |
|---|---|
| `/screens` | построить/дополнить React-экраны из wireframes |
| `/wire` | добавить навигацию, состояния, формы в экраны |
| `/deploy` | задеплоить на Vercel или VPS |
| `/dashboard` | поднять сбор юзер-тестов (ngrok + tracker) |
| `/ds-baseline` | собрать DS-базелайн в Figma |
| `/react-base` | скаффолдить React-проект с нуля |
| `/handoff` | залить проект на GitHub |
| `/wireframes` | создать low-fi wireframes в Figma |
| `/ux-audit` | аудит экранов по эвристикам |
| `/research` | быстрое/глубокое исследование темы |
| `/competitive-analysis` | конкурентный анализ |
| `/personas` | создать/обновить персоны |
| `/prd` | написать/обновить PRD в Notion |

Навыки также срабатывают автоматически по описанию. Новый навык виден после перезапуска.

---

## Субагенты (`.claude/agents/`)

- **figma-reader** — читает Figma-ноды, возвращает структурированный контекст (не засоряет основной контекст сырыми API-ответами)
- **web-researcher** — веб-поиск по конкурентам, RegTech, UX-паттернам

---

## Правила Figma (use_figma)

1. Все мутации — синхронный код с явным `return`. Async IIFE не работает.
2. `setBoundVariableForPaint(paint, field, var)` **возвращает новый объект** — использовать возвращаемое значение.
3. `figma.setCurrentPageAsync` — использовать `page.appendChild(node)` вместо.
4. `counterAxisAlignItems`: `"MIN" | "MAX" | "CENTER" | "BASELINE"` (не `"END"`).
5. ALL-FIXED паттерн: `primaryAxisSizingMode="FIXED"`, `counterAxisSizingMode="FIXED"`, явный `resize(w,h)`.
6. Текстовые ноды → `loadFontAsync`; в синхронном коде — прямоугольники-заглушки.

---

## Структура

```
.claude/skills/   — навыки (13 штук)
.claude/agents/   — субагенты (figma-reader, web-researcher)
directives/       — исходные директивы (источник для навыков)
ds/               — Design System
src/              — React-приложение
dashboard/        — бандл юзер-тестов
PROJECT.md        — живая ссылка и репо
```
