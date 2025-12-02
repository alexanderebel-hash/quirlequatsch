// 🦋 LENI's Sozialkunde Content & Quiz Data

// ========================================
// MODUL 1: Sozialversicherung
// ========================================

export const sozialversicherungContent = {
  title: "Die fünf Säulen der Sozialversicherung",
  description: "Die Sozialversicherung schützt dich vor verschiedenen Lebensrisiken",
  saeulen: [
    {
      id: "kranken",
      name: "Krankenversicherung",
      emoji: "🩺",
      color: "from-blue-500 to-blue-600",
      versicherte: "Ca. 90% der Menschen in Deutschland. Ab Geburt automatisch über die Eltern versichert.",
      leistungen: "Arztbesuche, Krankenhausaufenthalte, Medikamente - die Krankenkasse zahlt",
      finanzierung: "Arbeitgeber und Arbeitnehmer zahlen jeweils den gleichen Anteil. Kinderlose zahlen einen Beitragszuschlag. Für mitversicherte Familienangehörige werden keine extra Beiträge erhoben.",
      risiko: "Krankheit"
    },
    {
      id: "renten",
      name: "Rentenversicherung",
      emoji: "👴",
      color: "from-purple-500 to-purple-600",
      versicherte: "Alle Personen, die in einem sozialversicherungspflichtigen Beschäftigungsverhältnis stehen",
      leistungen: "Ersetzt das Einkommen aus der früheren Arbeit im Alter",
      finanzierung: "Beiträge während des Arbeitslebens - je länger und mehr man gearbeitet hat, desto höher die Rente",
      risiko: "Alter / Ruhestand"
    },
    {
      id: "pflege",
      name: "Pflegeversicherung",
      emoji: "🏥",
      color: "from-pink-500 to-pink-600",
      versicherte: "Wer eine Krankenversicherung hat, hat automatisch auch eine Pflegeversicherung. Gilt auch für mitversicherte Familienangehörige. Wer privat krankenversichert ist, muss auch eine private Pflegeversicherung abschließen.",
      leistungen: "Hilfe bei den Verrichtungen des täglichen Lebens (Waschen, Anziehen, Essen)",
      finanzierung: "Wie bei der Krankenversicherung: Die Hälfte zahlt der Arbeitnehmer, die Hälfte der Arbeitgeber. Wird automatisch vom Lohn abgezogen.",
      risiko: "Pflegebedürftigkeit"
    },
    {
      id: "arbeitslosen",
      name: "Arbeitslosenversicherung",
      emoji: "💼",
      color: "from-amber-500 to-amber-600",
      versicherte: "Alle Arbeitnehmer, die eine Arbeitslosenversicherung haben",
      leistungen: "Ca. 60% des letzten Nettolohns pro Monat (Arbeitslosengeld I)",
      finanzierung: "Arbeitgeber zahlt Beiträge (über Steuern)",
      risiko: "Arbeitslosigkeit"
    },
    {
      id: "unfall",
      name: "Unfallversicherung",
      emoji: "⚠️",
      color: "from-red-500 to-red-600",
      versicherte: "Arbeitnehmer, Auszubildende, Unternehmer, Kinder, Schüler und Studenten",
      leistungen: "Rente bei dauerhafter Arbeitsunfähigkeit durch Unfall, Behandlungskosten",
      finanzierung: "Arbeitgeber/Unternehmen tragen die Kosten allein",
      risiko: "Arbeitsunfall, Wegeunfall, Berufskrankheit"
    }
  ],
  merksatz: "Wenn ich Partner, Eltern oder Kinder kriege, ich auch das - Die Sozialversicherung schützt nicht nur dich, sondern auch deine Familie!"
};

