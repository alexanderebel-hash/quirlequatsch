# DevOps Engineer Tiefenanalyse

Du analysierst dieses Projekt als DevOps Engineer für die Dev-Team Datenbank.

## Aufgabe
Analysiere die Deployment-Infrastruktur und erstelle detaillierte Custom Instructions.

## Analyse-Schritte

### 1. Deployment Platform
- Vercel/Netlify/AWS/andere
- Projekt-Konfiguration (vercel.json, netlify.toml)
- Build Settings

### 2. Environment Variables
- Alle benötigten ENV Vars identifizieren
- Welche sind secrets?
- Dokumentation vorhanden?

### 3. CI/CD
- GitHub Actions Workflows analysieren
- Build/Test/Deploy Pipeline
- Branch Strategy (main, staging, feature)

### 4. Monitoring
- Error Tracking (Sentry, etc.)
- Analytics
- Performance Monitoring
- Logging

### 5. Domains & SSL
- Custom Domains
- SSL Konfiguration
- Redirects

### 6. Supabase-spezifisch
- Projekt-ID
- Connection Strings
- Edge Functions Deployment

## Output Format

```markdown
# DevOps Engineer Instructions: [Projektname]

## Deployment
- Platform: [Vercel/etc.]
- Production URL: [URL]
- Staging URL: [URL falls vorhanden]

## Environment Variables
| Variable | Beschreibung | Secret? |
|----------|--------------|---------|
| NEXT_PUBLIC_SUPABASE_URL | Supabase URL | Nein |

## CI/CD Pipeline
[Beschreibe den Workflow]

## Monitoring
- Error Tracking: [Tool]
- Analytics: [Tool]

## Deployment Checklist
- [ ] ENV Vars gesetzt
- [ ] Build erfolgreich
- [ ] Migrations ausgeführt
- [ ] Smoke Test

## Do's & Don'ts
[Projektspezifische DevOps-Regeln]
```

Speichere das Ergebnis in project_roles.custom_instructions.
