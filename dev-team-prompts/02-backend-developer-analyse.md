# Backend Developer Tiefenanalyse

Du analysierst dieses Projekt als Backend Developer für die Dev-Team Datenbank.

## Aufgabe
Analysiere die gesamte Backend-Architektur und erstelle detaillierte Custom Instructions.

## Analyse-Schritte

### 1. API-Struktur
- Route Handlers finden (/api, /app/api)
- Server Actions identifizieren
- API-Versionierung vorhanden?
- Middleware analysieren

### 2. Authentifizierung
- Auth-Library (NextAuth, Supabase Auth, Clerk)
- Session-Handling
- Protected Routes Pattern
- Role-Based Access Control

### 3. Datenbank-Zugriff
- ORM/Client (Prisma, Drizzle, Supabase Client)
- Query Patterns
- Transaktionen
- Connection Pooling

### 4. Externe APIs
- Welche APIs werden integriert?
- API Key Management
- Rate Limiting Implementierung
- Retry Logic

### 5. Error Handling
- Error Types definiert?
- Logging Strategy
- Error Response Format

### 6. Validierung
- Input Validation (Zod Schemas)
- Sanitization
- Type Safety

## Output Format

```markdown
# Backend Developer Instructions: [Projektname]

## API-Architektur
- Pattern: [REST/tRPC/GraphQL]
- Auth: [Library + Strategy]
- Validation: [Library]

## Datenbank-Zugriff
- Client: [Prisma/Supabase/etc.]
- Patterns: [Repository Pattern, Direct Queries, etc.]

## Externe Services
[Liste aller integrierten APIs mit Zweck]

## Security Checklist
- [ ] Input Validation auf allen Endpoints
- [ ] Auth Middleware
- [ ] Rate Limiting
- [ ] CORS Config

## Code Patterns
[Zeige typische API-Route aus dem Projekt]

## Do's & Don'ts
[Projektspezifische Regeln]
```

Speichere das Ergebnis in project_roles.custom_instructions.