export const sozialversicherungQuiz = [
  {
    question: "Welche Versicherung zahlt, wenn du zum Arzt gehst?",
    options: ["Rentenversicherung", "Krankenversicherung", "Unfallversicherung", "Pflegeversicherung"],
    correct: 1,
    explanation: "Die Krankenversicherung übernimmt die Kosten für Arztbesuche und Behandlungen.",
    lillebiComment: "Genau richtig! 🦋"
  },
  {
    question: "Wer zahlt die Beiträge zur Unfallversicherung?",
    options: ["Nur der Arbeitnehmer", "Nur der Arbeitgeber", "Beide zu gleichen Teilen", "Der Staat"],
    correct: 1,
    explanation: "Die Unfallversicherung wird allein vom Arbeitgeber bezahlt.",
    lillebiComment: "Super, das sitzt!"
  },
  {
    question: "Was ist das Risiko, gegen das die Rentenversicherung schützt?",
    options: ["Krankheit", "Arbeitslosigkeit", "Alter/Ruhestand", "Unfall"],
    correct: 2,
    explanation: "Die Rentenversicherung sichert das Einkommen im Alter.",
    lillebiComment: "Toll gemacht!"
  },
  {
    question: "Wie viel Prozent des letzten Lohns bekommt man ungefähr als Arbeitslosengeld?",
    options: ["30%", "60%", "90%", "100%"],
    correct: 1,
    explanation: "Das Arbeitslosengeld I beträgt etwa 60% des letzten Nettolohns.",
    lillebiComment: "Weiter so!"
  },
  {
    question: "Wer ist in der Pflegeversicherung automatisch mitversichert?",
    options: ["Niemand", "Nur Kinder", "Familienangehörige", "Nur der Partner"],
    correct: 2,
    explanation: "Familienangehörige sind in der Pflegeversicherung automatisch mitversichert.",
    lillebiComment: "Du verstehst das Thema!"
  },
  {
    question: "Was bedeutet 'Pflichtversicherung'?",
    options: ["Man kann wählen", "Man muss versichert sein", "Nur für Reiche", "Nur für Arme"],
    correct: 1,
    explanation: "Bei einer Pflichtversicherung muss jeder Arbeitnehmer versichert sein - es ist keine freiwillige Entscheidung.",
    lillebiComment: "Genau richtig! 🦋"
  },
  {
    question: "Welche Versicherung schützt auch Schüler und Studenten?",
    options: ["Rentenversicherung", "Arbeitslosenversicherung", "Unfallversicherung", "Pflegeversicherung"],
    correct: 2,
    explanation: "Die Unfallversicherung schützt auch Schüler, Studenten und Kinder.",
    lillebiComment: "Super, das sitzt!"
  },
  {
    question: "Wie werden die meisten Sozialversicherungen finanziert?",
    options: ["Nur vom Staat", "Nur vom Arbeitnehmer", "Je zur Hälfte von Arbeitgeber und Arbeitnehmer", "Nur vom Arbeitgeber"],
    correct: 2,
    explanation: "Die meisten Sozialversicherungen werden paritätisch finanziert - also je zur Hälfte.",
    lillebiComment: "Toll gemacht!"
  }
];

// ========================================
// MODUL 2: Gerechtigkeit
// ========================================

