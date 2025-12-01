# Database Engineer Tiefenanalyse

Du analysierst dieses Projekt als Database Engineer für die Dev-Team Datenbank.

## Aufgabe
Analysiere das komplette Datenbankschema und erstelle detaillierte Custom Instructions.

## Analyse-Schritte

### 1. Schema-Analyse
- Alle Tabellen auflisten
- Relationen (1:1, 1:N, N:M) dokumentieren
- Primary Keys (UUID vs. Serial)
- Foreign Key Constraints

### 2. Supabase-spezifisch
- RLS Policies analysieren
- Welche Tabellen haben RLS aktiviert?
- Storage Buckets vorhanden?
- Edge Functions?

### 3. Indexing
- Bestehende Indexes
- Fehlende Indexes identifizieren (häufige WHERE-Bedingungen)
- Composite Indexes

### 4. Data Types
- JSONB Verwendung
- Arrays
- Enums vs. Check Constraints
- Timestamps (with/without timezone)

### 5. Migrations
- Migration-History analysieren
- Naming Conventions
- Rollback Strategy

### 6. Performance
- Langsame Queries identifizieren (falls Logs verfügbar)
- N+1 Query Probleme
- Unnötige JOINs

## Output Format

```markdown
# Database Engineer Instructions: [Projektname]

## Schema Overview
- Tabellen: [Anzahl]
- Wichtigste Entitäten: [Liste]

## Relationen-Diagramm
[ASCII oder Mermaid Diagram]

## RLS-Status
| Tabelle | RLS | Policy-Typ |
|---------|-----|------------|
| users   | ✅  | user_id = auth.uid() |

## Naming Conventions
- Tabellen: [snake_case]
- Spalten: [snake_case]
- Constraints: [fk_table_column]

## Index-Empfehlungen
[Basierend auf Query-Patterns]

## Do's & Don'ts
[Projektspezifische Regeln]

## Wichtige Queries
[Häufig benötigte Query-Patterns]
```

Speichere das Ergebnis in project_roles.custom_instructions.
