#!/bin/bash
# execution/create_ui_kit_rest.sh
# Создаёт компоненты UI Kit Extended в Figma через REST API
# Требует: FIGMA_PERSONAL_ACCESS_TOKEN в .env и FILE_KEY

set -e

# --- Загрузка токена из .env ---
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

TOKEN="${FIGMA_PERSONAL_ACCESS_TOKEN}"
FILE_KEY="db4toOFLXGlhYUNH4CD1YT"
BASE="https://api.figma.com/v1"

if [ -z "$TOKEN" ]; then
  echo "❌ FIGMA_PERSONAL_ACCESS_TOKEN не найден в .env"
  exit 1
fi

echo "✅ Токен найден. Проверяем доступ к файлу Figma..."

# --- 1. Проверяем доступ к файлу ---
RESPONSE=$(curl -s -o /tmp/figma_file.json -w "%{http_code}" \
  -H "X-Figma-Token: $TOKEN" \
  "$BASE/files/$FILE_KEY?depth=1")

if [ "$RESPONSE" != "200" ]; then
  echo "❌ Ошибка доступа к файлу Figma (HTTP $RESPONSE)"
  cat /tmp/figma_file.json
  exit 1
fi

echo "✅ Файл доступен."

# --- 2. Получаем ID первой страницы ---
PAGE_ID=$(python3 -c "
import json, sys
data = json.load(open('/tmp/figma_file.json'))
pages = data['document']['children']
print(pages[0]['id'])
")

echo "📄 Первая страница: $PAGE_ID"

# --- 3. Получаем список переменных ---
echo "🔍 Получаем переменные (токены)..."
curl -s -H "X-Figma-Token: $TOKEN" \
  "$BASE/files/$FILE_KEY/variables/local" \
  -o /tmp/figma_vars.json

# Показываем первые 5 переменных для проверки
python3 -c "
import json
data = json.load(open('/tmp/figma_vars.json'))
variables = data.get('meta', {}).get('variables', {})
items = list(variables.values())[:5]
for v in items:
    print(f'  - {v[\"name\"]} ({v[\"id\"]})')
" 2>/dev/null || echo "  (переменные получить не удалось)"

# --- 4. Создаём компоненты через POST /v1/files/:file_key/nodes ---
echo ""
echo "🚀 Создаём раздел 'UI Kit — extended' и компоненты..."

# Figma REST API не поддерживает создание нод напрямую через открытый API.
# Единственный способ — использовать Figma Plugin API или MCP.
# Поэтому вместо этого мы создадим Python-скрипт, который откроет
# браузер с готовым Figma Plugin URL.

echo ""
echo "ℹ️  Figma REST API (v1) не поддерживает создание нод."
echo "    Единственный способ программно создать компоненты — это:"
echo "    1. Figma Plugin API (запускается внутри Figma)"
echo "    2. Figma Dev Mode MCP Server (требует настольное приложение)"
echo ""
echo "📋 Информация о файле:"
python3 -c "
import json
data = json.load(open('/tmp/figma_file.json'))
print(f'  Файл: {data[\"name\"]}')
print(f'  Страниц: {len(data[\"document\"][\"children\"])}')
for p in data[\"document\"][\"children\"]:
    print(f'    - {p[\"name\"]} ({p[\"id\"]})')
"

echo ""
echo "✅ Диагностика завершена. Файл Figma доступен."
echo "   Для создания компонентов нужен Figma Plugin или Dev Mode MCP Server."
