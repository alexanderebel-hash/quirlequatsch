export interface Vocab {
  id: string;
  fr: string;
  de: string;
  icon: string;
  category: 'greetings' | 'paris' | 'people' | 'misc';
}

export const vocabulary: Vocab[] = [
  // Begrüßungen
  { id: '1', fr: "Bienvenue !", de: "Willkommen!", icon: "👋", category: "greetings" },
  { id: '2', fr: "Bonjour !", de: "Guten Tag!", icon: "☀️", category: "greetings" },
  { id: '3', fr: "Salut !", de: "Hallo! / Tschüss!", icon: "👋🏼", category: "greetings" },
  { id: '4', fr: "Ça va ?", de: "Wie geht's?", icon: "😊", category: "greetings" },
  { id: '5', fr: "merci", de: "danke", icon: "🙏", category: "greetings" },
  { id: '6', fr: "À bientôt !", de: "Bis bald!", icon: "👋⏰", category: "greetings" },
  { id: '7', fr: "à plus", de: "Bis später!", icon: "⏱️", category: "greetings" },
  { id: '8', fr: "Au revoir !", de: "Auf Wiedersehen!", icon: "👋🚪", category: "greetings" },
  { id: '9', fr: "Coucou !", de: "Kuckuck! / Hallo!", icon: "👋😄", category: "greetings" },
  { id: '10', fr: "Je m'appelle …", de: "Ich heiße …", icon: "📛", category: "greetings" },
  { id: '11', fr: "Tu t'appelles comment ?", de: "Wie heißt du?", icon: "🏷️", category: "greetings" },
  { id: '12', fr: "Ça va bien.", de: "Es geht mir gut.", icon: "😊👌", category: "greetings" },
  { id: '13', fr: "Bonjour les amis !", de: "Guten Tag, Freunde!", icon: "👥☀️", category: "greetings" },
  
  // Paris
  { id: '14', fr: "Paris", de: "Hauptstadt Frankreichs", icon: "🗼🇫🇷", category: "paris" },
  { id: '15', fr: "la tour Eiffel", de: "der Eiffelturm", icon: "🗼", category: "paris" },
  { id: '16', fr: "une place", de: "ein Platz", icon: "🏛️", category: "paris" },
  { id: '17', fr: "un parc", de: "ein Park", icon: "🌳", category: "paris" },
  { id: '18', fr: "une station", de: "eine Station / Haltestelle", icon: "🚉", category: "paris" },
  { id: '19', fr: "le métro", de: "die Metro / U-Bahn", icon: "🚇", category: "paris" },
  { id: '20', fr: "une rue", de: "eine Straße", icon: "🛣️", category: "paris" },
  { id: '21', fr: "un café", de: "ein Café", icon: "☕", category: "paris" },
  { id: '22', fr: "un quartier", de: "ein Stadtviertel", icon: "🏘️", category: "paris" },
  
  // Personen
  { id: '23', fr: "maman", de: "Mama / Mutti", icon: "👩‍👦", category: "people" },
  { id: '24', fr: "papa", de: "Papa", icon: "👨‍👦", category: "people" },
  { id: '25', fr: "madame", de: "Frau …", icon: "👩", category: "people" },
  { id: '26', fr: "un monsieur", de: "ein Herr / ein Mann", icon: "🤵", category: "people" },
  { id: '27', fr: "un ami / une amie", de: "ein Freund / eine Freundin", icon: "👫", category: "people" },
  { id: '28', fr: "un copain / une copine", de: "ein Freund / eine Freundin", icon: "👫💬", category: "people" },
  { id: '29', fr: "un voisin / une voisine", de: "ein Nachbar / eine Nachbarin", icon: "🏘️👋", category: "people" },
  { id: '30', fr: "une dame", de: "eine Dame / eine Frau", icon: "👗👩", category: "people" },
  { id: '31', fr: "une fille", de: "ein Mädchen / eine Tochter", icon: "👧", category: "people" },
  { id: '32', fr: "un garçon", de: "ein Junge", icon: "👦", category: "people" },
  { id: '33', fr: "un frère", de: "ein Bruder", icon: "👦👦", category: "people" },
  { id: '34', fr: "une sœur", de: "eine Schwester", icon: "👧👧", category: "people" },
  { id: '35', fr: "mamie", de: "Omi", icon: "👵❤️", category: "people" },
  
  // Verschiedenes
  { id: '36', fr: "moi", de: "ich (betont)", icon: "👆", category: "misc" },
  { id: '37', fr: "toi", de: "du (betont)", icon: "👇", category: "misc" },
  { id: '38', fr: "c'est", de: "das ist", icon: "👉", category: "misc" },
  { id: '39', fr: "et", de: "und", icon: "➕", category: "misc" },
  { id: '40', fr: "comment", de: "wie (Frage)", icon: "❓", category: "misc" },
  { id: '41', fr: "un bisou", de: "ein Küsschen", icon: "💋", category: "misc" },
  { id: '42', fr: "oui", de: "ja", icon: "✅", category: "misc" },
  { id: '43', fr: "non", de: "nein", icon: "❌", category: "misc" },
  { id: '44', fr: "bien", de: "gut", icon: "👍", category: "misc" },
  { id: '45', fr: "voilà", de: "da ist / das ist", icon: "👀", category: "misc" },
  { id: '46', fr: "cool", de: "cool", icon: "😎", category: "misc" },
  { id: '47', fr: "Où est … ?", de: "Wo ist …?", icon: "📍❓", category: "misc" },
  { id: '48', fr: "on est", de: "man ist / wir sind", icon: "👥", category: "misc" },
  { id: '49', fr: "là", de: "da / dort", icon: "📍", category: "misc" },
  { id: '50', fr: "attention !", de: "Achtung! / Vorsicht!", icon: "⚠️", category: "misc" },
  { id: '51', fr: "Pardon.", de: "Verzeihung / Entschuldigung", icon: "🙇", category: "misc" },
  { id: '52', fr: "je suis", de: "ich bin", icon: "🙋", category: "misc" },
  { id: '53', fr: "tu es", de: "du bist", icon: "👉😊", category: "misc" },
  { id: '54', fr: "il est", de: "er ist", icon: "👦✅", category: "misc" },
  { id: '55', fr: "il", de: "er", icon: "♂️", category: "misc" },
  { id: '56', fr: "elle", de: "sie", icon: "♀️", category: "misc" },
  { id: '57', fr: "de / d'", de: "aus / von", icon: "🏠➡️", category: "misc" },
  { id: '58', fr: "un chat", de: "eine Katze", icon: "🐱", category: "misc" },
  { id: '59', fr: "sympa", de: "nett / toll", icon: "😊👍", category: "misc" },
  { id: '60', fr: "On fait un tour ?", de: "Drehen wir eine Runde?", icon: "🚶‍♀️⭕", category: "misc" },
  { id: '61', fr: "Viens !", de: "Komm!", icon: "👉🚶", category: "misc" },
  { id: '62', fr: "d'accord", de: "einverstanden / o.k.", icon: "✅👌", category: "misc" },
  { id: '63', fr: "Regarde !", de: "Schau!", icon: "👀👉", category: "misc" },
  { id: '64', fr: "ici", de: "hier / hierher", icon: "📍👇", category: "misc" },
  { id: '65', fr: "une question", de: "eine Frage", icon: "❓💬", category: "misc" },
  { id: '66', fr: "Allez !", de: "Los!", icon: "🏃‍♂️💨", category: "misc" },
  { id: '67', fr: "un perroquet", de: "ein Papagei", icon: "🦜", category: "misc" },
  { id: '68', fr: "être", de: "sein", icon: "🧍", category: "misc" },
  { id: '69', fr: "avec", de: "mit", icon: "🤝", category: "misc" },
  { id: '70', fr: "dans", de: "in", icon: "📦➡️", category: "misc" },
  { id: '71', fr: "Tiens !", de: "Sieh mal da!", icon: "👀❗", category: "misc" },
  { id: '72', fr: "C'est quoi, ça ?", de: "Was ist das?", icon: "❓🤔", category: "misc" },
  { id: '73', fr: "ça", de: "das", icon: "👉📦", category: "misc" },
  { id: '74', fr: "un portable", de: "ein Handy", icon: "📱", category: "misc" },
  { id: '75', fr: "mais", de: "aber", icon: "🔄", category: "misc" },
  { id: '76', fr: "C'est qui ?", de: "Wer ist das?", icon: "👤❓", category: "misc" },
  { id: '77', fr: "super", de: "toll / super", icon: "⭐🎉", category: "misc" },
  { id: '78', fr: "J'ai douze ans.", de: "Ich bin zwölf.", icon: "🎂1️⃣2️⃣", category: "misc" },
  { id: '79', fr: "aussi", de: "auch", icon: "➕👍", category: "misc" },
  { id: '80', fr: "alors", de: "nun / jetzt / dann", icon: "⏰💭", category: "misc" },
  { id: '81', fr: "déjà", de: "schon", icon: "✅⏰", category: "misc" },
  { id: '82', fr: "pour", de: "für", icon: "🎁", category: "misc" },
  { id: '83', fr: "ce sont", de: "das sind", icon: "👥👉", category: "misc" },
  { id: '84', fr: "une réponse", de: "eine Antwort", icon: "💬✅", category: "misc" },
];

export const categories = [
  { id: 'all', label: 'Alle', count: vocabulary.length },
  { id: 'greetings', label: 'Begrüßungen', count: vocabulary.filter(v => v.category === 'greetings').length },
  { id: 'paris', label: 'Paris', count: vocabulary.filter(v => v.category === 'paris').length },
  { id: 'people', label: 'Personen', count: vocabulary.filter(v => v.category === 'people').length },
  { id: 'misc', label: 'Verschiedenes', count: vocabulary.filter(v => v.category === 'misc').length },
];

export function getVocabByCategory(category: string): Vocab[] {
  if (category === 'all') return vocabulary;
  return vocabulary.filter(v => v.category === category);
}

export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
