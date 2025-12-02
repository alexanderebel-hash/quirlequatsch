# 🦋 LENI's Sozialkunde-Trainer

## 📋 PROJEKT-BRIEFING

**Schülerin:** Leni, 7. Klasse, Brandenburg  
**Fach:** Sozialkunde / Politische Bildung  
**Themen:** 
1. Die fünf Säulen der Sozialversicherung
2. Dimensionen der Gerechtigkeit & Karikatur-Analyse
3. Armut und Reichtum (absolute vs. relative Armut)

**Ziel:** Interaktive Lernplattform mit Apple-Design-Qualität und Gamification  
**Mascot:** Lillebi 🦋 (Schmetterling, magisch, mutig, Farbwechsel)  
**Route:** `/app/leni/sozialkunde/`

---

## 🎨 DESIGN-PRINZIPIEN

### Apple HIG Grundsätze
1. **ONE THING AT A TIME** - Eine Hauptaufgabe pro View
2. **DEFER TO CONTENT** - Minimale UI, Content maximieren
3. **CLARITY OVER DENSITY** - Whitespace ist Design
4. **DEPTH THROUGH LAYERS** - Master → Detail → Sheet Hierarchie
5. **FAMILIAR PATTERNS** - Standard Navigation Patterns

### Farbschema (Sozialkunde)
```css
:root {
  /* Sozialkunde Colors */
  --color-primary: #FF6B35;      /* Orange - Gesellschaft */
  --color-secondary: #4ECDC4;    /* Türkis - Soziales */
  --color-accent: #FFE66D;       /* Gelb - Highlights */
  
  /* Themen-Farben */
  --color-sozialversicherung: #3498db;  /* Blau */
  --color-gerechtigkeit: #9b59b6;       /* Lila */
  --color-armut: #e74c3c;               /* Rot */
  
  /* Lillebi Colors */
  --color-lillebi-primary: #E91E63;
  --color-lillebi-magic: #9C27B0;
}
```

### Sprach-Style für Leni (7. Klasse)
```
NICHT: "Super gemacht! Du bist toll! 🌟✨🎉"
SONDERN: "Richtig! Weiter so."

NICHT: Zu kindisch oder zu erwachsen
SONDERN: Freundlich, ermutigend, altersgerecht

Lillebi-Kommentare:
- Bei Erfolg: "Genau richtig! 🦋", "Das sitzt!", "Weiter so!"
- Bei Fehlern: "Hmm, nicht ganz. Schau nochmal.", "Versuch's nochmal!"
- Tipps: "Denk dran: ...", "Kleiner Hinweis: ..."
```

---

# 📚 LERNINHALTE

## MODUL 1: Die fünf Säulen der Sozialversicherung

### Kernkonzept
Die Sozialversicherung in Deutschland besteht aus fünf Säulen, die verschiedene Lebensrisiken absichern. Sie ist eine Pflichtversicherung für alle Arbeitnehmer.

### Die fünf Säulen im Detail

#### 1. Pflegeversicherung 🏥
| Aspekt | Information |
|--------|-------------|
| **Versicherte** | Wer eine Krankenversicherung hat, hat automatisch auch eine Pflegeversicherung. Gilt auch für mitversicherte Familienangehörige. Wer privat krankenversichert ist, muss auch eine private Pflegeversicherung abschließen. |
| **Leistungen** | Hilfe bei den Verrichtungen des täglichen Lebens (Waschen, Anziehen, Essen) |
| **Finanzierung** | Wie bei der Krankenversicherung: Die Hälfte zahlt der Arbeitnehmer, die Hälfte der Arbeitgeber. Wird automatisch vom Lohn abgezogen. |
| **Risiko** | Pflegebedürftigkeit |

