# Brand Visual Direction — ComplyFlow

## Essence

Холодный, методичный, точный, институциональный, сдержанный.

Метафора-якорь: **штемпель на официальном документе** — синяя печать на белой бумаге, не украшение, а подпись авторитета. Визуал работает как инструмент фиксации, а не как витрина.

---

## Material focus

Продукт цифровой, поэтому «материал» — это информационная структура: таблицы с чёткими границами, числовые блоки, статусные маркеры с геометрическими краями. Аналог материала в иллюстрации: холодная матовая поверхность официального документа — без фактуры, без тепла, без декора. Плотность информации в кадре — сама по себе материал. Крупный числовой показатель (42 алерта) рядом с маленьким типографским лейблом — это и есть тактильность этого продукта.

---

## Palette

**Доминанта:** `#1D4ED8` — чернильный синий, как штемпельная подушка или ink-печать на официальной справке. Не «корпоративный синий», а синий с весом и историей.

**Основной фон рабочих поверхностей:** `#F9FAFB` — холодный бумажный белый. Не тёплый, не кремовый. Именно холодный — как бумага под флуоресцентным светом.

**Тёмные зоны / контраст:** `#111827` — почти-чёрный антрацит. Используется для плашек с критической информацией, не как «ночной режим» — а как тяжёлый акцент.

**Сигнальные акценты (режут, не украшают):**
- `#D97706` — тёплый янтарь предупреждения. Режущий сигнал на холодном фоне.
- `#DC2626` — кровяной красный стоп-маркера. Жёсткий, не декоративный.
- `#16A34A` — подтверждающий зелёный. Институциональный, не праздничный.

**Ограничения:** никаких градиентных переходов между акцентными цветами. Цвет — как метка классификации, не как украшение.

---

## Light behavior

Сознательный выбор: **clean studio без графических лучей.** Для compliance-инструмента свет работает через контраст поверхностей, а не как атмосферный элемент. Тёмный (#111827) фон → чёткий белый типографский блок — это и есть световой контраст.

Единственный допустимый графический свет: жёсткое прямоугольное пятно изолирующего света — как луч проектора на таблицу данных, выделяющий один объект в сцене. Не lens flare, не chromatic aberration как декор, не мягкое glow. Геометрия, не атмосфера.

---

## Composition principles

**Информационная асимметрия как принцип:** крупное числовое значение (`42`) + маленький типографский лейбл (`алерта за сегодня`) — это и есть смелость кадра. Масштабный контраст через данные, не через эмоциональный close-up лиц.

**Grid-aligned иерархия:** всё выровнено по сетке, информация расставлена в строгой иерархии, никаких свободных плавающих элементов.

**Что не используется:** close-up лиц, эмоциональная «живая» фотография, произвольная асимметрия ради динамики, диагональные композиции. Если используется человек — только руки над клавиатурой или фрагмент рабочего стола: инструмент, не портрет.

---

## Surface

**Сознательно clean digital.** Поверхность читается как цифровой официальный документ: без film grain, без halftone, без плёночных артефактов, без сканлайнов. Резкие края, чёткие границы типографских элементов.

Обоснование: grain и halftone тащат ассоциации арт-принта или ретро-медиа — не то, что нужно продукту, которому доверяют audit trail для ЦБ. Чистота поверхности — это доверие к данным.

---

## Emotional tone

**Холодный, методичный, точный, институциональный, сдержанный.**

Противопоставлено: тёплому дружелюбному consumer UI (Notion, Linear), нарочито «человечному» SaaS (Intercom, Mailchimp), финтех-ярмарочному (неон, конфетти, celebration states). ComplyFlow — это не приложение, которому радуются. Это инструмент, которому доверяют.

---

## Typography tone

**Inter** единственный шрифт — геометрический sans с холодной нейтральной температурой. Кириллица покрыта полностью.

Акцентные начертания: **Bold / Semibold** для критических числовых показателей (счётчики алертов, суммы транзакций, временны́е метки). **Regular / Medium** для тела, лейблов, метаинформации. Моноширинные цифры (`font-variant-numeric: tabular-nums`) для всех числовых колонок — данные должны выравниваться по вертикали.

Никакого декоративного использования типографики: никаких гигантских букв как фона, никаких рукописных акцентов, никакого letter-spacing-label вне контекста меток.

---

## Avoid (anti-references)

```
no neon gradients, no purple-cyan combos, no magenta-to-blue transitions
no warm lifestyle photography: no smiling people with laptops, no coworking scenes
no glassmorphism: no frosted card layers, no backdrop-blur as main aesthetic
no floating 3D objects: no spheres, no abstract geometric shapes in space
no animated gradient backgrounds
no circuit pattern overlays, no holographic UI in hands, no HUD-over-face
no warm paper backgrounds: no beige, no cream, no warm off-white
no celebration/confetti states — success is a green checkmark, not fireworks
no clay render, no soft 3D illustration style
no colorful vendor illustration packs (2018–2020 style flat characters)
no "futuristic", "sci-fi", "innovative" as style markers
no chromatic aberration as decorative effect
```

---

## Ready-to-use blocks for JSON

```json
{
  "style": "Clean digital document aesthetic with institutional authority. Information-dense compositions built on strict grid alignment, where scale contrast between large numerical values and small typographic labels creates visual hierarchy. Cold matte surfaces with no grain, no texture, no warmth — every edge sharp, every border precise. Primary palette: deep ink blue (#1D4ED8) on cold paper white (#F9FAFB), with near-black (#111827) blocks for high-stakes information. Signal colors (amber #D97706, red #DC2626) used as hard classification markers, not decoration. No photographic warmth, no atmospheric elements, no lens flare. The graphic language of an official document: authoritative, irreversible, exact.",
  "mood": "холодный, методичный, точный, институциональный, сдержанный — как подпись аудитора на официальном заключении",
  "lighting": "clean studio, no graphic light elements; if light is used — hard rectangular isolating spotlight on a data object, geometric not atmospheric, no flare, no aberration",
  "camera": "UI documentation approach: straight-on, no perspective distortion, no depth-of-field blur; if illustration — flat vector with hard edges, zero painterly softness, tabular density; human elements only as hands-on-keyboard fragments, never portrait"
}
```

---

## Application notes

**Иллюстрации пустых состояний (empty states):**
Использовать style + mood. Subject: абстрактная структура пустой таблицы или нулевой счётчик. Не рисовать грустного персонажа. Пример: `subject: "empty data grid with zero-state counter, clean lines, no data rows"`.

**Маркетинговые баннеры:**
Использовать style + mood + lighting + camera. Subject: фрагмент dashboard с реальными данными (числа, статусы, алерты). Не рисовать людей и офисы. Пример: `subject: "alert queue dashboard fragment, 42 alerts counter, severity badges in amber and red, dark header band on cold white surface"`.

**Иконки / пиктограммы:**
Геометрические, монолинейные или filled — строго в акцентном синем или нейтральном gray-700. Никакого multi-color без семантической причины.

**Брендовые иллюстрации (onboarding, landing):**
Subject всегда — процесс или данные, не люди. `subject: "compliance workflow diagram: approval chain with decision nodes, ink blue connectors on white, no decorative elements"`.
