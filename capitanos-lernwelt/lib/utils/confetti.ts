import confetti from 'canvas-confetti';

export function fireSuccessConfetti() {
  const defaults = {
    spread: 360,
    ticks: 70,
    gravity: 0.8,
    decay: 0.94,
    startVelocity: 20,
    colors: ['#34C759', '#4ADE80', '#22C55E', '#16A34A', '#FFD700'],
  };

  confetti({
    ...defaults,
    particleCount: 50,
    scalar: 1.2,
    shapes: ['star'],
  });

  confetti({
    ...defaults,
    particleCount: 30,
    scalar: 0.8,
    shapes: ['circle'],
  });
}

export function fireHulkSmash() {
  const end = Date.now() + 500;
  const colors = ['#34C759', '#22C55E', '#4ADE80'];

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

export function firePerfectScore() {
  const duration = 1500;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 80,
      origin: { x: 0, y: 0.6 },
      colors: ['#FFD700', '#FFA500', '#34C759'],
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 80,
      origin: { x: 1, y: 0.6 },
      colors: ['#FFD700', '#FFA500', '#34C759'],
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