#### 2. Rentenversicherung 👴
| Aspekt | Information |
|--------|-------------|
| **Versicherte** | Alle Personen, die in einem sozialversicherungspflichtigen Beschäftigungsverhältnis stehen |
| **Leistungen** | Ersetzt das Einkommen aus der früheren Arbeit im Alter |
| **Finanzierung** | Beiträge während des Arbeitslebens - je länger und mehr man gearbeitet hat, desto höher die Rente |
| **Risiko** | Alter / Ruhestand |

#### 3. Krankenversicherung 🩺
| Aspekt | Information |
|--------|-------------|
| **Versicherte** | Ca. 90% der Menschen in Deutschland. Ab Geburt automatisch über die Eltern versichert. |
| **Leistungen** | Arztbesuche, Krankenhausaufenthalte, Medikamente - die Krankenkasse zahlt |
| **Finanzierung** | Arbeitgeber und Arbeitnehmer zahlen jeweils den gleichen Anteil. Kinderlose zahlen einen Beitragszuschlag. Für mitversicherte Familienangehörige werden keine extra Beiträge erhoben. |
| **Risiko** | Krankheit |

#### 4. Arbeitslosenversicherung 💼
| Aspekt | Information |
|--------|-------------|
| **Versicherte** | Alle Arbeitnehmer, die eine Arbeitslosenversicherung haben |
| **Leistungen** | Ca. 60% des letzten Nettolohns pro Monat (Arbeitslosengeld I) |
| **Finanzierung** | Arbeitgeber zahlt Beiträge (über Steuern) |
| **Risiko** | Arbeitslosigkeit |

#### 5. Unfallversicherung ⚠️
| Aspekt | Information |
|--------|-------------|
| **Versicherte** | Arbeitnehmer, Auszubildende, Unternehmer, Kinder, Schüler und Studenten |
| **Leistungen** | Rente bei dauerhafter Arbeitsunfähigkeit durch Unfall, Behandlungskosten |
| **Finanzierung** | Arbeitgeber/Unternehmen tragen die Kosten allein |
| **Risiko** | Arbeitsunfall, Wegeunfall, Berufskrankheit |

### Merksatz
> "Wenn ich Partner, Eltern oder Kinder kriege, ich auch das" - Die Sozialversicherung schützt nicht nur dich, sondern auch deine Familie!

### Quiz-Fragen Modul 1

```javascript
const sozialversicherungQuiz = [
  {
    question: "Welche Versicherung zahlt, wenn du zum Arzt gehst?",
    options: ["Rentenversicherung", "Krankenversicherung", "Unfallversicherung", "Pflegeversicherung"],
    correct: 1,
    explanation: "Die Krankenversicherung übernimmt die Kosten für Arztbesuche und Behandlungen."
  },
  {
    question: "Wer zahlt die Beiträge zur Unfallversicherung?",
    options: ["Nur der Arbeitnehmer", "Nur der Arbeitgeber", "Beide zu gleichen Teilen", "Der Staat"],
    correct: 1,
    explanation: "Die Unfallversicherung wird allein vom Arbeitgeber bezahlt."
  },
  {
    question: "Was ist das Risiko, gegen das die Rentenversicherung schützt?",
    options: ["Krankheit", "Arbeitslosigkeit", "Alter/Ruhestand", "Unfall"],
    correct: 2,
    explanation: "Die Rentenversicherung sichert das Einkommen im Alter."
  },
  {
    question: "Wie viel Prozent des letzten Lohns bekommt man ungefähr als Arbeitslosengeld?",
    options: ["30%", "60%", "90%", "100%"],
    correct: 1,
    explanation: "Das Arbeitslosengeld I beträgt etwa 60% des letzten Nettolohns."
  },
  {
    question: "Wer ist in der Pflegeversicherung automatisch mitversichert?",
    options: ["Niemand", "Nur Kinder", "Familienangehörige", "Nur der Partner"],
    correct: 2,
    explanation: "Familienangehörige sind in der Pflegeversicherung automatisch mitversichert."
  },
  {
    question: "Was bedeutet 'Pflichtversicherung'?",
    options: ["Man kann wählen", "Man muss versichert sein", "Nur für Reiche", "Nur für Arme"],
    correct: 1,
    explanation: "Bei einer Pflichtversicherung muss jeder Arbeitnehmer versichert sein - es ist keine freiwillige Entscheidung."
  },
  {
    question: "Welche Versicherung schützt auch Schüler und Studenten?",
    options: ["Rentenversicherung", "Arbeitslosenversicherung", "Unfallversicherung", "Pflegeversicherung"],
    correct: 2,
    explanation: "Die Unfallversicherung schützt auch Schüler, Studenten und Kinder."
  },
  {
    question: "Wie werden die meisten Sozialversicherungen finanziert?",
    options: ["Nur vom Staat", "Nur vom Arbeitnehmer", "Je zur Hälfte von Arbeitgeber und Arbeitnehmer", "Nur vom Arbeitgeber"],
    correct: 2,
    explanation: "Die meisten Sozialversicherungen werden paritätisch finanziert - also je zur Hälfte."
  }
];
```

