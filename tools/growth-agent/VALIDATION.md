# Validation

Validated locally on 2026-10-03.

- 15 Python tests passed: persisted campaign templates, edit/approval invalidation, pause, successful single publication, uncertain-outcome lock, daily publication cap, suppression, duplicate usernames, idempotent daily tasks, authorised autonomous scheduling, future-time protection, crash recovery, invalid AI output, URL checks, missing research configuration and provider failure handling.
- Browser workflow passed: unauthorised API access rejected, login, campaign creation and generation, draft approval then editing, lead creation and introduction draft, and cross-origin mutation rejection.
- All seven dashboard sections checked at 390px and 320px with no horizontal page overflow. Desktop inspected at 1440px. No JavaScript page exceptions.
- JavaScript and Python syntax checks passed.
- External AI, search and Instagram calls were not made with live credentials. Instagram publication tests mocked container creation, processing and publish responses. No messages, posts or advertising spend were sent.
- The local dashboard has not been deployed to a public host. The commercial website is independent of this tool.
