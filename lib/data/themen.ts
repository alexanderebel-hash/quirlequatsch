import { Thema } from './types';

export const themen: Thema[] = [
  {
    id: 'auge',
    title: 'Das Auge & Sehen',
    icon: '👁️',
    color: 'blue',
    shortDescription: 'Wie funktioniert das Sehen?',
    bookPages: '18-21',
    sections: [
      {
        id: 'aufbau',
        title: 'Aufbau des Auges',
        content: `Das Auge ist unser wichtigstes Sinnesorgan. Es funktioniert ähnlich wie eine Kamera.

**Der Weg des Lichts:**
1. Licht tritt durch die **Hornhaut** ein (durchsichtige Schutzschicht)
2. Die **Pupille** reguliert die Lichtmenge (wie eine Blende)
3. Die **Linse** bündelt das Licht (stellt scharf)
4. Das Licht durchquert den **Glaskörper**
5. Auf der **Netzhaut** entsteht ein Bild
6. Der **Sehnerv** leitet Signale zum Gehirn`,
        keyPoints: [
          'Die Iris ist der farbige Teil und steuert die Pupillengröße',
          'Stäbchen sehen Hell-Dunkel, Zapfen sehen Farben',
          'Am blinden Fleck gibt es keine Sinneszellen',
        ],
      },
      {
        id: 'sehzellen',
        title: 'Sehzellen auf der Netzhaut',
        content: `Auf der Netzhaut gibt es zwei Arten von Sinneszellen:

**Stäbchen:**
- Ermöglichen Hell-Dunkel-Sehen
- Funktionieren auch bei wenig Licht
- Kein Farbensehen

**Zapfen:**
- Ermöglichen Farbensehen
- Brauchen mehr Licht
- Drei Arten für Rot, Grün und Blau`,
        keyPoints: [
          'Der gelbe Fleck hat besonders viele Sehzellen → schärfstes Sehen',
          'Am blinden Fleck tritt der Sehnerv aus → keine Sehzellen',
          'Das Gehirn ergänzt die Lücke am blinden Fleck',
        ],
      },
      {
        id: 'raeumlich',
        title: 'Räumliches Sehen',
        content: `Mit zwei Augen können wir räumlich sehen und Entfernungen einschätzen.

**Wie funktioniert das?**
- Jedes Auge sieht ein leicht anderes Bild
- Das Gehirn kombiniert beide Bilder
- Daraus entsteht ein 3D-Eindruck

**Schutz des Auges:**
- Augenhöhle (Knochen)
- Augenbrauen (Schweiß)
- Wimpern (Staub)
- Augenlider (Schließreflex)
- Tränenflüssigkeit (Reinigung)`,
        keyPoints: [
          'Zwei Augen ermöglichen räumliches Sehen',
          'Das Auge ist durch mehrere Mechanismen geschützt',
          'Tränenflüssigkeit reinigt und befeuchtet das Auge',
        ],
      },
    ],
    exercises: [],
    testPool: [
      {
        id: 'auge-1',
        type: 'single-choice',
        question: 'Welcher Teil des Auges ist für das Farbensehen verantwortlich?',
        options: ['Stäbchen', 'Zapfen', 'Linse', 'Hornhaut'],
        correct: 1,
        explanation: 'Die Zapfen auf der Netzhaut ermöglichen das Farbensehen. Es gibt drei Arten für Rot, Grün und Blau.',
        xp: 10,
      },
      {
        id: 'auge-2',
        type: 'single-choice',
        question: 'Was passiert mit der Pupille bei hellem Licht?',
        options: ['Sie wird größer', 'Sie wird kleiner', 'Sie bleibt gleich', 'Sie wird oval'],
        correct: 1,
        explanation: 'Bei hellem Licht verkleinert sich die Pupille, um weniger Licht ins Auge zu lassen und die Netzhaut zu schützen.',
        xp: 10,
      },
      {
        id: 'auge-3',
        type: 'single-choice',
        question: 'Warum gibt es einen "blinden Fleck" im Auge?',
        options: [
          'Dort ist die Linse',
          'Dort tritt der Sehnerv aus - keine Sinneszellen',
          'Dort ist die Pupille',
          'Das Auge ist dort beschädigt',
        ],
        correct: 1,
        explanation: 'Am blinden Fleck verlässt der Sehnerv das Auge. Dort gibt es keine Sinneszellen, weshalb wir dort nichts sehen können.',
        xp: 10,
      },
      {
        id: 'auge-4',
        type: 'drag-drop',
        question: 'Ordne die Augenteile dem Weg des Lichts zu (von außen nach innen):',
        items: ['Netzhaut', 'Hornhaut', 'Linse', 'Pupille', 'Glaskörper'],
        correctOrder: ['Hornhaut', 'Pupille', 'Linse', 'Glaskörper', 'Netzhaut'],
        explanation: 'Das Licht durchquert: Hornhaut → Pupille → Linse → Glaskörper → Netzhaut',
        xp: 20,
      },
      {
        id: 'auge-5',
        type: 'single-choice',
        question: 'Was ist die Iris?',
        options: [
          'Der durchsichtige Teil vorne am Auge',
          'Der farbige Muskelring um die Pupille',
          'Die lichtempfindliche Schicht hinten im Auge',
          'Die gallertartige Füllung des Auges',
        ],
        correct: 1,
        explanation: 'Die Iris ist der farbige Teil des Auges. Sie ist ein Muskelring, der die Größe der Pupille reguliert.',
        xp: 10,
      },
    ],
  },
  {
    id: 'ohr',
    title: 'Das Ohr & Hören',
    icon: '👂',
    color: 'orange',
    shortDescription: 'Wie funktioniert das Hören?',
    bookPages: '22-25',
    sections: [
      {
        id: 'aufbau',
        title: 'Aufbau des Ohrs',
        content: `Das Ohr besteht aus drei Teilen:

**Außenohr:**
- Ohrmuschel (fängt Schallwellen ein)
- Gehörgang (leitet Schall zum Trommelfell)

**Mittelohr:**
- Trommelfell (schwingt bei Schall)
- Gehörknöchelchen: Hammer, Amboss, Steigbügel
- Verstärken die Schwingungen

**Innenohr:**
- Hörschnecke (Cochlea) mit Sinneszellen
- Gleichgewichtsorgan`,
        keyPoints: [
          'Drei Teile: Außenohr, Mittelohr, Innenohr',
          'Gehörknöchelchen sind die kleinsten Knochen des Körpers',
          'Die Hörschnecke wandelt Schwingungen in Nervenimpulse um',
        ],
      },
      {
        id: 'schall',
        title: 'Schallwellen und Frequenz',
        content: `**Schallwellen:**
Schwingungen in der Luft, die sich ausbreiten.

**Frequenz:**
Anzahl der Schwingungen pro Sekunde (Hertz, Hz)
- Hohe Frequenz = hoher Ton
- Niedrige Frequenz = tiefer Ton

**Hörbereich Mensch:**
20 Hz bis 20.000 Hz (20 kHz)

**Lautstärke:**
Stärke der Schwingung (Dezibel, dB)`,
        keyPoints: [
          'Frequenz bestimmt die Tonhöhe',
          'Menschen hören 20 Hz bis 20 kHz',
          'Mit dem Alter nimmt das Hörvermögen ab',
        ],
      },
    ],
    exercises: [],
    testPool: [
      {
        id: 'ohr-1',
        type: 'drag-drop',
        question: 'Ordne den Weg des Schalls durch das Ohr:',
        items: ['Hörschnecke', 'Ohrmuschel', 'Gehörknöchelchen', 'Trommelfell', 'Gehörgang'],
        correctOrder: ['Ohrmuschel', 'Gehörgang', 'Trommelfell', 'Gehörknöchelchen', 'Hörschnecke'],
        explanation: 'Der Schall wird von der Ohrmuschel eingefangen und durch den Gehörgang zum Trommelfell geleitet.',
        xp: 20,
      },
      {
        id: 'ohr-2',
        type: 'single-choice',
        question: 'Was bedeutet eine hohe Frequenz?',
        options: ['Lauter Ton', 'Hoher Ton', 'Tiefer Ton', 'Leiser Ton'],
        correct: 1,
        explanation: 'Eine hohe Frequenz bedeutet viele Schwingungen pro Sekunde, was wir als hohen Ton wahrnehmen.',
        xp: 10,
      },
      {
        id: 'ohr-3',
        type: 'single-choice',
        question: 'Wie heißen die drei Gehörknöchelchen?',
        options: [
          'Hammer, Amboss, Steigbügel',
          'Hammer, Zange, Säge',
          'Trommelfell, Cochlea, Schnecke',
          'Ohrmuschel, Gehörgang, Trommelfell',
        ],
        correct: 0,
        explanation: 'Die drei Gehörknöchelchen heißen Hammer, Amboss und Steigbügel. Sie sind die kleinsten Knochen im Körper.',
        xp: 10,
      },
      {
        id: 'ohr-4',
        type: 'single-choice',
        question: 'Welchen Hörbereich hat der Mensch?',
        options: ['0-10.000 Hz', '20-20.000 Hz', '100-100.000 Hz', '50-5.000 Hz'],
        correct: 1,
        explanation: 'Menschen hören Frequenzen von 20 Hz (tiefe Töne) bis 20.000 Hz (hohe Töne).',
        xp: 10,
      },
    ],
  },
  {
    id: 'tiere',
    title: 'Sinnesleistungen von Tieren',
    icon: '🐘',
    color: 'green',
    shortDescription: 'Tiere haben Supersinne!',
    bookPages: '26-27',
    sections: [
      {
        id: 'ultraschall',
        title: 'Ultraschall und Infraschall',
        content: `**Infraschall (unter 20 Hz):**
- Elefanten: Kommunikation über Kilometer
- Wale: Orientierung im Ozean
- Menschen können ihn nicht hören

**Ultraschall (über 20.000 Hz):**
- Fledermäuse: Echoortung zur Jagd
- Hunde: Können Hundepfeife hören
- Delfine: Kommunikation und Ortung`,
        keyPoints: [
          'Infraschall: unter 20 Hz',
          'Ultraschall: über 20.000 Hz',
          'Viele Tiere hören mehr als Menschen',
        ],
      },
      {
        id: 'licht',
        title: 'UV-Licht und Infrarot',
        content: `**UV-Licht:**
- Bienen sehen UV-Muster auf Blüten
- Vögel sehen mehr Farben als Menschen
- Hilft bei Nahrungssuche

**Infrarot/Wärmebild:**
- Schlangen (Grubenottern): "Sehen" Wärme
- Erkennen warmblütige Beute
- Funktioniert auch im Dunkeln`,
        keyPoints: [
          'Bienen sehen UV-Licht',
          'Schlangen "sehen" Wärme',
          'Viele Tiere haben bessere Sinne als Menschen',
        ],
      },
    ],
    exercises: [],
    testPool: [
      {
        id: 'tiere-1',
        type: 'single-choice',
        question: 'Welche Tiere nutzen Infraschall zur Kommunikation?',
        options: ['Fledermäuse', 'Elefanten', 'Hunde', 'Bienen'],
        correct: 1,
        explanation: 'Elefanten nutzen Infraschall (unter 20 Hz) zur Kommunikation über große Entfernungen.',
        xp: 10,
      },
      {
        id: 'tiere-2',
        type: 'single-choice',
        question: 'Wie orientieren sich Fledermäuse im Dunkeln?',
        options: ['Mit den Augen', 'Mit Ultraschall-Echoortung', 'Mit Infraschall', 'Mit UV-Licht'],
        correct: 1,
        explanation: 'Fledermäuse senden Ultraschallwellen aus und hören das Echo, um sich zu orientieren.',
        xp: 10,
      },
      {
        id: 'tiere-3',
        type: 'single-choice',
        question: 'Was können Bienen sehen, was Menschen nicht sehen können?',
        options: ['Infrarot-Licht', 'UV-Licht', 'Infraschall', 'Röntgenstrahlen'],
        correct: 1,
        explanation: 'Bienen können UV-Licht sehen und erkennen dadurch Muster auf Blüten, die für Menschen unsichtbar sind.',
        xp: 10,
      },
      {
        id: 'tiere-4',
        type: 'single-choice',
        question: 'Welche Tiere können Wärme "sehen"?',
        options: ['Bienen', 'Elefanten', 'Schlangen (Grubenottern)', 'Fledermäuse'],
        correct: 2,
        explanation: 'Grubenottern haben spezielle Organe, mit denen sie Infrarotstrahlung (Wärme) wahrnehmen können.',
        xp: 10,
      },
    ],
  },
  {
    id: 'haut',
    title: 'Die Haut als Sinnesorgan',
    icon: '🖐️',
    color: 'red',
    shortDescription: 'Unser größtes Organ',
    bookPages: '28-31',
    sections: [
      {
        id: 'aufbau',
        title: 'Aufbau der Haut',
        content: `Die Haut ist mit 1,5-2 m² unser größtes Organ.

**Drei Schichten:**

1. **Oberhaut (Epidermis):**
   - Schutzschicht aus Hornzellen
   - Erneuert sich ständig

2. **Lederhaut (Dermis):**
   - Blutgefäße
   - Nerven und Sinneszellen
   - Haarwurzeln
   - Schweiß- und Talgdrüsen

3. **Unterhaut (Subcutis):**
   - Fettzellen
   - Wärmeisolierung
   - Energiespeicher`,
        keyPoints: [
          'Drei Schichten: Oberhaut, Lederhaut, Unterhaut',
          'Größtes Organ des Körpers',
          'Erneuert sich ständig',
        ],
      },
      {
        id: 'funktionen',
        title: 'Funktionen der Haut',
        content: `**Die Haut hat viele wichtige Aufgaben:**

**Schutz:**
- Vor Verletzungen
- Vor Krankheitserregern
- Vor UV-Strahlung

**Temperaturregulierung:**
- Schwitzen bei Hitze (Verdunstungskälte)
- Gänsehaut bei Kälte

**Sinnesorgan:**
- Tasten und Berührung
- Temperatur spüren
- Schmerz wahrnehmen

**Speicher:**
- Fett
- Wasser
- Vitamine`,
        keyPoints: [
          'Schutz, Temperatur, Sinne, Speicher',
          'Schwitzen kühlt den Körper',
          'Fingerspitzen haben besonders viele Tastsinneszellen',
        ],
      },
      {
        id: 'sinneszellen',
        title: 'Sinneszellen in der Haut',
        content: `**Verschiedene Sinneszellen:**

**Tastkörperchen:**
- Spüren Berührung und Druck
- Besonders viele in Fingerspitzen

**Wärmepunkte:**
- Registrieren Wärme

**Kältepunkte:**
- Registrieren Kälte

**Schmerzrezeptoren:**
- Warnen vor Verletzungen
- Überall in der Haut`,
        keyPoints: [
          'Vier Arten von Sinneszellen',
          'Fingerspitzen sind besonders empfindlich',
          'Schmerz ist ein Warnsignal',
        ],
      },
    ],
    exercises: [],
    testPool: [
      {
        id: 'haut-1',
        type: 'single-choice',
        question: 'Wie groß ist die Haut eines Erwachsenen ungefähr?',
        options: ['0,5 m²', '1,5-2 m²', '5 m²', '10 m²'],
        correct: 1,
        explanation: 'Die Haut ist mit 1,5-2 m² das größte Organ des menschlichen Körpers.',
        xp: 10,
      },
      {
        id: 'haut-2',
        type: 'drag-drop',
        question: 'Ordne die Hautschichten von außen nach innen:',
        items: ['Unterhaut', 'Lederhaut', 'Oberhaut'],
        correctOrder: ['Oberhaut', 'Lederhaut', 'Unterhaut'],
        explanation: 'Von außen nach innen: Oberhaut (Schutz), Lederhaut (Nerven, Gefäße), Unterhaut (Fett).',
        xp: 20,
      },
      {
        id: 'haut-3',
        type: 'single-choice',
        question: 'Warum schwitzen wir?',
        options: [
          'Um Giftstoffe auszuscheiden',
          'Um den Körper zu kühlen',
          'Um die Haut zu reinigen',
          'Um Wasser zu speichern',
        ],
        correct: 1,
        explanation: 'Schwitzen kühlt den Körper durch Verdunstungskälte. Der Schweiß verdunstet und entzieht der Haut Wärme.',
        xp: 10,
      },
      {
        id: 'haut-4',
        type: 'single-choice',
        question: 'In welcher Hautschicht befinden sich die Sinneszellen?',
        options: ['Oberhaut', 'Lederhaut', 'Unterhaut', 'Hornschicht'],
        correct: 1,
        explanation: 'In der Lederhaut befinden sich die Nerven und Sinneszellen für Tastsinn, Temperatur und Schmerz.',
        xp: 10,
      },
    ],
  },
  {
    id: 'behinderung',
    title: 'Blinde & Gehörlose Menschen',
    icon: '♿',
    color: 'teal',
    shortDescription: 'Leben mit anderen Sinnen',
    bookPages: '32-33',
    sections: [
      {
        id: 'blindheit',
        title: 'Blindheit',
        content: `**Leben ohne Sehen:**

In Deutschland leben ca. 100.000 blinde Menschen.

**Andere Sinne werden verstärkt:**
- Besseres Gehör
- Feiner Tastsinn
- Gutes Gedächtnis

**Brailleschrift:**
- Tastbare Punktschrift
- 6 Punkte pro Zeichen
- Kombinationen ergeben Buchstaben

**Hilfsmittel:**
- Blindenstock (weiß mit roter Spitze)
- Blindenhund
- Sprachcomputer
- Blindenleitsysteme (Rillen im Boden)`,
        keyPoints: [
          'Ca. 100.000 blinde Menschen in Deutschland',
          'Brailleschrift zum Lesen',
          'Viele Hilfsmittel verfügbar',
        ],
      },
      {
        id: 'gehoerlos',
        title: 'Gehörlosigkeit',
        content: `**Leben ohne Hören:**

In Deutschland leben ca. 80.000 gehörlose Menschen.

**Kommunikation:**
- Gebärdensprache (eigene Grammatik!)
- Lippenlesen
- Schriftsprache

**Hilfsmittel:**
- Hörgeräte
- Cochlea-Implantate
- Lichtsignale statt Klingel
- Vibrationswecker

**Wichtig:**
- Gehörlose sind nicht stumm
- Sie können sprechen lernen
- Gebärdensprache ist vollwertige Sprache`,
        keyPoints: [
          'Ca. 80.000 gehörlose Menschen in Deutschland',
          'Gebärdensprache als Hauptsprache',
          'Viele technische Hilfsmittel',
        ],
      },
    ],
    exercises: [],
    testPool: [
      {
        id: 'behinderung-1',
        type: 'single-choice',
        question: 'Wie viele Punkte hat ein Braille-Zeichen?',
        options: ['4 Punkte', '6 Punkte', '8 Punkte', '10 Punkte'],
        correct: 1,
        explanation: 'Ein Braille-Zeichen besteht aus bis zu 6 Punkten, die in verschiedenen Kombinationen Buchstaben bilden.',
        xp: 10,
      },
      {
        id: 'behinderung-2',
        type: 'single-choice',
        question: 'Was ist Gebärdensprache?',
        options: [
          'Eine einfache Zeichensprache',
          'Eine vollwertige Sprache mit eigener Grammatik',
          'Internationale Zeichen',
          'Pantomime',
        ],
        correct: 1,
        explanation: 'Gebärdensprache ist eine vollwertige Sprache mit eigener Grammatik, nicht nur einfache Zeichen.',
        xp: 10,
      },
      {
        id: 'behinderung-3',
        type: 'single-choice',
        question: 'Wofür dient der Blindenstock?',
        options: [
          'Als Waffe',
          'Zur Orientierung und zum Ertasten von Hindernissen',
          'Als Stütze beim Gehen',
          'Als Messgerät',
        ],
        correct: 1,
        explanation: 'Der Blindenstock hilft blinden Menschen, sich zu orientieren und Hindernisse zu ertasten.',
        xp: 10,
      },
      {
        id: 'behinderung-4',
        type: 'single-choice',
        question: 'Was ist ein Cochlea-Implantat?',
        options: [
          'Eine Brille',
          'Ein elektronisches Hörgerät im Innenohr',
          'Ein Blindenhund',
          'Eine Lupe',
        ],
        correct: 1,
        explanation: 'Ein Cochlea-Implantat ist ein elektronisches Gerät, das im Innenohr implantiert wird und gehörlosen Menschen das Hören ermöglicht.',
        xp: 10,
      },
    ],
  },
  {
    id: 'masse-volumen',
    title: 'Masse und Volumen',
    icon: '⚖️',
    color: 'purple',
    shortDescription: 'Messen und Wiegen',
    bookPages: '34-37',
    sections: [
      {
        id: 'masse',
        title: 'Masse messen',
        content: `**Was ist Masse?**
Die Menge an Materie in einem Körper.

**Einheiten:**
- Kilogramm (kg)
- Gramm (g)
- Milligramm (mg)

**Umrechnung:**
- 1 kg = 1.000 g
- 1 g = 1.000 mg

**Messgerät:**
- Waage (Balkenwaage, digitale Waage)
- Funktioniert durch Gewichtskraft`,
        keyPoints: [
          'Masse = Menge an Materie',
          '1 kg = 1.000 g',
          'Waage zum Messen',
        ],
      },
      {
        id: 'volumen',
        title: 'Volumen messen',
        content: `**Was ist Volumen?**
Der Raum, den ein Körper einnimmt.

**Einheiten:**
- Liter (l)
- Milliliter (ml)
- Kubikzentimeter (cm³)

**Umrechnung:**
- 1 l = 1.000 ml
- 1 ml = 1 cm³

**Messgeräte:**
- Messzylinder
- Messbecher

**Volumen fester Körper:**
- Durch Wasserverdrängung
- Volumen = Wasserstand nachher - Wasserstand vorher`,
        keyPoints: [
          'Volumen = Raum den ein Körper einnimmt',
          '1 l = 1.000 ml = 1.000 cm³',
          'Messzylinder auf Augenhöhe ablesen',
        ],
      },
      {
        id: 'ablesen',
        title: 'Richtig Ablesen',
        content: `**Wichtige Regeln:**

1. **Auf Augenhöhe ablesen**
   - Nicht von oben oder unten

2. **An der tiefsten Stelle des Meniskus**
   - Wasseroberfläche ist gewölbt
   - An der Mitte ablesen

3. **Physikalische Größe = Zahl + Einheit**
   - Richtig: 500 ml
   - Falsch: 500 (ohne Einheit)`,
        keyPoints: [
          'Immer auf Augenhöhe',
          'Am Meniskus ablesen',
          'Zahl + Einheit angeben',
        ],
      },
    ],
    exercises: [],
    testPool: [
      {
        id: 'masse-1',
        type: 'single-choice',
        question: 'Wie viel Gramm sind 2,5 kg?',
        options: ['25 g', '250 g', '2.500 g', '25.000 g'],
        correct: 2,
        explanation: '1 kg = 1.000 g, also 2,5 kg = 2,5 × 1.000 = 2.500 g',
        xp: 10,
      },
      {
        id: 'masse-2',
        type: 'single-choice',
        question: 'Wie viel Milliliter sind 3 Liter?',
        options: ['30 ml', '300 ml', '3.000 ml', '30.000 ml'],
        correct: 2,
        explanation: '1 l = 1.000 ml, also 3 l = 3 × 1.000 = 3.000 ml',
        xp: 10,
      },
      {
        id: 'masse-3',
        type: 'single-choice',
        question: 'Wie misst man das Volumen eines Steins?',
        options: [
          'Mit einer Waage',
          'Mit einem Lineal',
          'Durch Wasserverdrängung',
          'Mit einem Thermometer',
        ],
        correct: 2,
        explanation: 'Das Volumen fester Körper misst man durch Wasserverdrängung: Volumen = Wasserstand nachher - vorher.',
        xp: 10,
      },
      {
        id: 'masse-4',
        type: 'single-choice',
        question: 'Wo muss man beim Ablesen eines Messzylinders hinschauen?',
        options: [
          'An der höchsten Stelle',
          'An der tiefsten Stelle des Meniskus',
          'Von oben',
          'Von unten',
        ],
        correct: 1,
        explanation: 'Man liest auf Augenhöhe an der tiefsten Stelle des Meniskus (der Wölbung) ab.',
        xp: 10,
      },
    ],
  },
  {
    id: 'temperatur',
    title: 'Temperatur & Thermometer',
    icon: '🌡️',
    color: 'yellow',
    shortDescription: 'Wärme und Kälte messen',
    bookPages: '38-43',
    sections: [
      {
        id: 'temperatur',
        title: 'Was ist Temperatur?',
        content: `**Temperatur:**
Ein Maß für Wärme oder Kälte.

**Einheit:**
- Grad Celsius (°C)

**Fixpunkte:**
- 0°C: Eis schmilzt
- 100°C: Wasser kocht

**Körpertemperatur:**
Ca. 37°C (normal)

**Temperaturen unter 0°C:**
Minusgrade (z.B. -10°C)`,
        keyPoints: [
          'Einheit: Grad Celsius (°C)',
          '0°C = Schmelzpunkt von Eis',
          '100°C = Siedepunkt von Wasser',
        ],
      },
      {
        id: 'thermometer',
        title: 'Thermometer-Arten',
        content: `**Flüssigkeitsthermometer:**
- Flüssigkeit dehnt sich bei Wärme aus
- Meist Alkohol (gefärbt) oder Quecksilber

**Elektronisches Thermometer:**
- Digitale Anzeige
- Schneller und genauer

**Ohrthermometer:**
- Misst Infrarotstrahlung
- Für Körpertemperatur

**Fieberthermometer:**
- Speziell für Körpertemperatur
- Sehr genau`,
        keyPoints: [
          'Verschiedene Arten für verschiedene Zwecke',
          'Flüssigkeit dehnt sich bei Wärme aus',
          'Elektronische Thermometer sind sehr genau',
        ],
      },
    ],
    exercises: [],
    testPool: [
      {
        id: 'temp-1',
        type: 'single-choice',
        question: 'Bei welcher Temperatur schmilzt Eis?',
        options: ['0°C', '10°C', '100°C', '-10°C'],
        correct: 0,
        explanation: 'Eis schmilzt bei 0°C (null Grad Celsius).',
        xp: 10,
      },
      {
        id: 'temp-2',
        type: 'single-choice',
        question: 'Bei welcher Temperatur kocht Wasser?',
        options: ['0°C', '37°C', '50°C', '100°C'],
        correct: 3,
        explanation: 'Wasser kocht bei 100°C (auf Meereshöhe).',
        xp: 10,
      },
      {
        id: 'temp-3',
        type: 'single-choice',
        question: 'Welche Körpertemperatur ist normal?',
        options: ['25°C', '37°C', '50°C', '100°C'],
        correct: 1,
        explanation: 'Die normale Körpertemperatur liegt bei etwa 37°C.',
        xp: 10,
      },
      {
        id: 'temp-4',
        type: 'single-choice',
        question: 'Wie funktioniert ein Flüssigkeitsthermometer?',
        options: [
          'Mit Strom',
          'Die Flüssigkeit dehnt sich bei Wärme aus',
          'Mit Infrarotstrahlung',
          'Mit Magneten',
        ],
        correct: 1,
        explanation: 'Bei Wärme dehnt sich die Flüssigkeit im Thermometer aus und steigt in der Röhre nach oben.',
        xp: 10,
      },
    ],
  },
  {
    id: 'diagramme',
    title: 'Diagramme erstellen & lesen',
    icon: '📊',
    color: 'indigo',
    shortDescription: 'Daten visualisieren',
    bookPages: '42-43',
    sections: [
      {
        id: 'arten',
        title: 'Diagramm-Arten',
        content: `**Säulendiagramm:**
- Vertikale Balken
- Vergleich von Mengen
- Gut für wenige Kategorien

**Balkendiagramm:**
- Horizontale Balken
- Wie Säulendiagramm, nur gedreht

**Kreisdiagramm:**
- Zeigt Anteile am Ganzen
- Summe = 100%
- Gut für Prozentanteile

**Liniendiagramm:**
- Zeigt Veränderungen über Zeit
- Punkte werden verbunden
- Gut für Trends`,
        keyPoints: [
          'Verschiedene Diagramme für verschiedene Daten',
          'Säulen/Balken für Vergleiche',
          'Kreis für Anteile',
          'Linien für Zeitverläufe',
        ],
      },
      {
        id: 'erstellen',
        title: 'Diagramm erstellen',
        content: `**Schritte:**

1. **Achsen beschriften**
   - x-Achse (horizontal)
   - y-Achse (vertikal)
   - Mit Einheiten!

2. **Skalierung festlegen**
   - Passende Abstände wählen
   - Gleichmäßige Einteilung

3. **Werte eintragen**
   - Genau ablesen
   - Lineal benutzen

4. **Titel hinzufügen**
   - Beschreibt das Diagramm`,
        keyPoints: [
          'Achsen immer beschriften',
          'Einheiten nicht vergessen',
          'Titel erklärt das Diagramm',
        ],
      },
    ],
    exercises: [],
    testPool: [
      {
        id: 'dia-1',
        type: 'single-choice',
        question: 'Welches Diagramm zeigt Anteile am Ganzen?',
        options: ['Säulendiagramm', 'Kreisdiagramm', 'Liniendiagramm', 'Balkendiagramm'],
        correct: 1,
        explanation: 'Das Kreisdiagramm zeigt Anteile am Ganzen (100%). Jeder Teil ist ein Stück vom Kreis.',
        xp: 10,
      },
      {
        id: 'dia-2',
        type: 'single-choice',
        question: 'Welches Diagramm eignet sich für Veränderungen über Zeit?',
        options: ['Kreisdiagramm', 'Liniendiagramm', 'Säulendiagramm', 'Balkendiagramm'],
        correct: 1,
        explanation: 'Liniendiagramme zeigen gut, wie sich Werte über Zeit verändern (z.B. Temperatur im Jahresverlauf).',
        xp: 10,
      },
      {
        id: 'dia-3',
        type: 'single-choice',
        question: 'Was muss man bei einem Diagramm immer beschriften?',
        options: ['Nur die Werte', 'Achsen und Einheiten', 'Nur den Titel', 'Nichts'],
        correct: 1,
        explanation: 'Bei einem Diagramm müssen immer die Achsen mit Einheiten beschriftet werden, damit man es verstehen kann.',
        xp: 10,
      },
      {
        id: 'dia-4',
        type: 'single-choice',
        question: 'Wie heißt die horizontale Achse in einem Diagramm?',
        options: ['y-Achse', 'x-Achse', 'z-Achse', 'Werte-Achse'],
        correct: 1,
        explanation: 'Die horizontale Achse heißt x-Achse. Die vertikale Achse heißt y-Achse.',
        xp: 10,
      },
    ],
  },
];
