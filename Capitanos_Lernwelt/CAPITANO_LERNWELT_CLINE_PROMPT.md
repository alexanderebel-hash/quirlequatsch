# 🎮 CAPITANO's Lernwelt - Vollständiger Cline Prompt

## 📋 PROJEKT-BRIEFING

**Schüler:** Milan "Capitano", 5. Klasse, Teltow Brandenburg  
**Prüfung:** Übermorgen - Klassenarbeit "Von den Sinnen zum Messen"  
**Ziel:** Interaktive Lernplattform mit Apple-Design-Qualität und Gamification

### Milans Interessen (für Gamification)
- 🎮 **Paluten** - YouTube-Style Kommentare, Easter Eggs
- ⚽ **Fußball** - Ronaldo vs Messi Challenges
- 🟩 **Minecraft** - Subtile Pixel-Akzente, Crafting-Metaphern ("Du hast Wissen gecraftet!")
- 💚 **HULK** - Maskottchen das bei Erfolgen erscheint

### Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Zustand (State Management)
- Vercel Deployment

---

# 🍎 DESIGN SYSTEM (Apple HIG)

## Core Principles
1. **ONE THING AT A TIME** - Eine Hauptaufgabe pro View
2. **DEFER TO CONTENT** - Minimale UI, Content maximieren
3. **CLARITY OVER DENSITY** - Whitespace ist Design
4. **DEPTH THROUGH LAYERS** - Master → Detail → Sheet Hierarchie
5. **FAMILIAR PATTERNS** - Standard Navigation Patterns

## Farbschema (Light/Dark Mode Support)

```css
:root {
  /* Primary Brand Colors */
  --color-hulk-green: #4CAF50;
  --color-hulk-dark: #2E7D32;
  --color-minecraft-grass: #5D9B3A;
  
  /* Apple System Colors */
  --color-primary: #007AFF;
  --color-success: #34C759;
  --color-warning: #FF9500;
  --color-danger: #FF3B30;
  
  /* Label Colors */
  --color-label: rgba(0, 0, 0, 0.85);
  --color-secondary-label: rgba(0, 0, 0, 0.55);
  --color-tertiary-label: rgba(0, 0, 0, 0.30);
  
  /* Background Colors */
  --color-background: #FFFFFF;
  --color-secondary-background: #F2F2F7;
  --color-grouped-background: #F2F2F7;
}
```

## Typography (Inter/System Font)

```css
.text-largeTitle { font-size: 34px; font-weight: 700; line-height: 41px; }
.text-title1 { font-size: 28px; font-weight: 700; line-height: 34px; }
.text-title2 { font-size: 22px; font-weight: 600; line-height: 28px; }
.text-headline { font-size: 17px; font-weight: 600; line-height: 22px; }
.text-body { font-size: 17px; font-weight: 400; line-height: 22px; }
.text-subheadline { font-size: 15px; font-weight: 400; line-height: 20px; }
.text-footnote { font-size: 13px; font-weight: 400; line-height: 18px; }
```

## Spacing (8px Grid)

```css
--spacing-3xs: 2px;
--spacing-2xs: 4px;
--spacing-xs: 8px;
--spacing-sm: 12px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
--spacing-2xl: 48px;
```

---

# 📚 LERNINHALTE (8 Module)

## Modul 1: 👁️ Das Auge & Sehen
**Seiten im Buch:** 18-21

### Kernkonzepte:
- **Aufbau des Auges:** Hornhaut → Pupille → Linse → Glaskörper → Netzhaut → Sehnerv
- **Iris:** Farbiger Muskelring, reguliert Pupillengröße, Farbe durch Melanin
- **Pupille:** Öffnung die Licht einlässt, wird bei Helligkeit kleiner
- **Netzhaut:** Enthält Sehsinneszellen
  - **Stäbchen:** Hell-Dunkel-Sehen
  - **Zapfen:** Farbensehen
- **Blinder Fleck:** Stelle wo Sehnerv austritt, keine Sinneszellen
- **Gelber Fleck:** Bereich mit vielen Sehsinneszellen, schärfstes Sehen
- **Räumliches Sehen:** Zwei Augen → 3D-Wahrnehmung
- **Augenschutz:** Augenhöhle, Augenbrauen, Wimpern, Augenlider, Tränenflüssigkeit

### Interaktive Übungen:
1. **Drag & Drop:** Augenteile beschriften
2. **Quiz:** Funktion der Teile
3. **Experiment-Simulation:** Blinder Fleck finden
4. **Memory:** Augenteil ↔ Funktion

