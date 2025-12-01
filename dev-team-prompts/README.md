# 🎯 Dev-Team Analyse-Prompts für CLINE

Dieses Verzeichnis enthält **6 spezialisierte CLINE-Prompts** zur tiefgehenden Analyse deiner Projekte und automatischen Erstellung von Custom Instructions für die Dev-Team Datenbank.

## 📁 Prompts-Übersicht

| # | Rolle | Datei | Fokus |
|---|-------|-------|-------|
| 1️⃣ | **Frontend Developer** | `01-frontend-developer-analyse.md` | UI/UX, Components, State Management, Styling |
| 2️⃣ | **Backend Developer** | `02-backend-developer-analyse.md` | APIs, Auth, Validation, Error Handling |
| 3️⃣ | **Database Engineer** | `03-database-engineer-analyse.md` | Schema, RLS, Indexes, Performance |
| 4️⃣ | **UX Designer** | `04-ux-designer-analyse.md` | Design System, User Flows, Accessibility |
| 5️⃣ | **DevOps Engineer** | `05-devops-engineer-analyse.md` | Deployment, CI/CD, Monitoring |
| 6️⃣ | **Solution Architect** | `06-solution-architect-analyse.md` | Gesamtarchitektur, Tech Stack, ADRs |

## 🚀 Nutzung

### Option A: Manuell pro Projekt ausführen

**Für jedes deiner Projekte (MBC, Getränke-Troll, LernBoost, DomusVita):**

1. **Öffne das Projekt in VS Code**
   ```bash
   cd /path/to/your/project
   code .
   ```

2. **Starte CLINE** (CMD+L oder CTRL+L)

3. **Führe alle 6 Prompts nacheinander aus:**
   - Kopiere den Inhalt von `01-frontend-developer-analyse.md`
   - Füge ihn in CLINE ein
   - Warte auf die Analyse und Speicherung
   - Wiederhole mit den anderen 5 Prompts

**⏱️ Zeitaufwand pro Projekt:** ~15-20 Minuten

---

### Option B: Kopiere die Prompts in Projektordner

Du kannst diesen gesamten Ordner in jedes deiner Projekte kopieren:

```bash
# Beispiel für MBC-Projekt
cp -r dev-team-prompts /path/to/mbc-zustellmanagement/

# Dann im Projekt die Prompts einzeln an CLINE geben
```

---

## 📋 Empfohlene Reihenfolge

| Prio | Projekt | Begründung |
|------|---------|------------|
| 1️⃣ | **MBC Zustellmanagement** | Komplexestes Projekt, meiste Learnings |
| 2️⃣ | **Getränke-Troll** | Aktives Projekt, Parallel-System-Architektur |
| 3️⃣ | **LernBoost (quirlequatsch)** | Spezielle UX-Anforderungen (Kinder) |
| 4️⃣ | **DomusVita** | Healthcare Compliance wichtig |

---

## 🎯 Was passiert bei der Analyse?

Jeder Prompt führt folgende Schritte aus:

1. **Codebase-Scanning**: Liest relevante Dateien und Strukturen
2. **Pattern-Erkennung**: Identifiziert etablierte Patterns und Best Practices
3. **Dokumentation**: Erstellt strukturiertes Markdown-Dokument
4. **Speicherung**: Schreibt Custom Instructions in die Dev-Team DB unter `project_roles.custom_instructions`

---

## 📊 Erwartete Ergebnisse

Nach Durchlaufen aller 6 Prompts hast du:

✅ **Vollständige Tech-Stack-Dokumentation**  
✅ **Rollenspezifische Best Practices**  
✅ **Code-Patterns und Conventions**  
✅ **Do's & Don'ts pro Rolle**  
✅ **Projektspezifische Beispiele**  
✅ **Architektur-Diagramme (ADRs)**

---

## 🔄 Workflow-Beispiel

```plaintext
1. cd ~/projects/mbc-zustellmanagement
2. code .
3. CLINE öffnen (CMD+L)
4. Prompt 1: Frontend Developer → 3 Minuten
5. Prompt 2: Backend Developer → 3 Minuten
6. Prompt 3: Database Engineer → 3 Minuten
7. Prompt 4: UX Designer → 2 Minuten
8. Prompt 5: DevOps Engineer → 2 Minuten
9. Prompt 6: Solution Architect → 3 Minuten

✅ Projekt-Analyse komplett! (~16 Min)
```

---

## 💡 Tipps

- **Batch-Verarbeitung**: Du kannst auch mehrere Prompts in einer Session nacheinander ausführen
- **Zwischenspeichern**: Die Ergebnisse werden automatisch in der Supabase Dev-Team DB gespeichert
- **Iterativ verbessern**: Nach der ersten Analyse kannst du Prompts nochmal ausführen, wenn sich das Projekt weiterentwickelt hat
- **Anpassungen**: Du kannst die Prompts an projektspezifische Besonderheiten anpassen

---

## 🔧 Voraussetzungen

- ✅ CLINE Extension installiert
- ✅ Zugriff auf Dev-Team Datenbank (Supabase)
- ✅ Projekt lokal verfügbar

---

## 📝 Nach der Analyse

Die generierten Custom Instructions kannst du dann nutzen für:

1. **Kontext-Switching**: CLINE wechselt automatisch die Rolle basierend auf der Aufgabe
2. **Onboarding neuer Team-Mitglieder**: Dokumentation ist sofort verfügbar
3. **Konsistenz**: Alle Entwickler folgen den gleichen Patterns
4. **Wissenstransfer**: Best Practices sind dokumentiert

---

## ⚙️ Troubleshooting

**Problem**: CLINE findet bestimmte Dateien nicht  
**Lösung**: Stelle sicher, dass du im richtigen Projektverzeichnis bist

**Problem**: Analyse dauert sehr lange  
**Lösung**: Bei sehr großen Projekten kann es 5-10 Minuten pro Prompt dauern

**Problem**: Custom Instructions werden nicht gespeichert  
**Lösung**: Prüfe die Supabase-Verbindung in `.env.local`

---

## 📚 Nächste Schritte

Nach erfolgreicher Analyse aller Projekte:

1. **Überprüfe** die generierten Custom Instructions in der Dev-Team DB
2. **Verfeinere** bei Bedarf manuell einzelne Instructions
3. **Nutze** die Instructions aktiv in deinen CLINE-Sessions
4. **Aktualisiere** regelmäßig wenn sich Projekte weiterentwickeln

---

## 🎓 Gesamtaufwand

| Aktivität | Zeit |
|-----------|------|
| 4 Projekte × 6 Prompts | ~1-1,5 Stunden |
| Review & Verfeinerung | ~30 Minuten |
| **GESAMT** | **~2 Stunden** |

**Einmaliger Aufwand → Dauerhafter Nutzen!** 🚀

---

Erstellt: 28.11.2025  
Version: 1.0  
Kompatibel mit: CLINE, Supabase Dev-Team DB