---

## MODUL 2: Dimensionen der Gerechtigkeit

### Kernkonzept
Gerechtigkeit ist ein Begriff, der von allen Menschen unterschiedlich interpretiert wird. Es gibt verschiedene Dimensionen, wie Gerechtigkeit verstanden werden kann.

### Die vier Dimensionen

#### 1. Verfahrensgerechtigkeit ⚖️
**Definition:** Alle können sich mit gleichen Rechten einbringen.
- Das Verfahren (z.B. vor Gericht, bei Wahlen) ist für alle gleich
- Unabhängig von unterschiedlichen Voraussetzungen (Herkunft, Geld, Bildung)
- Beispiel: Jeder hat das Recht auf einen Anwalt

#### 2. Leistungsgerechtigkeit 💪
**Definition:** Wer mehr leistet, soll mehr bekommen.
- Höhere Leistung = höheres Einkommen
- Anreiz für Anstrengung und Arbeit
- Beispiel: Ein Chefarzt verdient mehr als ein Assistenzarzt

#### 3. Bedarfsgerechtigkeit 🤲
**Definition:** Jeder soll nach seinen Bedürfnissen versorgt werden.
- Alle Menschen sollen entsprechend ihrer Bedürfnisse versorgt werden
- Der Staat soll darauf hinarbeiten
- Beispiel: Sozialwohnungen für Menschen mit wenig Geld

#### 4. Teilhabegerechtigkeit 🤝
**Definition:** Niemand darf ausgeschlossen werden.
- Alle dürfen die Einrichtungen der Gesellschaft nutzen (Theater, Bildung, öffentliche Räume)
- Teilhaben am gesellschaftlichen Leben
- Beispiel: Barrierefreie Zugänge für Rollstuhlfahrer

### Karikatur-Analyse: "Ist das Gerechtigkeit?"

**Aufbau der Karikatur (Karl-Heinz Schoenfeld):**
- Eine tiefe Schlucht trennt zwei Seiten
- **Linke Seite (arm):** Kahl, Holzhütte, toter Baum, welke Pflanzen
- **Rechte Seite (reich):** Grün, gepflegter Garten, Schloss, Kirche

**Dialog:**
- Person links fragt: "Wie bist du da rübergekommen?"
- Person rechts antwortet: "Ich bin hier geboren!"

**Deutung:**
- Die Karikatur kritisiert, dass Wohlstand oft nicht durch eigene Leistung, sondern durch Geburt/Herkunft bestimmt wird
- Die Schlucht symbolisiert die schwer überwindbare Kluft zwischen Arm und Reich
- Kritik an mangelnder sozialer Mobilität

**Fragen zur Karikatur:**
1. Was wird kritisiert? → Soziale Ungleichheit durch Herkunft
2. Welche Position nimmt der Karikaturist ein? → Kritisch gegenüber ungerechter Verteilung
3. Wer ist der Adressat? → Die Gesellschaft, Politiker