---

## Modul 2: 👂 Das Ohr & Hören
**Seiten im Buch:** 22-25

### Kernkonzepte:
- **Schallwellen:** Schwingungen in der Luft
- **Aufbau des Ohrs:**
  - **Außenohr:** Ohrmuschel, Gehörgang
  - **Mittelohr:** Trommelfell, Gehörknöchelchen (Hammer, Amboss, Steigbügel)
  - **Innenohr:** Hörschnecke (Cochlea), Gleichgewichtsorgan
- **Hörvorgang:** Schallwellen → Trommelfell schwingt → Knöchelchen verstärken → Hörschnecke → elektrische Impulse → Gehirn
- **Hörbereich Mensch:** 20 Hz bis 20.000 Hz (20 kHz)
- **Frequenz:** Anzahl Schwingungen pro Sekunde (Hertz)
  - Hohe Frequenz = hoher Ton
  - Niedrige Frequenz = tiefer Ton
- **Lautstärke:** Stärke der Schwingung

### Interaktive Übungen:
1. **Drag & Drop:** Ohrteile beschriften
2. **Animation:** Weg des Schalls durchs Ohr
3. **Slider:** Frequenzen hören (wenn Audio möglich)
4. **Sortier-Spiel:** Hörbereich verschiedener Tiere

---

## Modul 3: 🐘 Sinnesleistungen von Tieren
**Seiten im Buch:** 26-27

### Kernkonzepte:
- **Infraschall:** Frequenzen unter 20 Hz
  - Elefanten kommunizieren damit über Kilometer
  - Wale nutzen es zur Orientierung
- **Ultraschall:** Frequenzen über 20.000 Hz
  - Fledermäuse: Echoortung zur Jagd
  - Hunde: Können Hundepfeife hören
  - Delfine: Kommunikation und Ortung
- **UV-Licht:** Licht jenseits von Violett
  - Bienen sehen UV-Muster auf Blüten
  - Vögel sehen mehr Farben als Menschen
- **Infrarot/Wärmebild:**
  - Schlangen (Grubenottern): Wärmebilder von Beute
  - Können Temperaturunterschiede "sehen"

### Interaktive Übungen:
1. **Zuordnungs-Spiel:** Tier ↔ Sinnesleistu ng
2. **Vergleichs-Grafik:** Hörbereich Mensch vs. Tiere
3. **Quiz:** Welches Tier kann was?

---

## Modul 4: 🖐️ Die Haut als Sinnesorgan
**Seiten im Buch:** 28-31

### Kernkonzepte:
- **Größtes Organ:** 1,5-2 m² beim Erwachsenen
- **Aufbau:**
  - **Oberhaut (Epidermis):** Schutzschicht, Hornzellen
  - **Lederhaut (Dermis):** Blutgefäße, Nerven, Haarwurzeln
  - **Unterhaut (Subcutis):** Fettzellen, Wärmeisolierung
- **Funktionen:**
  - **Schutz:** Vor Verletzungen, Krankheitserregern
  - **Temperaturregulierung:** Schwitzen, Gänsehaut
  - **Sinnesorgan:** Tasten, Temperatur, Schmerz
  - **Speicher:** Fett, Wasser
- **Sinneszellen in der Haut:**
  - **Tastkörperchen:** Berührung, Druck
  - **Wärmepunkte:** Wärme spüren
  - **Kältepunkte:** Kälte spüren
  - **Schmerzrezeptoren:** Warnen vor Verletzung
- **Verteilung:** Fingerspitzen haben besonders viele Tastkörperchen
- **Hauttypen:** 1-6 (Eigenschutzzeit bei Sonne)

### Interaktive Übungen:
1. **Schichten-Puzzle:** Hautaufbau zusammensetzen
2. **Hotspot-Klick:** Sinneszellen in der Haut finden
3. **Experiment:** Zwei-Punkt-Schwelle testen

---

## Modul 5: ♿ Blinde & Gehörlose Menschen
**Seiten im Buch:** 32-33

### Kernkonzepte:
- **Blindheit:**
  - Ca. 100.000 blinde Menschen in Deutschland
  - Andere Sinne werden verstärkt genutzt
  - **Brailleschrift:** Tastbare Punktschrift (6 Punkte pro Zeichen)
  - **Hilfsmittel:** Blindenstock, Blindenhund, Sprachcomputer
  - **Orientierung:** Blindenleitsystem (Rillen im Boden)