export const gerechtigkeitContent = {
  title: "Dimensionen der Gerechtigkeit",
  description: "Gerechtigkeit kann von allen Menschen unterschiedlich verstanden werden",
  dimensionen: [
    {
      id: "verfahren",
      name: "Verfahrensgerechtigkeit",
      emoji: "⚖️",
      color: "from-blue-500 to-indigo-600",
      definition: "Alle können sich mit gleichen Rechten einbringen",
      details: "Das Verfahren (z.B. vor Gericht, bei Wahlen) ist für alle gleich - unabhängig von unterschiedlichen Voraussetzungen (Herkunft, Geld, Bildung)",
      beispiel: "Jeder hat das Recht auf einen Anwalt"
    },
    {
      id: "leistung",
      name: "Leistungsgerechtigkeit",
      emoji: "💪",
      color: "from-purple-500 to-purple-600",
      definition: "Wer mehr leistet, soll mehr bekommen",
      details: "Höhere Leistung = höheres Einkommen. Anreiz für Anstrengung und Arbeit",
      beispiel: "Ein Chefarzt verdient mehr als ein Assistenzarzt"
    },
    {
      id: "bedarf",
      name: "Bedarfsgerechtigkeit",
      emoji: "🤲",
      color: "from-green-500 to-emerald-600",
      definition: "Jeder soll nach seinen Bedürfnissen versorgt werden",
      details: "Alle Menschen sollen entsprechend ihrer Bedürfnisse versorgt werden. Der Staat soll darauf hinarbeiten",
      beispiel: "Sozialwohnungen für Menschen mit wenig Geld"
    },
    {
      id: "teilhabe",
      name: "Teilhabegerechtigkeit",
      emoji: "🤝",
      color: "from-orange-500 to-amber-600",
      definition: "Niemand darf ausgeschlossen werden",
      details: "Alle dürfen die Einrichtungen der Gesellschaft nutzen (Theater, Bildung, öffentliche Räume). Teilhaben am gesellschaftlichen Leben",
      beispiel: "Barrierefreie Zugänge für Rollstuhlfahrer"
    }
  ],
  karikatur: {
    titel: "Ist das Gerechtigkeit?",
    autor: "Karl-Heinz Schoenfeld",
    beschreibung: "Eine tiefe Schlucht trennt zwei Seiten",
    linkeSeite: "Kahl, Holzhütte, toter Baum, welke Pflanzen (arm)",
    rechteSeite: "Grün, gepflegter Garten, Schloss, Kirche (reich)",
    dialog: {
      frage: "Wie bist du da rübergekommen?",
      antwort: "Ich bin hier geboren!"
    },
    deutung: "Die Karikatur kritisiert, dass Wohlstand oft nicht durch eigene Leistung, sondern durch Geburt/Herkunft bestimmt wird. Die Schlucht symbolisiert die schwer überwindbare Kluft zwischen Arm und Reich. Kritik an mangelnder sozialer Mobilität."
  }
};

export const gerechtigkeitQuiz = [
  {
    question: "Was bedeutet Verfahrensgerechtigkeit?",
    options: ["Reiche bekommen mehr", "Alle haben die gleichen Rechte im Verfahren", "Jeder bekommt was er braucht", "Niemand wird ausgeschlossen"],
    correct: 1,
    explanation: "Verfahrensgerechtigkeit bedeutet, dass alle die gleichen Rechte haben - z.B. vor Gericht.",
    lillebiComment: "Genau richtig! 🦋"
  },
  {
    question: "Leistungsgerechtigkeit bedeutet...",
    options: ["Alle bekommen gleich viel", "Wer mehr leistet, bekommt mehr", "Der Staat verteilt alles", "Jeder bekommt was er braucht"],
    correct: 1,
    explanation: "Bei der Leistungsgerechtigkeit gilt: Mehr Leistung = mehr Belohnung.",
    lillebiComment: "Super, das sitzt!"
  },
  {
    question: "Was kritisiert die Karikatur mit der Schlucht?",
    options: ["Umweltverschmutzung", "Dass Wohlstand oft von der Geburt abhängt", "Schlechte Architektur", "Zu viele Schlösser"],
    correct: 1,
    explanation: "Die Karikatur kritisiert, dass man oft reich oder arm geboren wird - nicht durch eigene Leistung.",
    lillebiComment: "Toll gemacht!"
  },
  {
    question: "Teilhabegerechtigkeit bedeutet...",
    options: ["Alle teilen alles", "Niemand darf von der Gesellschaft ausgeschlossen werden", "Nur Reiche dürfen teilnehmen", "Man muss teilen können"],
    correct: 1,
    explanation: "Bei Teilhabegerechtigkeit geht es darum, dass alle am gesellschaftlichen Leben teilnehmen können.",
    lillebiComment: "Weiter so!"
  },
  {
    question: "Welche Dimension der Gerechtigkeit passt zu Sozialwohnungen?",
    options: ["Leistungsgerechtigkeit", "Verfahrensgerechtigkeit", "Bedarfsgerechtigkeit", "Teilhabegerechtigkeit"],
    correct: 2,
    explanation: "Sozialwohnungen sind ein Beispiel für Bedarfsgerechtigkeit - Menschen bekommen Wohnraum nach ihrem Bedarf.",
    lillebiComment: "Du verstehst das Thema!"
  },
  {
    question: "Was symbolisiert die Schlucht in der Karikatur?",
    options: ["Einen echten Canyon", "Die Trennung zwischen Arm und Reich", "Eine Brücke", "Ein Tal"],
    correct: 1,
    explanation: "Die Schlucht symbolisiert die tiefe, schwer überwindbare Kluft zwischen Arm und Reich.",
    lillebiComment: "Genau richtig! 🦋"
  }
];

