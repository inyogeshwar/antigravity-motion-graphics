# AI Voice Engines & Custom Models (BYOK)

Antigravity Motion Studio features a **universal pluggable voice pipeline** (`voice.mjs`). It is designed for multi-user, multi-tenant, and custom creator workflows where:
1. **Custom Voice Models / Clones:** A creator can use their own custom-trained or instant cloned voice ID.
2. **Bring Your Own Key (BYOK):** Any user can supply their own API key dynamically per command or render pass without altering global environment files.
3. **Multi-Provider Support:** Seamlessly switch between Cartesia AI, HeyGen Voice Turbo, OpenAI TTS, and ElevenLabs.

---

## 1. Quick Universal Command

Run any voice synthesis with dynamic provider, voice ID, and API key:

```bash
node voice.mjs --provider cartesia \
  --voice <your_custom_voice_id> \
  --model sonic-3.6 \
  --api-key <your_api_key> \
  --text "Hello, this is my custom cloned voice!" \
  --out out/custom_voice.wav
```

---

## 2. Using Custom Voice Models & Clones

### Cartesia AI (`--provider cartesia` or `node cartesia.mjs`)
- **Default Model:** `sonic-3.6` (Fine-best flagship multilingual model)
- **Custom Model:** Pass `--model <custom_model_id>` if using fine-tuned or domain-specific weights.
- **Custom Cloned Voice:** In Cartesia Console, clone or create a voice and copy its UUID (e.g., `a1b2c3d4-e5f6-...`). Pass it directly to `--voice`:
  ```bash
  node cartesia.mjs --voice 791d5162-d5eb-40f0-8189-f19db44611d8 --api-key sk_car_... --text "Custom Hindi narration"
  ```

### HeyGen AI (`--provider heygen` or `node heygen.mjs`)
- **Default Model:** `heygen-voice-1-turbo-free` ($0 per million chars free tier)
- **Custom Cloned Voice:** In HeyGen Studio, find your Instant Voice Clone ID or Studio Avatar voice ID. Pass it directly to `--voice`:
  ```bash
  node heygen.mjs --voice <your_heygen_cloned_voice_id> --api-key sk_V2_... --text "HeyGen cloned voice"
  ```

### OpenAI TTS (`--provider openai`)
- **Models:** `tts-1`, `tts-1-hd`
- **Voices:** `alloy`, `echo`, `fable`, `onyx`, `nova`, `shimmer`
- **Usage:**
  ```bash
  node voice.mjs --provider openai --voice nova --model tts-1-hd --api-key sk-... --text "Studio intro"
  ```

### ElevenLabs (`--provider elevenlabs`)
- **Models:** `eleven_multilingual_v2`, `eleven_turbo_v2_5`
- **Custom Voice:** Paste your Voice ID from VoiceLab:
  ```bash
  node voice.mjs --provider elevenlabs --voice <voice_id> --api-key <eleven_key> --text "Studio intro"
  ```

---

## 3. Dynamic API Key Precedence

The engine resolves API keys in the following priority order:
1. **Command line argument / Function parameter:** `--api-key <key>` or `apiKey: '...'` (Highest precedence, perfect for BYOK & multi-tenant setups).
2. **Environment variable:** `process.env.CARTESIA_API_KEY`, `process.env.HEYGEN_API_KEY`, etc.
3. **Local `.env` file:** Read securely from `.env` in the project root.
