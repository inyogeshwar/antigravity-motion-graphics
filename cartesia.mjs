// cartesia.mjs - Cartesia AI TTS Integration for Antigravity Motion Studio
// Uses sonic-3.6 (Official Latest Fine-Best Flagship Model)
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';

/**
 * Retrieve Cartesia API Key from environment or .env file
 */
export function getCartesiaApiKey() {
  let apiKey = process.env.CARTESIA_API_KEY;
  if (!apiKey) {
    try {
      const env = readFileSync('.env', 'utf8');
      const match = env.match(/CARTESIA_API_KEY=(.*)/);
      if (match) apiKey = match[1].trim();
    } catch {
      // .env file missing or inaccessible
    }
  }
  return apiKey || null;
}

// Curated Top Voice Presets
export const VOICES = {
  // English Promo & Commercials
  jeremy: '6cb8801d-259a-4bdc-978f-b45808d58cd3',   // Energetic Promoter (High Energy / Ads)
  edward: '5fb68a42-0ed7-46fa-8a8f-ad4b332fbf6f',   // Persuasive Promoter (Confident / Sales)
  lauren: 'a33f7a4c-100f-41cf-a1fd-5822e8fc253f',   // Lively Narrator (Female / Creative)
  quentin: '5568a7df-e5ab-4442-9fae-2e9ba1b15ad8',  // Refined Corporate Narrator
  // Hindi & Hinglish
  ishan: 'fd2ada67-c2d9-4afe-b474-6386b87d8fc3',    // Hinglish Ally (Conversational / Commercial)
  arushi: '95d51f79-c397-46f9-b49a-23763d3eaa2d',   // Hinglish Female (Bilingual Creator)
  ayush: '791d5162-d5eb-40f0-8189-f19db44611d8',    // Confident Young Indian Male
  kavya: 'ce45ddca-5f4b-4047-ada3-3fce2bc78acd'     // Clear Briefing (Female)
};

/**
 * Generate Voice Speech with Cartesia sonic-3.6
 * 
 * @param {Object} options
 * @param {string} options.text - Transcript text to speak
 * @param {string} [options.voice='jeremy'] - Voice key or Cartesia Voice UUID
 * @param {string} [options.language='en'] - 'en' or 'hi'
 * @param {string} [options.outFile='out/voice.wav'] - Output audio file path
 * @param {number} [options.speed=1.0] - Speech speed multiplier
 * @param {string} [options.apiKey] - Optional explicit API key override
 */
export async function generateSpeech({
  text,
  voice = 'jeremy',
  language = 'en',
  outFile = 'out/voice.wav',
  speed = 1.0,
  model = 'sonic-3.6',
  apiKey = getCartesiaApiKey()
}) {
  if (!apiKey) {
    throw new Error('[Cartesia Error] CARTESIA_API_KEY not found in process.env, .env, or --api-key argument');
  }

  mkdirSync(path.dirname(outFile), { recursive: true });

  const voiceId = VOICES[voice] || voice;
  const payload = {
    model_id: model,
    transcript: text,
    voice: {
      mode: 'id',
      id: voiceId
    },
    output_format: {
      container: 'wav',
      encoding: 'pcm_f32le',
      sample_rate: 44100
    },
    language: language
  };

  if (speed !== 1.0) {
    payload.generation_config = { speed };
  }

  const res = await fetch('https://api.cartesia.ai/tts/bytes', {
    method: 'POST',
    headers: {
      'X-API-Key': apiKey,
      'Cartesia-Version': '2024-06-10',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Cartesia API Error (${res.status}): ${errText}`);
  }

  const arrayBuffer = await res.arrayBuffer();
  writeFileSync(outFile, Buffer.from(arrayBuffer));
  console.log(`[Cartesia] Generated speech (${(arrayBuffer.byteLength / 1024).toFixed(1)} KB) -> ${outFile}`);
  return outFile;
}

// CLI Execution support
if (process.argv[1] && process.argv[1].endsWith('cartesia.mjs')) {
  const getArg = (key, def) => {
    const idx = process.argv.indexOf('--' + key);
    return idx > -1 && process.argv[idx + 1] ? process.argv[idx + 1] : def;
  };

  if (process.argv.includes('--help') || process.argv.includes('-h')) {
    console.log(`
Antigravity Motion Graphics - Cartesia TTS CLI

Usage:
  node cartesia.mjs [options]

Options:
  --text <string>     Speech text transcript
  --voice <name|id>   Voice preset (${Object.keys(VOICES).join(', ')}) or custom voice UUID
  --model <string>    Model ID (default: sonic-3.6, or fine-tuned custom model)
  --api-key <key>     Cartesia API key (overrides CARTESIA_API_KEY environment variable)
  --lang <en|hi>      Language code (default: en)
  --out <path>        Output WAV path (default: out/voice.wav)
  --speed <number>    Speech rate multiplier (default: 1.0)
`);
    process.exit(0);
  }

  const text = getArg('text', 'Tired of Instagram shadowbans? Meet ViraloKit, the professional creator studio powered by official Meta Graph API.');
  const voice = getArg('voice', 'jeremy');
  const model = getArg('model', 'sonic-3.6');
  const apiKey = getArg('api-key', getCartesiaApiKey());
  const lang = getArg('lang', 'en');
  const out = getArg('out', 'out/voice.wav');
  const speed = parseFloat(getArg('speed', '1.0'));

  try {
    await generateSpeech({ text, voice, model, apiKey, language: lang, outFile: out, speed });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