// ========================================
// MODUL 3: Armut und Reichtum
// ========================================

export const armutContent = {
  title: "Armut und Reichtum",
  description: "Armut ist nicht gleich Armut - es gibt verschiedene Arten",
  definition: "Verschiedene Arten von Entbehrungen im Zusammenhang mit der Unfähigkeit, menschliche Grundbedürfnisse zu befriedigen.",
  grundbeduerfnisse: ["Nahrung", "Gesundheit", "Bildung", "Mitsprache", "Sicherheit"],
  arten: [
    {
      id: "absolut",
      name: "Absolute Armut",
      emoji: "🌍",
      color: "from-red-500 to-rose-600",
      definition: "Weniger als 1,90 $ pro Tag (nach Weltbank)",
      merkmale: [
        "Zustand, in dem ein Mensch die Befriedigung seiner Grundbedürfnisse NICHT leisten kann",
        "Kein sauberes Wasser",
        "Nicht genug Essen",
        "Keine medizinische Versorgung",
        "Kommt vor allem in Entwicklungsländern vor"
      ]
    },
    {
      id: "relativ",
      name: "Relative Armut",
      emoji: "🇩🇪",
      color: "from-orange-500 to-amber-600",
      definition: "Armut im Verhältnis zum jeweiligen Umfeld",
      deutschland: "Wer weniger als 50% des durchschnittlichen Netto-Pro-Kopf-Einkommens hat, gilt als arm (OECD-Definition)",
      beispiel: {
        durchschnitt: "ca. 2.000€ netto",
        armut: "unter 1.000€ netto pro Monat"
      }
    }
  ],
  vergleich: {
    armut: [
      "Auf der Straße leben",
      "Oft Suchtprobleme (Alkohol, Drogen)",
      "Hunger, Kälte",
      "Weniger Schutz",
      "Nur alle 2 Wochen zum Supermarkt",
      "Keine sichere Unterkunft"
    ],
    reichtum: [
      "Essen, Trinken immer verfügbar",
      "Haus oder Wohnung",
      "Bildung",
      "Freizeitparks besuchen",
      "Einkaufen gehen können",
      "2-3x pro Woche Supermarkt",
      "Reisen"
    ],
    wichtig: "Man kann sich nicht alles kaufen (Glück, Gesundheit, echte Freundschaft)"
  }
};

export const armutQuiz = [
  {
    question: "Was ist absolute Armut?",
    options: ["Weniger Geld als der Nachbar", "Weniger als 1,90$ pro Tag", "Kein Auto haben", "Weniger als 1000€ im Monat"],
    correct: 1,
    explanation: "Absolute Armut bedeutet weniger als 1,90$ pro Tag - man kann seine Grundbedürfnisse nicht erfüllen.",
    lillebiComment: "Genau richtig! 🦋"
  },
  {
    question: "Wie wird relative Armut in Deutschland definiert?",
    options: ["Weniger als 100€ im Monat", "Weniger als 50% des Durchschnittseinkommens", "Kein Haus besitzen", "Weniger als 1,90$ pro Tag"],
    correct: 1,
    explanation: "Relative Armut bedeutet in Deutschland: weniger als 50% des durchschnittlichen Einkommens.",
    lillebiComment: "Super, das sitzt!"
  },
  {
    question: "Welches ist ein Grundbedürfnis?",
    options: ["Smartphone", "Nahrung", "Auto", "Urlaub"],
    correct: 1,
    explanation: "Nahrung ist ein Grundbedürfnis - ohne Essen kann der Mensch nicht überleben.",
    lillebiComment: "Toll gemacht!"
  },
  {
    question: "Wo kommt absolute Armut vor allem vor?",
    options: ["In Deutschland", "In Entwicklungsländern", "In der Schweiz", "In allen Ländern gleich"],
    correct: 1,
    explanation: "Absolute Armut gibt es vor allem in Entwicklungsländern, wo Menschen unter 1,90$ pro Tag leben.",
    lillebiComment: "Weiter so!"
  },
  {
    question: "Was kann man sich NICHT kaufen, auch wenn man reich ist?",
    options: ["Ein Haus", "Echte Freundschaft", "Ein Auto", "Essen"],
    correct: 1,
    explanation: "Geld kann vieles kaufen, aber keine echten Gefühle wie Freundschaft oder Glück.",
    lillebiComment: "Du verstehst das Thema!"
  },
  {
    question: "Was ist der Unterschied zwischen absoluter und relativer Armut?",
    options: ["Kein Unterschied", "Absolute = weltweit gleich, Relative = im Vergleich zum Umfeld", "Absolute ist schlimmer", "Relative ist schlimmer"],
    correct: 1,
    explanation: "Absolute Armut ist weltweit gleich definiert (1,90$/Tag), relative Armut hängt vom Umfeld ab.",
    lillebiComment: "Genau richtig! 🦋"
  }
];

