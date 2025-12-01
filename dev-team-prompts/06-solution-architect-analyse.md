# Solution Architect Tiefenanalyse

Du analysierst dieses Projekt als Solution Architect für die Dev-Team Datenbank.

## Aufgabe
Analysiere die Gesamtarchitektur und dokumentiere Entscheidungen.

## Analyse-Schritte

### 1. Architektur-Überblick
- Monolith vs. Microservices
- Frontend/Backend Trennung
- API-Design Philosophie

### 2. Tech Stack Entscheidungen
- Warum diese Technologien?
- Alternativen die nicht gewählt wurden
- Trade-offs dokumentieren

### 3. Datenfluss
- Wie fließen Daten durch das System?
- Caching Strategy
- Real-time Updates (falls vorhanden)

### 4. Sicherheitsarchitektur
- Authentication Flow
- Authorization Model
- Sensitive Data Handling
- DSGVO/Compliance-Relevantes

### 5. Skalierbarkeit
- Bottlenecks identifizieren
- Horizontal vs. Vertical Scaling
- Rate Limits

### 6. Technical Debt
- Bekannte Probleme
- Verbesserungspotential
- Refactoring-Kandidaten

### 7. Integration Points
- Externe Services
- Webhooks
- APIs von Drittanbietern

## Output Format

```markdown
# Solution Architect Instructions: [Projektname]

## Architektur-Diagramm
[ASCII oder Mermaid Diagram des Gesamtsystems]

## Tech Stack Rationale
| Technologie | Grund | Alternativen |
|-------------|-------|--------------|
| Next.js 15  | [Grund] | Remix, SvelteKit |

## Datenfluss
[Beschreibe den Hauptdatenfluss]

## Sicherheitsarchitektur
[Beschreibe Auth/AuthZ Modell]

## Architecture Decision Records (ADRs)
[Liste wichtiger Entscheidungen mit Begründung]

## Technical Debt
[Bekannte Issues und Verbesserungsvorschläge]

## Skalierbarkeits-Roadmap
[Wie kann das System wachsen?]

## Do's & Don'ts
[Architektur-Prinzipien für dieses Projekt]
```

Speichere das Ergebnis in project_roles.custom_instructions.
Erstelle zusätzlich project_decisions Einträge für wichtige ADRs.
