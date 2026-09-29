// Web Audio API Synthesizer for Steamy Frosted Glass Experience
// Realistic water droplet impacts, gentle steam hiss, and glass wipe friction.
// 100% synthesized procedural audio — zero external assets required.

let audioCtx: AudioContext | null = null;
let isMuted = false;

export const initAudioContext = (): AudioContext | null => {
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

export const setSteamyMuted = (muted: boolean) => {
  isMuted = muted;
};

export const isSteamyMuted = () => isMuted;

/**
 * Crystalline water droplet sound (sweet sine drop with resonance)
 */
export const playDropletSound = (pitchMultiplier = 1) => {
  if (isMuted) return;
  try {
    const ctx = initAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    const now = ctx.currentTime;
    const baseFreq = (1400 + Math.random() * 400) * pitchMultiplier;

    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(350 * pitchMultiplier, now + 0.08);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.09);
  } catch {
    // Ignore audio failures if browser blocks autoplay
  }
};

/**
 * Gentle warm steam hiss / vapor exhale
 */
export const playSteamSound = () => {
  if (isMuted) return;
  try {
    const ctx = initAudioContext();
    if (!ctx) return;

    const bufferSize = ctx.sampleRate * 0.25; // 250ms of filtered noise
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    // Filter to sound like soft warm bath vapor
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1800, ctx.currentTime);
    filter.Q.setValueAtTime(1.2, ctx.currentTime);

    const gain = ctx.createGain();
    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.04, now + 0.06);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.24);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(now);
    noise.stop(now + 0.25);
  } catch {
    // Ignore audio error
  }
};

/**
 * Tactile glass finger wipe friction squeak
 */
export const playWipeSound = () => {
  if (isMuted) return;
  try {
    const ctx = initAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    const now = ctx.currentTime;
    const startFreq = 500 + Math.random() * 200;
    const endFreq = 750 + Math.random() * 250;

    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.linearRampToValueAtTime(endFreq, now + 0.04);

    gain.gain.setValueAtTime(0.025, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  } catch {
    // Ignore audio error
  }
};
