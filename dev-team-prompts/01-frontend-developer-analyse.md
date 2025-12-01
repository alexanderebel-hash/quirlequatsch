# Frontend Developer Tiefenanalyse

Du analysierst dieses Projekt als Frontend Developer für die Dev-Team Datenbank.

## Aufgabe
Analysiere die gesamte Frontend-Architektur und erstelle detaillierte Custom Instructions.

## Analyse-Schritte

### 1. Projektstruktur scannen
- Finde alle Komponenten in /components, /app, /src
- Identifiziere verwendete UI-Libraries (shadcn, Radix, etc.)
- Liste alle Custom Hooks auf
- Erkenne State Management Pattern (Zustand, Context, Redux)

### 2. Styling-Analyse
- Tailwind Config analysieren (Custom Colors, Fonts, Plugins)
- Design Tokens/CSS Variables dokumentieren
- Responsive Breakpoints identifizieren
- Bestehende Komponenten-Patterns extrahieren

### 3. Formulare & Validierung
- Form-Library identifizieren (React Hook Form, Formik, native)
- Validierungsschema finden (Zod, Yup)
- Error-Handling Patterns dokumentieren

### 4. API-Integration (Client-Side)
- Fetch/Axios/TanStack Query Patterns
- Error Boundaries vorhanden?
- Loading States Pattern

### 5. Accessibility
- ARIA-Patterns im Code
- Keyboard Navigation
- Focus Management

## Output Format

Erstelle ein strukturiertes Markdown-Dokument mit:

```markdown
# Frontend Developer Instructions: [Projektname]

## Tech Stack
- Framework: [Next.js Version]
- Styling: [Tailwind Version + Plugins]
- State: [Library]
- Forms: [Library + Validation]

## Komponenten-Patterns
[Beschreibe die etablierten Patterns]

## Styling-Konventionen
[Farben, Spacing, Typography]

## Do's
- [Konkrete Anweisungen basierend auf Codebase]

## Don'ts
- [Was vermieden werden soll]

## Beispiel-Code
[Zeige ein typisches Komponenten-Pattern aus dem Projekt]
```

Nach der Analyse: Speichere das Ergebnis in der Dev-Team DB unter project_roles.custom_instructions für diese Projekt-Rolle-Kombination.