- **Gehörlosigkeit:**
  - Ca. 80.000 gehörlose Menschen in Deutschland
  - **Gebärdensprache:** Kommunikation mit Händen
  - **Lippenlesen:** Ablesen von Mundbewegungen
  - **Hilfsmittel:** Hörgeräte, Cochlea-Implantate
  - Lichtsignale statt Klingel/Alarm

### Interaktive Übungen:
1. **Braille-Übersetzer:** Namen in Blindenschrift schreiben
2. **Gebärden lernen:** Einfache Wörter (interaktive Animation)
3. **Empathie-Quiz:** Situationen verstehen

---

## Modul 6: ⚖️ Masse und Volumen
**Seiten im Buch:** 34-37

### Kernkonzepte:
- **Masse:**
  - Menge an Materie in einem Körper
  - **Einheiten:** Kilogramm (kg), Gramm (g), Milligramm (mg)
  - **Umrechnung:** 1 kg = 1000 g
  - **Messgerät:** Waage (Balkenwaage, digitale Waage)
- **Volumen:**
  - Raum den ein Körper einnimmt
  - **Einheiten:** Liter (l), Milliliter (ml), Kubikzentimeter (cm³)
  - **Umrechnung:** 1 l = 1000 ml = 1000 cm³
  - **Messgerät:** Messzylinder
- **Volumen fester Körper messen:**
  - Wasserverdrängung
  - Volumen = Wasserstand nachher - Wasserstand vorher
- **Physikalische Größen:** Haben Zahl + Einheit
- **Ablesen:**
  - Auf Augenhöhe ablesen
  - An der tiefsten Stelle des Meniskus

### Interaktive Übungen:
1. **Umrechnungs-Trainer:** kg ↔ g, l ↔ ml
2. **Simulation:** Volumen durch Wasserverdrängung messen
3. **Messzylinder ablesen:** Interaktive Übung
4. **Balkenwaage:** Gleichgewicht herstellen

---

## Modul 7: 🌡️ Temperatur & Thermometer
**Seiten im Buch:** 38-43

### Kernkonzepte:
- **Temperatur:**
  - Maß für Wärme/Kälte
  - **Einheit:** Grad Celsius (°C)
  - **Fixpunkte:** 0°C (Eis schmilzt), 100°C (Wasser kocht)
- **Thermometer-Arten:**
  - **Flüssigkeitsthermometer:** Flüssigkeit dehnt sich bei Wärme aus
  - **Elektronisches Thermometer:** Digitale Anzeige
  - **Ohrthermometer:** Misst Infrarotstrahlung
  - **Fieberthermometer:** Für Körpertemperatur
- **Temperatur messen:**
  - Thermometer ins Medium halten
  - Warten bis Anzeige still steht
  - Auf Augenhöhe ablesen
- **Körpertemperatur:** ca. 37°C
- **Temperaturen unter 0°C:** Minusgrade (z.B. -10°C)

### Interaktive Übungen:
1. **Thermometer ablesen:** Verschiedene Temperaturen
2. **Zuordnung:** Thermometer-Typ ↔ Verwendung
3. **Schätzspiel:** Temperaturen im Alltag

---

## Modul 8: 📊 Diagramme erstellen & lesen
**Seiten im Buch:** 42-43

### Kernkonzepte:
- **Tabellen:**
  - Ordnen Daten übersichtlich
  - Spalten und Zeilen
- **Diagramm-Arten:**
  - **Säulendiagramm:** Vergleich von Mengen
  - **Balkendiagramm:** Horizontale Säulen
  - **Kreisdiagramm:** Anteile am Ganzen (100%)
  - **Liniendiagramm:** Veränderungen über Zeit
  - **Punktdiagramm:** Einzelne Messpunkte
- **Diagramm erstellen:**
  1. Achsen beschriften (x-Achse, y-Achse)
  2. Skalierung festlegen
  3. Werte eintragen
  4. Titel hinzufügen
- **Diagramm lesen:**
  - Achsenbeschriftung beachten
  - Einheiten beachten
  - Werte ablesen

### Interaktive Übungen:
1. **Diagramm-Typ erkennen:** Bilder zuordnen
2. **Werte ablesen:** Aus verschiedenen Diagrammen
3. **Diagramm erstellen:** Aus Tabelle ein Diagramm bauen (Drag & Drop)

---

# 🚀 CLINE PROMPTS (Mehrstufig)

---

## PHASE 1: Projekt-Setup

### Prompt 1.1 - Initialisierung

