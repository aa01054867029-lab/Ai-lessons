# Sitemap — ComplyFlow v1.0

Маркеры: `[core]` — MVP | `[v2]` — v1.1 Growth | `[later]` — бэклог

## Основное приложение

```
Home [core] — DashboardCO, точка входа; счётчики алертов, клиентов, pending approvals
  Alerts — раздел работы с алертами
    AlertQueue [core] — очередь с фильтрами (severity/тип/дата/статус) и bulk-действиями (F08, F09)
    AlertCard [core] — карточка кейса: данные клиента, правило, история транзакций, Approve/Reject (F07, F02)
  Clients — раздел верификации клиентов
    ClientsList [core] — список клиентов с поиском и статусами KYC
    ClientCard [core] — карточка: документы, результат KYC, совпадение с перечнем РФМ (F01, F02, F04)
    KYCUpload [core] — загрузка паспорта и результат OCR < 10 сек (F01)
  Approvals — Maker-Checker workflow
    ApprovalRequests [core] — список входящих запросов на согласование для CO (F13)
    ApprovalRequestCard [core] — карточка запроса: что меняется, Approve/Reject с комментарием (F13)
    CreateApprovalRequest [core] — форма PM для создания запроса на изменение правила (F13)
    EscalationCard [core] — карточка эскалации к CEO: Override / Поддержать блокировку (F15)
  AuditTrail [core] — журнал решений; фильтры; экспорт JSON/CSV (F16)
  Settings — раздел настроек
    Profile [core] — имя, email, фото
    Security [core] — пароль, 2FA (обязательно для CO/CEO), активные сессии
    NotificationSettings [core] — Email/Slack, триггеры, Do Not Disturb (F46)
    TeamSettings [core] — участники, роли RBAC, инвайты (F26)
    APIKeys [core] — управление API-ключами для Dev-роли (F32)
```

---

## Аутентификация (до входа)

```
Auth
  Login [core] — вход по email и паролю
  TwoFactorAuth [core] — ввод TOTP-кода (обязательно для CO и CEO)
  ForgotPassword [core] — запрос ссылки сброса пароля
  ResetPassword [core] — установка нового пароля по ссылке из email
  InviteAccept [core] — переход по инвайт-ссылке, выбор пароля, завершение регистрации
```

---

## Служебные экраны

```
Service
  OnboardingWelcome [v2] — первый вход CO в пустую платформу; подсказки по первоначальной настройке
  NotFound [core] — 404, страница не найдена
  ServerError [core] — 500, критическая ошибка сервера
  Maintenance [v2] — заглушка на время технических работ
```