### Quiz-Fragen Modul 2

```javascript
const gerechtigkeitQuiz = [
  {
    question: "Was bedeutet Verfahrensgerechtigkeit?",
    options: ["Reiche bekommen mehr", "Alle haben die gleichen Rechte im Verfahren", "Jeder bekommt was er braucht", "Niemand wird ausgeschlossen"],
    correct: 1,
    explanation: "Verfahrensgerechtigkeit bedeutet, dass alle die gleichen Rechte haben - z.B. vor Gericht."
  },
  {
    question: "Leistungsgerechtigkeit bedeutet...",
    options: ["Alle bekommen gleich viel", "Wer mehr leistet, bekommt mehr", "Der Staat verteilt alles", "Jeder bekommt was er braucht"],
    correct: 1,
    explanation: "Bei der Leistungsgerechtigkeit gilt: Mehr Leistung = mehr Belohnung."
  },
  {
    question: "Was kritisiert die Karikatur mit der Schlucht?",
    options: ["Umweltverschmutzung", "Dass Wohlstand oft von der Geburt abhängt", "Schlechte Architektur", "Zu viele Schlösser"],
    correct: 1,
    explanation: "Die Karikatur kritisiert, dass man oft reich oder arm geboren wird - nicht durch eigene Leistung."
  },
  {
    question: "Teilhabegerechtigkeit bedeutet...",
    options: ["Alle teilen alles", "Niemand darf von der Gesellschaft ausgeschlossen werden", "Nur Reiche dürfen teilnehmen", "Man muss teilen können"],
    correct: 1,
    explanation: "Bei Teilhabegerechtigkeit geht es darum, dass alle am gesellschaftlichen Leben teilnehmen können."
  },
  {
    question: "Welche Dimension der Gerechtigkeit passt zu Sozialwohnungen?",
    options: ["Leistungsgerechtigkeit", "Verfahrensgerechtigkeit", "Bedarfsgerechtigkeit", "Teilhabegerechtigkeit"],
    correct: 2,
    explanation: "Sozialwohnungen sind ein Beispiel für Bedarfsgerechtigkeit - Menschen bekommen Wohnraum nach ihrem Bedarf."
  },
  {
    question: "Was symbolisiert die Schlucht in der Karikatur?",
    options: ["Einen echten Canyon", "Die Trennung zwischen Arm und Reich", "Eine Brücke", "Ein Tal"],
    correct: 1,
    explanation: "Die Schlucht symbolisiert die tiefe, schwer überwindbare Kluft zwischen Arm und Reich."
  }
];
```

---

## MODUL 3: Armut und Reichtum

### Kernkonzept
Armut ist nicht gleich Armut. Es gibt verschiedene Arten und Definitionen, die wichtig sind zu verstehen.

### Was ist Armut?

**Definition:**
> Verschiedene Arten von Entbehrungen im Zusammenhang mit der Unfähigkeit, menschliche Grundbedürfnisse zu befriedigen.

**Grundbedürfnisse:**
- Nahrung
- Gesundheit
- Bildung
- Mitsprache
- Sicherheit

### Zwei Arten von Armut

#### 1. Absolute Armut 🌍
**Definition:** Weniger als 1,90 $ pro Tag (nach Weltbank)

**Merkmale:**
- Zustand, in dem ein Mensch die Befriedigung seiner Grundbedürfnisse NICHT leisten kann
- Kein sauberes Wasser
- Nicht genug Essen
- Keine medizinische Versorgung
- Kommt vor allem in Entwicklungsländern vor

#### 2. Relative Armut 🇩🇪
**Definition:** Armut im Verhältnis zum jeweiligen Umfeld

**In Deutschland (OECD-Definition):**
> Wer weniger als 50% des durchschnittlichen Netto-Pro-Kopf-Einkommens hat, gilt als arm.