```
Erstelle ein Next.js 14 Projekt mit App Router für "Capitano's Lernwelt" - eine interaktive Lernplattform für einen 5. Klässler.

PROJEKT-SETUP:
1. Next.js 14 mit App Router, TypeScript, Tailwind CSS
2. Installiere: framer-motion, zustand, lucide-react
3. Konfiguriere Tailwind mit custom colors und fonts

DESIGN-SYSTEM (Apple HIG inspiriert):
- Font: Inter (Google Fonts)
- Farben als CSS Variables:
  --color-primary: #007AFF (Apple Blue)
  --color-success: #34C759 (Apple Green)  
  --color-hulk: #4CAF50 (Hulk Green - Accent)
  --color-warning: #FF9500
  --color-danger: #FF3B30
  --color-background: #FFFFFF
  --color-secondary-bg: #F2F2F7
  --color-label: rgba(0,0,0,0.85)
  --color-secondary-label: rgba(0,0,0,0.55)

- Spacing: 8px Grid (8, 12, 16, 24, 32, 48)
- Border Radius: 8px (sm), 12px (md), 16px (lg)
- Shadows: Subtle Apple-style shadows

PROJEKT-STRUKTUR:
/app
  layout.tsx (Root Layout mit Navigation)
  page.tsx (Dashboard)
  globals.css (Design System)
  /themen
    /[thema]/page.tsx (Dynamische Themen-Seiten)
  /test
    /[thema]/page.tsx (5-Minuten Tests)
  /klassenarbeit/page.tsx (Gesamt-Übung)
/components
  /ui (Button, Card, Progress, Badge)
  /learning (Quiz, DragDrop, Memory)
  /layout (Header, Navigation, Footer)
  /mascot (HulkMascot)
/lib
  /data (Alle Lerninhalte als TypeScript)
  /store (Zustand stores)
  /utils (Hilfsfunktionen)
/public
  /images

Erstelle zuerst nur die Grundstruktur mit Platzhaltern.
```

### Prompt 1.2 - Design System Components

```
Erstelle die UI-Komponenten nach Apple HIG Prinzipien:

1. BUTTON COMPONENT (/components/ui/Button.tsx):
- Variants: primary (filled), secondary (gray), plain (text only), success (green)
- Sizes: sm (32px), md (44px), lg (50px)
- States: default, hover (opacity 0.8), active (scale 0.96), disabled
- Min tap target: 44x44px
- Subtle scale animation on press

2. CARD COMPONENT (/components/ui/Card.tsx):
- Clean white background
- Subtle shadow (0 2px 8px rgba(0,0,0,0.08))
- Border radius 16px
- Optional: hover lift effect
- Slots: header, content, footer

3. PROGRESS COMPONENT (/components/ui/Progress.tsx):
- Thin bar style (height: 4px für subtle, 8px für prominent)
- Animated fill
- Color variants: default (blue), success (green), hulk (hulk-green)
- Optional: percentage label

4. BADGE COMPONENT (/components/ui/Badge.tsx):
- For XP, levels, achievements
- Variants: default, success, warning, hulk
- Sizes: sm, md

5. INPUT COMPONENT (/components/ui/Input.tsx):
- Height: 44px
- Clean border style
- Focus ring (blue)
- Error state support

Alle Komponenten sollen:
- TypeScript mit proper Props typing
- Tailwind für Styling
- Framer Motion für Animationen
- Accessible (ARIA labels)
```

---

## PHASE 2: Layout & Navigation

### Prompt 2.1 - App Layout

```
Erstelle das Haupt-Layout für Capitano's Lernwelt:

HEADER (/components/layout/Header.tsx):
- Fixed top, 64px height
- Backdrop blur (glassmorphism)
- Logo/Title links: "🎮 Capitano's Lernwelt"
- Rechts: XP-Anzeige mit Badge, Hulk-Mini-Icon
- Progress zur Klassenarbeit (optional)

NAVIGATION:
Desktop (>1024px): Sidebar links, 220px breit
- 8 Themen als Nav-Items mit Icons
- Active state: highlighted background
- Collapsible

Mobile/Tablet: Bottom Tab Bar
- 4-5 Haupt-Tabs: Home, Lernen, Tests, Fortschritt
- iOS-style mit Icons + Labels

MAIN CONTENT AREA:
- Max-width: 1200px, centered
- Padding: 24px (desktop), 16px (mobile)
- Smooth page transitions mit Framer Motion

FOOTER (optional):
- Minimal, nur Copyright/Motivationsspruch
- "Übermorgen rockt Capitano die Klassenarbeit! 💪"

HULK MASCOT (/components/mascot/HulkMascot.tsx):
- Floating character (unten rechts)
- Verschiedene Zustände: idle, celebrating, encouraging
- Erscheint bei: richtige Antwort, Level-up, Streak
- Sprechblase mit Paluten-style Kommentaren:
  - "HULK SMASH diese Aufgabe! 💚"
  - "Yo Capitano, das war EPISCH!"
  - "Minecraft-Legende in Biologie incoming!"
```

