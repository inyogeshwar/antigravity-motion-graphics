// heygen.mjs - HeyGen Voice Turbo Free Integration ($0 / million chars)
// Model: heygen-voice-1-turbo-free
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';

/**
 * Retrieve HeyGen API Key from environment or .env file
 */
export function getHeyGenApiKey() {
  let apiKey = process.env.HEYGEN_API_KEY;
  if (!apiKey) {
    try {
      const env = readFileSync('.env', 'utf8');
      const match = env.match(/HEYGEN_API_KEY=(.*)/);
      if (match) apiKey = match[1].trim();
    } catch {
      // .env file missing or inaccessible
    }
  }
  return apiKey || null;
}

// Curated Top HeyGen Voice Presets
export const HEYGEN_VOICES = {
  // Turbo Public Voices
  mirror: 'ZtwrVl7jvZujJKV1mEBC',     // Clear modern narrative male/neutral
  sofia: 'zQDTlelC5IkNZLUKANwx',      // Sofia - Expressive female
  lisa: 'ZkDLMKbxPeseUTd14irT',       // Lisa - Confident female
  jessica: 'Ze8fupiLniS1UqRFm0Ny',    // Jessica - Professional female
  honey: 'zdZu8wRgXFTdMC1Q8iYQ',      // Honey - Warm presenter
  coleridge: 'Yy3xSIdKtprBvGvX4ZBJ',  // Coleridge - Authoritative male
  // Hindi Voices
  kumar: 'c266a65389d640fea4787b946e3ac22e',   // Crisp Kumar (Hindi Male)
  viraj: 'd52e60fb493f4cb8a4acfff249c93556',   // Viraj (Hindi Male)
  manav: 'ab2e33a9785247eca6af6b68e9c41251',   // Manav (Hindi Male)
};

/**
 * Generate AI Speech using HeyGen Voice Turbo Free
 * 
 * @param {Object} options
 * @param {string} options.text - Transcript text to speak
 * @param {string} [options.voice='mirror'] - Preset name or custom voice_id
 * @param {string} [options.outFile='out/heygen_voice.wav'] - Output audio file path
 * @param {string} [options.model='heygen-voice-1-turbo-free'] - Turbo free model
 * @param {string} [options.apiKey] - Optional explicit API key override
 */
export async function generateHeyGenSpeech({
  text,
  voice = 'mirror',
  outFile = 'out/heygen_voice.wav',
  model = 'heygen-voice-1-turbo-free',
  apiKey = getHeyGenApiKey()
}) {
  if (!apiKey) {
    throw new Error('[HeyGen Error] HEYGEN_API_KEY not found in process.env, .env, or --api-key argument');
  }

  mkdirSync(path.dirname(outFile), { recursive: true });

  const voiceId = HEYGEN_VOICES[voice] || voice;
  const payload = {
    model: model,
    text: text,
    voice_id: voiceId
  };

  const res = await fetch('https://api.heygen.com/v1/voice/generate', {
    method: 'POST',
    headers: {
      'X-Api-Key': apiKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`HeyGen API Error (${res.status}): ${errText}`);
  }

  const data = await res.json();
  const audioUrl = data?.data?.url || data?.url;
  if (!audioUrl) {
    throw new Error(`[HeyGen Error] No audio URL returned: ${JSON.stringify(data)}`);
  }

  // Download the generated audio stream
  const audioRes = await fetch(audioUrl);
  if (!audioRes.ok) {
    throw new Error(`Failed to download audio from ${audioUrl}: ${audioRes.status}`);
  }

  const arrayBuffer = await audioRes.arrayBuffer();
  writeFileSync(outFile, Buffer.from(arrayBuffer));
  console.log(`[HeyGen] Generated speech (${(arrayBuffer.byteLength / 1024).toFixed(1)} KB) -> ${outFile}`);
  return outFile;
}

// CLI Execution support
if (process.argv[1] && process.argv[1].endsWith('heygen.mjs')) {
  const getArg = (key, def) => {
    const idx = process.argv.indexOf('--' + key);
    return idx > -1 && process.argv[idx + 1] ? process.argv[idx + 1] : def;
  };

  if (process.argv.includes('--help') || process.argv.includes('-h')) {
    console.log(`
Antigravity Motion Graphics - HeyGen Voice Turbo Free CLI

Usage:
  node heygen.mjs [options]

Options:
  --text <string>     Speech text transcript
  --voice <name|id>   Voice key (${Object.keys(HEYGEN_VOICES).join(', ')}) or custom/cloned voice ID
  --model <string>    Model ID (default: heygen-voice-1-turbo-free)
  --api-key <key>     HeyGen API key (overrides HEYGEN_API_KEY environment variable)
  --out <path>        Output audio path (default: out/heygen_voice.wav)
`);
    process.exit(0);
  }

  const text = getArg('text', 'Tired of Instagram shadowbans? ViraloKit uses 100% official Meta APIs for automated growth.');
  const voice = getArg('voice', 'mirror');
  const model = getArg('model', 'heygen-voice-1-turbo-free');
  const apiKey = getArg('api-key', getHeyGenApiKey());
  const out = getArg('out', 'out/heygen_voice.wav');

  try {
    await generateHeyGenSpeech({ text, voice, model, apiKey, outFile: out });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
