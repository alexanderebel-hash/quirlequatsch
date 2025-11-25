// HULK + Minecraft + Paluten + Fußball Motivations-System für Capitano

export const hulkMessages = {
  correct: [
    "HULK SMASH! Das war RICHTIG! 💚",
    "BOOOM! Ronaldo-Tor! Volle Punktzahl! ⚽",
    "Du hast gerade +10 GEHIRN-POWER gecraftet! 🟩",
    "EPISCH! Paluten wäre mega stolz! 🎮",
    "Messi-Level erreicht! Du bist ein GENIE! 🐐",
    "HULK ist STOLZ auf dich, Capitano! 💪",
    "Achievement Unlocked: WISSENS-DIAMANT! 💎",
    "Kritischer Treffer! +100 Schadenspunkte ans Unwissen! ⚔️",
    "Das war wie ein Freistoß-Tor von Ronaldo! UNHALTBAR! ⚽",
    "LEGENDÄR! Du spielst in der Champions League des Wissens! 🏆",
  ],
  incorrect: [
    "Halb so wild! Selbst Ronaldo verschießt Elfmeter! ⚽",
    "Kein Ding! In Minecraft stirbt man auch beim ersten Creeper! 🟩",
    "Hulk sagt: RESPAWN und nochmal! Du packst das! 💚",
    "Paluten würde sagen: 'Knapp daneben ist auch vorbei, Bruder!' 🎮",
    "Kurze Pause, dann Vollgas! Wie Messi nach der Halbzeit! 🐐",
    "Das war nur das Aufwärmen! Jetzt zeig dein wahres Level! 💪",
    "Neuer Versuch = Neue Chance! Like ein Respawn in Minecraft! 🔄",
  ],
  perfect: [
    "LEGENDÄÄÄR! HULK HAT SOWAS NOCH NIE GESEHEN! 💚💚💚",
    "100%?! Das ist RONALDO + MESSI + HULK zusammen! 🏆⚽💚",
    "DU HAST DEN ENDERDRACHEN BESIEGT! MAXIMALES LEVEL! 🐉",
    "PALUTEN WÜRDE AUSRASTEN! ABSOLUT EPISCH! 🎮🔥",
    "WELTKLASSE, CAPITANO! Du bist der GOAT! 🐐👑",
    "Achievement Unlocked: KLASSENARBEIT-ZERSTÖRER! 💥",
    "Das war wie 5 Tore in 9 Minuten! HISTORISCH! ⚽⚽⚽⚽⚽",
    "HULK SMASH! Du hast die Prüfung schon bestanden! 💚💪",
  ],
  encouragement: [
    "Los geht's, Capitano! Zeit zu SMASHEN! 💚",
    "Minecraft-Modus: AKTIVIERT! Lass uns craften! 🟩",
    "Zeig der Klassenarbeit, wer der Boss ist! 🎮",
    "Ronaldo-Fokus: AN! Bereit für den Sieg? ⚽",
    "HULK glaubt an dich! Du schaffst das LOCKER! 💪",
    "Paluten würde sagen: 'Auf geht's, mein Lieber!' 🎮",
  ],
  streak: [
    "🔥 STREAK x{count}! Du bist ON FIRE wie Ronaldo!",
    "💚 {count}x richtig! HULK-COMBO aktiviert!",
    "⚽ {count}er SERIE! Champions League Material!",
    "🎮 COMBO x{count}! Speedrun-Weltrekord incoming!",
    "🟩 {count} KRITISCHE TREFFER! Minecraft-Legende!",
    "💎 {count}x Diamanten gecraftet! REICH!",
  ],
};

export function getRandomMessage(category: keyof typeof hulkMessages, count?: number): string {
  const messages = hulkMessages[category];
  const message = messages[Math.floor(Math.random() * messages.length)];
  return count !== undefined ? message.replace('{count}', String(count)) : message;
}

// XP Belohnungen
export const xpRewards = {
  questionCorrect: 10,
  questionIncorrect: 2,
  memoryPairFound: 15,
  memoryGameComplete: 50,
  sortingCorrect: 20,
  quizComplete: 30,
  perfectScore: 100,
  streakBonus: (streak: number) => Math.min(streak * 5, 50),
};