### Prompt 2.2 - Dashboard/Home

```
Erstelle die Dashboard-Seite (/app/page.tsx):

HERO SECTION:
- Begrüßung: "Hey Capitano! 👋"
- Countdown: "Noch X Tage bis zur Klassenarbeit"
- Motivationstext (wechselnd):
  - "Ronaldo trainiert jeden Tag - du auch?"
  - "Selbst Hulk muss lernen, HULK SMASH zu rufen!"

FORTSCHRITTS-ÜBERSICHT:
- Gesamt-Progress Ring (Apple Fitness style)
- XP-Stand: "450 / 1000 XP bis Level 5"
- Themen-Completion: "5/8 Themen begonnen"

THEMEN-GRID (8 Cards):
Jede Card zeigt:
- Thema-Icon (Emoji oder Lucide)
- Titel
- Progress-Bar
- "X/Y Übungen geschafft"
- Status-Badge: "Neu", "In Progress", "Gemeistert ✓"

Layout: 
- Desktop: 4 Spalten
- Tablet: 2 Spalten  
- Mobile: 1 Spalte

QUICK ACTIONS:
- "🎯 Schnell-Test starten" (zufälliges Thema)
- "📝 Klassenarbeit üben" (alle Themen)

GAMIFICATION SIDEBAR/SECTION:
- Streak-Anzeige: "🔥 3 Tage in Folge"
- Nächstes Achievement
- Leaderboard-Teaser (Ronaldo vs Messi Metapher):
  "Dein Wissens-Score: 78% - Messi-Level! Noch 12% bis Ronaldo!"
```

---

## PHASE 3: Lern-Module

### Prompt 3.1 - Themen-Seite Template

```
Erstelle das Template für Themen-Seiten (/app/themen/[thema]/page.tsx):

STRUKTUR (Apple "Defer to Content" Prinzip):

1. HEADER-BEREICH:
- Zurück-Button (< Alle Themen)
- Thema-Titel (Large Title: 34px)
- Progress: "3/5 Abschnitte"

2. CONTENT-TABS (Segmented Control):
- "📖 Lernen" | "🎮 Üben" | "📝 Test"

3. LERNEN-TAB:
Scrollbare Sections mit:
- Überschrift (Title 2)
- Erklärungstext (Body)
- Illustrationen/Diagramme (wenn verfügbar)
- "Das Wichtigste" Box (highlighted)
- Merksätze mit Icon

Interaktive Elemente eingestreut:
- Aufklapp-Boxen für Details
- Mini-Quizze inline ("Schnell-Check")

4. ÜBEN-TAB:
Liste von Übungen:
- Drag & Drop Beschriftung
- Multiple Choice Quiz
- Memory-Spiel
- Sortier-Aufgaben

Jede Übung zeigt:
- Typ-Icon
- Name
- Geschätzte Zeit
- Completion-Status

5. TEST-TAB:
- "5-Minuten-Test starten" Button
- Letzte Ergebnisse
- Highscore

DATEN-STRUKTUR für Themen:
```typescript
interface Thema {
  id: string;
  title: string;
  icon: string;
  color: string;
  sections: Section[];
  exercises: Exercise[];
  testQuestions: Question[];
}
```
```

### Prompt 3.2 - Interaktive Lern-Komponenten