**Beispiel:** 
- Durchschnittliches Einkommen in Deutschland: ca. 2.000€ netto
- Relative Armut: unter 1.000€ netto pro Monat

### Vergleich: Arm vs. Reich (aus Leni's Notizen)

#### Leben in Armut
- Auf der Straße leben
- Oft Suchtprobleme (Alkohol, Drogen)
- Hunger, Kälte
- Weniger Schutz
- Nur alle 2 Wochen zum Supermarkt
- Keine sichere Unterkunft

#### Leben in Reichtum
- Essen, Trinken immer verfügbar
- Haus oder Wohnung
- Bildung
- Freizeitparks besuchen
- Einkaufen gehen können
- 2-3x pro Woche Supermarkt
- Reisen
- **ABER:** "Man kann sich nicht alles kaufen" (Glück, Gesundheit, echte Freundschaft)

### Quiz-Fragen Modul 3

```javascript
const armutQuiz = [
  {
    question: "Was ist absolute Armut?",
    options: ["Weniger Geld als der Nachbar", "Weniger als 1,90$ pro Tag", "Kein Auto haben", "Weniger als 1000€ im Monat"],
    correct: 1,
    explanation: "Absolute Armut bedeutet weniger als 1,90$ pro Tag - man kann seine Grundbedürfnisse nicht erfüllen."
  },
  {
    question: "Wie wird relative Armut in Deutschland definiert?",
    options: ["Weniger als 100€ im Monat", "Weniger als 50% des Durchschnittseinkommens", "Kein Haus besitzen", "Weniger als 1,90$ pro Tag"],
    correct: 1,
    explanation: "Relative Armut bedeutet in Deutschland: weniger als 50% des durchschnittlichen Einkommens."
  },
  {
    question: "Welches ist ein Grundbedürfnis?",
    options: ["Smartphone", "Nahrung", "Auto", "Urlaub"],
    correct: 1,
    explanation: "Nahrung ist ein Grundbedürfnis - ohne Essen kann der Mensch nicht überleben."
  },
  {
    question: "Wo kommt absolute Armut vor allem vor?",
    options: ["In Deutschland", "In Entwicklungsländern", "In der Schweiz", "In allen Ländern gleich"],
    correct: 1,
    explanation: "Absolute Armut gibt es vor allem in Entwicklungsländern, wo Menschen unter 1,90$ pro Tag leben."
  },
  {
    question: "Was kann man sich NICHT kaufen, auch wenn man reich ist?",
    options: ["Ein Haus", "Echte Freundschaft", "Ein Auto", "Essen"],
    correct: 1,
    explanation: "Geld kann vieles kaufen, aber keine echten Gefühle wie Freundschaft oder Glück."
  },
  {
    question: "Was ist der Unterschied zwischen absoluter und relativer Armut?",
    options: ["Kein Unterschied", "Absolute = weltweit gleich, Relative = im Vergleich zum Umfeld", "Absolute ist schlimmer", "Relative ist schlimmer"],
    correct: 1,
    explanation: "Absolute Armut ist weltweit gleich definiert (1,90$/Tag), relative Armut hängt vom Umfeld ab."
  }
];
```

---

# 🎮 INTERAKTIVE ELEMENTE

## Spiel 1: Säulen-Zuordnung (Drag & Drop)
```
Ziehe die Begriffe zur richtigen Säule:

Begriffe: [Arztbesuch] [Rente] [Pflegeheim] [Arbeitslosengeld] [Arbeitsunfall]

Säulen:
├── Krankenversicherung → Arztbesuch
├── Rentenversicherung → Rente
├── Pflegeversicherung → Pflegeheim
├── Arbeitslosenversicherung → Arbeitslosengeld
└── Unfallversicherung → Arbeitsunfall
```

