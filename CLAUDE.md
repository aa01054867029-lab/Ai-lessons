# CLAUDE.md — ComplyFlow

Инструкции для AI-ассистента по работе с этим проектом.

---

## Проект

**ComplyFlow** — финтех-платформа для Compliance Officer (b2b, ru).  
Курсовой проект. Дизайн-система + wireframes + документация.

---

## Design System

Контракт: [`ds/CONTRACT.md`](ds/CONTRACT.md)  
Токены (принципы): [`ds/foundation.md`](ds/foundation.md)  
Компоненты: [`ds/components.md`](ds/components.md)  
Бриф: [`ds/brand-brief.md`](ds/brand-brief.md)

**Figma-файл:** `https://www.figma.com/design/db4toOFLXGlhYUNH4CD1YT/`  
fileKey: `db4toOFLXGlhYUNH4CD1YT`

Страницы:
- `wireframes` — 5 low-fi wireframes + секция **Foundation** (DS)
- `sitemap` — архитектура (нарисована вручную)
- `userflow` — Daily CO Flow

---

## Правила работы с Figma (use_figma)

1. Все мутации — синхронный код с явным `return`. Async IIFE не работает (инструмент не ждёт Promise).
2. `figma.variables.getLocalVariables()` и `getLocalVariableCollections()` — синхронные API.
3. `figma.variables.setBoundVariableForPaint(paint, field, var)` **возвращает новый объект** — использовать возвращаемое значение, не мутировать `paint` in-place.
4. `figma.setCurrentPageAsync(page)` требует async — вместо этого использовать `page.appendChild(node)` для размещения на нужной странице.
5. `counterAxisAlignItems` принимает `"MIN" | "MAX" | "CENTER" | "BASELINE"` (не `"END"`).
6. ALL-FIXED паттерн для надёжных фреймов: `primaryAxisSizingMode="FIXED"`, `counterAxisSizingMode="FIXED"`, явный `resize(w,h)`.
7. Текстовые ноды требуют `loadFontAsync` — в синхронном коде использовать прямоугольники-заглушки.

---

## Структура файлов

```
ds/             — Design System
ia/             — IA, wireframes, flows
directives/     — Директивы для AI
audit/          — Аудит конкурентов
personas.md     — Персоны
prd.md          — PRD
```