```
Erstelle die interaktiven Lernkomponenten:

1. QUIZ COMPONENT (/components/learning/Quiz.tsx):
- Single Choice & Multiple Choice
- Frage mit optionalem Bild
- 4 Antwort-Optionen als Buttons
- Sofortiges Feedback:
  - Richtig: Grün + Hulk erscheint + Sound-Option
  - Falsch: Rot + Erklärung warum
- Progress-Anzeige oben
- Timer optional
- XP-Belohnung: +10 XP pro richtige Antwort

2. DRAG & DROP BESCHRIFTUNG (/components/learning/DragDropLabel.tsx):
- Bild (z.B. Auge, Ohr) in der Mitte
- Labels zum Ziehen am Rand
- Drop-Zones auf dem Bild markiert
- Snap-to-position Animation
- Erfolgs-Feedback wenn alle richtig

3. MEMORY GAME (/components/learning/MemoryGame.tsx):
- Karten-Grid (4x4 oder 3x4)
- Begriff ↔ Definition paaren
- Flip-Animation
- Moves-Counter
- Timer
- Minecraft-style Karten-Design (subtle)

4. SORTIER-SPIEL (/components/learning/SortGame.tsx):
- Items in richtige Reihenfolge bringen
- Drag & Drop oder Buttons (hoch/runter)
- Für: Weg des Lichts, Weg des Schalls, etc.

5. LÜCKENTEXT (/components/learning/FillBlanks.tsx):
- Text mit Lücken
- Wortbank zum Auswählen
- Drag & Drop oder Click-to-fill

GAMIFICATION für alle:
- XP bei Completion
- Sterne-Bewertung (1-3 Sterne basierend auf Versuchen/Zeit)
- Hulk-Kommentar bei Erfolg
- Streak-Bonus bei mehreren richtigen
```

---

## PHASE 4: Test-System

### Prompt 4.1 - 5-Minuten-Tests

```
Erstelle das Test-System (/app/test/[thema]/page.tsx):

TEST-KONFIGURATION:
- Dauer: 5 Minuten (300 Sekunden)
- Fragen: 10 pro Test (zufällig aus Pool)
- Fragetypen gemischt: MC, Drag&Drop, Sortieren

TEST-ABLAUF:

1. START-SCREEN:
- Thema-Titel
- "10 Fragen in 5 Minuten"
- Regeln kurz erklärt
- "Test starten" Button (prominent)
- Hulk: "Du schaffst das, Capitano! 💪"

2. TEST-SCREEN:
- Timer oben (Countdown, wird rot unter 60s)
- Progress: "Frage 3/10"
- Frage-Bereich (groß, zentral)
- Navigation: Zurück/Weiter (optional)
- "Abgeben" Button

3. FRAGEN VARIIEREN:
- Jeder Test-Start = neue Zufallsauswahl
- Antwort-Reihenfolge wird gemischt
- Aus Pool von 20-30 Fragen pro Thema

4. ERGEBNIS-SCREEN:
- Punktzahl: "8/10 richtig!"
- Prozent: "80%"
- Zeit gebraucht
- Sterne-Bewertung:
  - ⭐⭐⭐ = 90%+
  - ⭐⭐ = 70-89%
  - ⭐ = 50-69%
- XP verdient
- Hulk-Reaktion:
  - 90%+: "HULK SMASH! Das war LEGENDÄR!"
  - 70%+: "Stark, Capitano! Fast wie Ronaldo!"
  - <70%: "Kopf hoch! Selbst Messi hatte schlechte Spiele!"
- "Fehler ansehen" Button
- "Nochmal versuchen" Button

5. FEHLER-REVIEW:
- Liste aller Fragen
- Grün/Rot markiert
- Bei Fehlern: richtige Antwort + Erklärung
```

### Prompt 4.2 - Klassenarbeit-Simulation

```
Erstelle die Klassenarbeit-Seite (/app/klassenarbeit/page.tsx):

KLASSENARBEIT-MODUS:
- Alle 8 Themen kombiniert
- 20 Fragen (je 2-3 pro Thema, gewichtet nach Schwäche)
- 15 Minuten Zeit
- Realistisches Prüfungsgefühl

FEATURES:
- Themen-Übersicht vor Start
- Adaptive Schwierigkeit: Mehr Fragen aus schwachen Bereichen
- Zwischenspeichern möglich
- Detaillierte Auswertung nach Themen

AUSWERTUNG:
- Gesamtnote (simuliert): 1-6
- Aufschlüsselung nach Thema
- Stärken & Schwächen visualisiert
- Empfehlungen: "Wiederhole nochmal: Masse & Volumen"

HISTORIE:
- Letzte 5 Versuche gespeichert (localStorage)
- Fortschritt-Trend sichtbar
```

---

## PHASE 5: Daten & State

### Prompt 5.1 - Lerninhalte als Daten

