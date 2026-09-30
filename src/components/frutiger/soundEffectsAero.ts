// Web Audio API procedural sound effects for Frutiger Aero & MSN Messenger 8.5
// Zero external assets required — 100% reliable, zero latency.

let audioCtx: AudioContext | null = null;
let isMuted = false;

export const initAeroAudio = () => {
  if (!audioCtx && typeof window !== 'undefined') {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

export const setAeroMuted = (muted: boolean) => {
  isMuted = muted;
};

export const getAeroMuted = () => isMuted;

// MSN Messenger Nudge / Wizz Sound (*Vibration + Clatter chime*)
export const playMsnNudgeSound = () => {
  if (isMuted) return;
  try {
    const ctx = initAeroAudio();
    if (!ctx) return;

    const now = ctx.currentTime;

    // 1. Low frequency rumble / vibration buzz (60Hz -> 45Hz mod)
    const subOsc = ctx.createOscillator();
    const subGain = ctx.createGain();
    subOsc.type = 'sawtooth';
    subOsc.frequency.setValueAtTime(80, now);
    subOsc.frequency.linearRampToValueAtTime(45, now + 0.35);

    // Rapid amplitude stutter simulating physical vibration
    subGain.gain.setValueAtTime(0.2, now);
    for (let i = 0; i < 7; i++) {
      const t = now + i * 0.045;
      subGain.gain.setValueAtTime(0.22, t);
      subGain.gain.setValueAtTime(0.04, t + 0.025);
    }
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

    subOsc.connect(subGain);
    subGain.connect(ctx.destination);
    subOsc.start(now);
    subOsc.stop(now + 0.38);

    // 2. High metallic clatter chime (signature Wizz sound)
    const chimePitches = [784, 987.77, 1174.66, 1567.98]; // G5, B5, D6, G6
    chimePitches.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.03);

      gain.gain.setValueAtTime(0.001, now + idx * 0.03);
      gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.03 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4 + idx * 0.03);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.03);
      osc.stop(now + 0.45);
    });
  } catch {
    // Autoplay policy or unsupported
  }
};

// MSN Messenger Received Message Sound (Classic cheerful two-tone chime)
export const playMsnReceiveMessage = () => {
  if (isMuted) return;
  try {
    const ctx = initAeroAudio();
    if (!ctx) return;

    const now = ctx.currentTime;
    // Classic MSN ding: note 1 (E6: 1318.51Hz) -> note 2 (B6: 1975.53Hz)
    const notes = [
      { freq: 1318.51, delay: 0.0, duration: 0.18 },
      { freq: 1975.53, delay: 0.12, duration: 0.32 }
    ];

    notes.forEach(({ freq, delay, duration }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + delay);

      gain.gain.setValueAtTime(0.001, now + delay);
      gain.gain.linearRampToValueAtTime(0.14, now + delay + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + delay);
      osc.stop(now + delay + duration);
    });
  } catch {
    // Ignore
  }
};

// Water Bubble Pop (sine pitch drop with gentle resonance)
export const playBubblePop = () => {
  if (isMuted) return;
  try {
    const ctx = initAeroAudio();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(450 + Math.random() * 200, now);
    osc.frequency.exponentialRampToValueAtTime(950 + Math.random() * 200, now + 0.04);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.09);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.09);
  } catch {
    // Ignore
  }
};

// Aero Glass Click / Water Drop Tap
export const playAeroClick = () => {
  if (isMuted) return;
  try {
    const ctx = initAeroAudio();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1400, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.03);

    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.035);
  } catch {
    // Ignore
  }
};
