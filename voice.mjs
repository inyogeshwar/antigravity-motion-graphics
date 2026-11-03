// voice.mjs - Universal Multi-Provider Voice Engine Router
// Supports: Cartesia AI, HeyGen Voice Turbo, OpenAI TTS, and ElevenLabs
// Allows custom voice models, cloned voices, and custom per-call API keys (BYOK)

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { generateSpeech as generateCartesia, VOICES as CARTESIA_VOICES, getCartesiaApiKey } from './cartesia.mjs';
import { generateHeyGenSpeech, HEYGEN_VOICES, getHeyGenApiKey } from './heygen.mjs';

function getEnvKey(name) {
  if (process.env[name]) return process.env[name];
  try {
    const env = readFileSync('.env', 'utf8');
    const match = env.match(new RegExp(`${name}=(.*)`));
    if (match) return match[1].trim();
  } catch {}
  return null;
}

/**
 * Generate speech with OpenAI TTS
 */
async function generateOpenAISpeech({ text, voice = 'alloy', model = 'tts-1', outFile = 'out/openai_voice.mp3', speed = 1.0, apiKey }) {
  const key = apiKey || getEnvKey('OPENAI_API_KEY');
  if (!key) throw new Error('[OpenAI Error] OPENAI_API_KEY not found in arguments or environment');

  mkdirSync(path.dirname(outFile), { recursive: true });
  const res = await fetch('https://api.openai.com/v1/audio/speech', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${key}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model,
      input: text,
      voice,
      speed
    })
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`OpenAI TTS Error (${res.status}): ${err}`);
  }

  const arrayBuffer = await res.arrayBuffer();
  writeFileSync(outFile, Buffer.from(arrayBuffer));
  console.log(`[OpenAI TTS] Generated speech (${(arrayBuffer.byteLength / 1024).toFixed(1)} KB) -> ${outFile}`);
  return outFile;
}

/**
 * Generate speech with ElevenLabs TTS
 */
async function generateElevenLabsSpeech({ text, voice = '21m00Tcm4TlvDq8ikWAM', model = 'eleven_multilingual_v2', outFile = 'out/eleven_voice.mp3', apiKey }) {
  const key = apiKey || getEnvKey('ELEVENLABS_API_KEY');
  if (!key) throw new Error('[ElevenLabs Error] ELEVENLABS_API_KEY not found in arguments or environment');

  mkdirSync(path.dirname(outFile), { recursive: true });
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice}`, {
    method: 'POST',
    headers: {
      'xi-api-key': key,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text,
      model_id: model,
      voice_settings: { stability: 0.5, similarity_boost: 0.75 }
    })
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`ElevenLabs Error (${res.status}): ${err}`);
  }

  const arrayBuffer = await res.arrayBuffer();
  writeFileSync(outFile, Buffer.from(arrayBuffer));
  console.log(`[ElevenLabs] Generated speech (${(arrayBuffer.byteLength / 1024).toFixed(1)} KB) -> ${outFile}`);
  return outFile;
}

/**
 * Universal Unified Voice Generator
 * 
 * @param {Object} options
 * @param {string} options.text - Speech text transcript
 * @param {'cartesia'|'heygen'|'openai'|'elevenlabs'} [options.provider='cartesia'] - TTS Provider
 * @param {string} [options.voice] - Preset name or custom voice UUID / clone ID
 * @param {string} [options.model] - Custom or fine-tuned model ID
 * @param {string} [options.apiKey] - Custom user API key (BYOK)
 * @param {string} [options.language='en'] - 'en' or 'hi'
 * @param {string} [options.outFile='out/voice.wav'] - Output audio file path
 * @param {number} [options.speed=1.0] - Speech playback speed multiplier
 */
export async function generateUniversalSpeech({
  text,
  provider = 'cartesia',
  voice,
  model,
  apiKey,
  language = 'en',
  outFile = 'out/voice.wav',
  speed = 1.0
}) {
  switch (provider.toLowerCase()) {
    case 'cartesia':
      return generateCartesia({
        text,
        voice: voice || 'jeremy',
        model: model || 'sonic-3.6',
        language,
        outFile,
        speed,
        apiKey
      });

    case 'heygen':
      return generateHeyGenSpeech({
        text,
        voice: voice || 'mirror',
        model: model || 'heygen-voice-1-turbo-free',
        outFile,
        apiKey
      });

    case 'openai':
      return generateOpenAISpeech({
        text,
        voice: voice || 'alloy',
        model: model || 'tts-1',
        outFile,
        speed,
        apiKey
      });

    case 'elevenlabs':
      return generateElevenLabsSpeech({
        text,
        voice: voice || '21m00Tcm4TlvDq8ikWAM',
        model: model || 'eleven_multilingual_v2',
        outFile,
        apiKey
      });

    default:
      throw new Error(`[Voice Error] Unknown provider "${provider}". Supported: cartesia, heygen, openai, elevenlabs`);
  }
}

// CLI Execution support
if (process.argv[1] && process.argv[1].endsWith('voice.mjs')) {
  const getArg = (key, def) => {
    const idx = process.argv.indexOf('--' + key);
    return idx > -1 && process.argv[idx + 1] ? process.argv[idx + 1] : def;
  };

  if (process.argv.includes('--help') || process.argv.includes('-h')) {
    console.log(`
Antigravity Motion Graphics - Universal Voice Router (BYOK & Custom Models)

Usage:
  node voice.mjs [options]

Options:
  --provider <name>   TTS provider: cartesia, heygen, openai, elevenlabs (default: cartesia)
  --text <string>     Text transcript to synthesize
  --voice <id|name>   Voice preset or custom/cloned voice ID
  --model <string>    Model ID (e.g. sonic-3.6, heygen-voice-1-turbo-free, tts-1, eleven_multilingual_v2)
  --api-key <key>     Custom user API key (overrides environment variable)
  --lang <en|hi>      Language code (default: en)
  --out <path>        Output file path (default: out/voice.wav)
  --speed <number>    Speed multiplier (default: 1.0)

Examples:
  # Use Cartesia with custom cloned voice and custom key:
  node voice.mjs --provider cartesia --voice <custom_voice_uuid> --api-key sk_car_... --text "Hello"

  # Use HeyGen Turbo Free with custom avatar voice:
  node voice.mjs --provider heygen --voice <custom_voice_id> --api-key sk_V2_... --text "Hello"
`);
    process.exit(0);
  }

  const provider = getArg('provider', 'cartesia');
  const text = getArg('text', 'Welcome to Antigravity Motion Studio.');
  const voice = getArg('voice', undefined);
  const model = getArg('model', undefined);
  const apiKey = getArg('api-key', undefined);
  const lang = getArg('lang', 'en');
  const out = getArg('out', 'out/voice.wav');
  const speed = parseFloat(getArg('speed', '1.0'));

  try {
    await generateUniversalSpeech({ provider, text, voice, model, apiKey, language: lang, outFile: out, speed });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