```
Erstelle die Datenstruktur für alle Lerninhalte (/lib/data/):

THEMEN-DATEN (themen.ts):
```typescript
export const themen: Thema[] = [
  {
    id: 'auge',
    title: 'Das Auge & Sehen',
    icon: '👁️',
    color: '#007AFF',
    shortDescription: 'Wie funktioniert das Sehen?',
    sections: [
      {
        id: 'aufbau',
        title: 'Aufbau des Auges',
        content: `
          Das Auge ist unser wichtigstes Sinnesorgan. Es funktioniert ähnlich wie eine Kamera:
          
          **Der Weg des Lichts:**
          1. Licht tritt durch die **Hornhaut** ein (durchsichtige Schutzschicht)
          2. Die **Pupille** reguliert die Lichtmenge (wie eine Blende)
          3. Die **Linse** bündelt das Licht (stellt scharf)
          4. Das Licht durchquert den **Glaskörper**
          5. Auf der **Netzhaut** entsteht ein Bild
          6. Der **Sehnerv** leitet Signale zum Gehirn
        `,
        keyPoints: [
          'Die Iris ist der farbige Teil und steuert die Pupillengröße',
          'Stäbchen sehen Hell-Dunkel, Zapfen sehen Farben',
          'Am blinden Fleck gibt es keine Sinneszellen'
        ],
        image: '/images/auge-aufbau.svg'
      },
      // ... weitere Sections
    ],
    exercises: [...],
    testPool: [...]
  },
  // ... 7 weitere Themen
];
```

Erstelle vollständige Daten für alle 8 Themen basierend auf den Lerninhalten aus der Projektbeschreibung.
Jedes Thema braucht:
- 3-5 Sections mit Content
- 5-8 Übungen verschiedener Typen
- 20-30 Test-Fragen (für Variation)
```

### Prompt 5.2 - State Management

```
Erstelle Zustand Store für User-Progress (/lib/store/):

USER-STORE (userStore.ts):
```typescript
interface UserState {
  // Profil
  name: string; // "Capitano"
  
  // Gamification
  xp: number;
  level: number;
  streak: number;
  lastActive: Date;
  
  // Progress pro Thema
  themenProgress: {
    [themaId: string]: {
      sectionsRead: string[];
      exercisesCompleted: string[];
      bestTestScore: number;
      testAttempts: number;
    }
  };
  
  // Achievements
  achievements: string[];
  
  // Actions
  addXP: (amount: number) => void;
  markSectionRead: (themaId: string, sectionId: string) => void;
  completeExercise: (themaId: string, exerciseId: string, score: number) => void;
  recordTestResult: (themaId: string, score: number) => void;
}
```

Persistiere in localStorage.
Berechne Level aus XP (z.B. Level = Math.floor(XP / 200) + 1)

XP-SYSTEM:
- Section lesen: +5 XP
- Übung abschließen: +10-20 XP (je nach Typ)
- Test bestehen (>70%): +50 XP
- Perfekter Test (100%): +100 XP
- Tages-Streak: +25 XP Bonus
```

---

## PHASE 6: Feinschliff & Gamification

### Prompt 6.1 - Animationen & Feedback

```
Füge Animationen und Feedback-Elemente hinzu:

FRAMER MOTION ANIMATIONEN:

1. Page Transitions:
- Slide + Fade zwischen Seiten
- Stagger für Listen (Cards erscheinen nacheinander)

2. Erfolgs-Animationen:
- Confetti bei Test bestanden
- XP-Counter animiert hochzählen
- Sterne "poppen" rein
- Hulk springt ins Bild

3. Micro-Interactions:
- Button press: scale(0.96)
- Card hover: lift + shadow
- Progress bar: smooth fill
- Badge erscheint: bounce

SOUND-EFFEKTE (optional, togglebar):
- Richtige Antwort: kurzer "Ding"
- Falsche Antwort: sanfter "Bonk"
- Level up: Fanfare
- Achievement: Triumph-Sound

HULK KOMMENTARE (zufällig aus Pool):
Erfolg:
- "HULK SMASH das Wissen in dein Gehirn! 💚"
- "Capitano ist on FIRE! 🔥"
- "Das war Ronaldo-Level, Bruder!"
- "Paluten wäre stolz auf dich!"

Motivation bei Fehlern:
- "Selbst Hulk musste üben, grün zu werden!"
- "Retry? Minecraft-Spieler geben nie auf!"
- "Messi hat auch mal einen Elfer verschossen!"
```

### Prompt 6.2 - PWA & Offline