// ========================================
// Spiele-Daten
// ========================================

export const spieleData = {
  saeulenZuordnung: {
    begriffe: [
      { id: "arzt", text: "Arztbesuch", correct: "kranken" },
      { id: "rente", text: "Rente", correct: "renten" },
      { id: "pflegeheim", text: "Pflegeheim", correct: "pflege" },
      { id: "arbeitslos", text: "Arbeitslosengeld", correct: "arbeitslosen" },
      { id: "arbeitsunfall", text: "Arbeitsunfall", correct: "unfall" }
    ]
  },
  gerechtigkeitMemory: [
    { id: 1, text: "Verfahrensgerechtigkeit", type: "term" },
    { id: 2, text: "Gleiche Rechte für alle", type: "definition", pair: 1 },
    { id: 3, text: "Leistungsgerechtigkeit", type: "term" },
    { id: 4, text: "Wer mehr leistet, bekommt mehr", type: "definition", pair: 3 },
    { id: 5, text: "Bedarfsgerechtigkeit", type: "term" },
    { id: 6, text: "Jeder nach seinen Bedürfnissen", type: "definition", pair: 5 },
    { id: 7, text: "Teilhabegerechtigkeit", type: "term" },
    { id: 8, text: "Niemand wird ausgeschlossen", type: "definition", pair: 7 }
  ],
  armutSortierung: {
    absolut: [
      "Unter 1,90$/Tag",
      "Entwicklungsländer",
      "Grundbedürfnisse nicht erfüllt",
      "Kein sauberes Wasser",
      "Keine medizinische Versorgung"
    ],
    relativ: [
      "Unter 50% des Durchschnitts",
      "Deutschland",
      "Im Vergleich zum Umfeld",
      "Weniger als 1000€/Monat",
      "Soziale Ausgrenzung"
    ]
  }
};

// Lillebi Kommentare
export const lillebiComments = {
  erfolg: [
    "Genau richtig! 🦋",
    "Super, das sitzt!",
    "Toll gemacht!",
    "Weiter so!",
    "Du verstehst das Thema!"
  ],
  fehler: [
    "Hmm, nicht ganz. Schau nochmal.",
    "Versuch's nochmal!",
    "Fast! Aber nicht ganz.",
    "Lies die Frage nochmal genau."
  ],
  tipps: [
    "Denk dran: Die 5 Säulen schützen vor Lebensrisiken.",
    "Kleiner Hinweis: Relative Armut hängt vom Umfeld ab.",
    "Merke: Verfahren = gleiche Rechte für alle.",
    "Tipp: Grundbedürfnisse sind lebensnotwendig!"
  ],
  motivation: [
    "Du schaffst das!",
    "Sozialkunde ist wichtig für dein Leben!",
    "Jetzt verstehst du, wie Deutschland funktioniert."
  ]
};