## Spiel 2: Gerechtigkeit-Memory
```
Paare finden:
- "Verfahrensgerechtigkeit" ↔ "Gleiche Rechte für alle"
- "Leistungsgerechtigkeit" ↔ "Wer mehr leistet, bekommt mehr"
- "Bedarfsgerechtigkeit" ↔ "Jeder nach seinen Bedürfnissen"
- "Teilhabegerechtigkeit" ↔ "Niemand wird ausgeschlossen"
```

## Spiel 3: Armut-Sortierung
```
Sortiere die Begriffe:

Absolute Armut:        Relative Armut:
- Unter 1,90$/Tag      - Unter 50% des Durchschnitts
- Entwicklungsländer   - Deutschland
- Grundbedürfnisse     - Im Vergleich zum Umfeld
  nicht erfüllt
```

## Spiel 4: Karikatur-Analyse
```
Interaktive Karikatur:
- Klick auf Elemente → Erklärung erscheint
- Linke Seite anklicken → "Dies symbolisiert Armut"
- Rechte Seite anklicken → "Dies symbolisiert Reichtum"
- Schlucht anklicken → "Die Kluft zwischen Arm und Reich"
- Dialog anklicken → "Kritik: Wohlstand durch Geburt, nicht Leistung"
```

---

# 📁 DATEISTRUKTUR

```
app/leni/sozialkunde/
├── page.tsx                          # Übersicht aller Themen
├── sozialversicherung/
│   ├── page.tsx                      # Modul 1: 5 Säulen
│   └── quiz/page.tsx                 # Quiz Modul 1
├── gerechtigkeit/
│   ├── page.tsx                      # Modul 2: Dimensionen
│   ├── karikatur/page.tsx            # Karikatur-Analyse
│   └── quiz/page.tsx                 # Quiz Modul 2
├── armut/
│   ├── page.tsx                      # Modul 3: Armut/Reichtum
│   └── quiz/page.tsx                 # Quiz Modul 3
├── spiele/
│   └── page.tsx                      # Alle Spiele
└── test/
    └── page.tsx                      # Gesamttest
```

---

# 🦋 LILLEBI KOMMENTARE

### Bei Erfolg
```
"Genau richtig! 🦋"
"Super, das sitzt!"
"Toll gemacht!"
"Weiter so!"
"Du verstehst das Thema!"
```

### Bei Fehlern
```
"Hmm, nicht ganz. Schau nochmal."
"Versuch's nochmal!"
"Fast! Aber nicht ganz."
"Lies die Frage nochmal genau."
```

### Tipps
```
"Denk dran: Die 5 Säulen schützen vor Lebensrisiken."
"Kleiner Hinweis: Relative Armut hängt vom Umfeld ab."
"Merke: Verfahren = gleiche Rechte für alle."
"Tipp: Grundbedürfnisse sind lebensnotwendig!"
```

### Motivational
```
"Du schaffst das!"
"Sozialkunde ist wichtig für dein Leben!"
"Jetzt verstehst du, wie Deutschland funktioniert."
```

---

# 🎯 XP-SYSTEM

```
Modul lesen: +10 XP
Einfache Übung: +15 XP
Mittlere Übung: +25 XP
Quiz bestanden (>70%): +50 XP
Quiz perfekt (100%): +100 XP
Gesamttest bestanden: +200 XP
Spiel gewonnen: +30 XP
```

---

# ✅ DEPLOYMENT CHECKLIST

## Must-Have
- [ ] Alle 3 Module mit Lerninhalten
- [ ] Quiz pro Modul (mind. 6 Fragen)
- [ ] Mindestens 2 Spiele
- [ ] Gesamttest
- [ ] XP-System funktioniert
- [ ] Lillebi-Feedback bei richtig/falsch
- [ ] Mobile-optimiert
- [ ] Karikatur-Analyse interaktiv

## Nice-to-Have
- [ ] Lillebi Animation
- [ ] Sound-Effekte
- [ ] Fortschritts-Speicherung in Supabase
- [ ] Eltern-Dashboard