```
Mache die App PWA-fähig für Offline-Lernen:

1. next.config.js: PWA Plugin konfigurieren
2. manifest.json erstellen
3. Service Worker für Caching
4. Offline-Fallback Seite

OFFLINE-FÄHIGKEIT:
- Alle Lerninhalte gecached
- Tests funktionieren offline
- Progress wird gesynced wenn wieder online

MOBILE OPTIMIERUNG:
- Touch-freundliche Targets (min 44x44px)
- Swipe-Gesten für Navigation
- Pull-to-refresh
- Safe Area Padding für notch/home indicator
```

---

# 📝 FRAGEN-POOLS (Beispiele)

## Modul 1: Auge - Beispielfragen

```typescript
export const augeTestPool: Question[] = [
  {
    id: 'auge-1',
    type: 'single-choice',
    question: 'Welcher Teil des Auges ist für das Farbensehen verantwortlich?',
    options: ['Stäbchen', 'Zapfen', 'Linse', 'Hornhaut'],
    correct: 1,
    explanation: 'Die Zapfen auf der Netzhaut ermöglichen das Farbensehen. Es gibt drei Arten für Rot, Grün und Blau.',
    xp: 10
  },
  {
    id: 'auge-2',
    type: 'single-choice',
    question: 'Was passiert mit der Pupille bei hellem Licht?',
    options: [
      'Sie wird größer',
      'Sie wird kleiner',
      'Sie bleibt gleich',
      'Sie wird oval'
    ],
    correct: 1,
    explanation: 'Bei hellem Licht verkleinert sich die Pupille, um weniger Licht ins Auge zu lassen und die Netzhaut zu schützen.',
    xp: 10
  },
  {
    id: 'auge-3',
    type: 'single-choice',
    question: 'Warum gibt es einen "blinden Fleck" im Auge?',
    options: [
      'Dort ist die Linse',
      'Dort tritt der Sehnerv aus - keine Sinneszellen',
      'Dort ist die Pupille',
      'Das Auge ist dort beschädigt'
    ],
    correct: 1,
    explanation: 'Am blinden Fleck verlässt der Sehnerv das Auge. Dort gibt es keine Sinneszellen, weshalb wir dort nichts sehen können.',
    xp: 10
  },
  {
    id: 'auge-4',
    type: 'drag-drop',
    question: 'Ordne die Augenteile dem Weg des Lichts zu (von außen nach innen):',
    items: ['Netzhaut', 'Hornhaut', 'Linse', 'Pupille', 'Glaskörper'],
    correctOrder: ['Hornhaut', 'Pupille', 'Linse', 'Glaskörper', 'Netzhaut'],
    explanation: 'Das Licht durchquert: Hornhaut → Pupille → Linse → Glaskörper → Netzhaut',
    xp: 20
  },
  {
    id: 'auge-5',
    type: 'single-choice', 
    question: 'Was ist die Iris?',
    options: [
      'Der durchsichtige Teil vorne am Auge',
      'Der farbige Muskelring um die Pupille',
      'Die lichtempfindliche Schicht hinten im Auge',
      'Die gallertartige Füllung des Auges'
    ],
    correct: 1,
    explanation: 'Die Iris ist der farbige Teil des Auges. Sie ist ein Muskelring, der die Größe der Pupille reguliert.',
    xp: 10
  },
  // ... 15-25 weitere Fragen
];
```

## Template für andere Module

Erstelle ähnliche Fragen-Pools für alle 8 Module mit je 20-30 Fragen verschiedener Typen.

---

# 🎯 DEPLOYMENT

```
Deployment auf Vercel:

1. GitHub Repository verbinden
2. Environment Variables setzen (falls nötig)
3. Build Command: `npm run build`
4. Deploy

PERFORMANCE CHECKLIST:
- [ ] Images optimiert (next/image)
- [ ] Fonts preloaded
- [ ] Code splitting aktiv
- [ ] Lighthouse Score > 90
```

---

# ✅ FINALE CHECKLISTE

## Must-Have für Klassenarbeit
- [ ] Alle 8 Themen mit Lerninhalten
- [ ] Interaktive Übungen pro Thema
- [ ] 5-Minuten-Tests pro Thema (variierend!)
- [ ] Klassenarbeit-Simulation
- [ ] Mobile-optimiert
- [ ] Fortschritts-Tracking

## Nice-to-Have
- [ ] Hulk-Animationen
- [ ] Sound-Effekte
- [ ] PWA/Offline
- [ ] Achievements-System
- [ ] Dark Mode

---

**READY TO BUILD! 🚀**

Starte Cline mit Prompt 1.1 und arbeite dich durch die Phasen.
Bei Fragen: Immer auf Apple HIG Prinzipien und die Lerninhalte oben referenzieren.
