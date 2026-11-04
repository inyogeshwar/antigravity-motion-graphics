#!/usr/bin/env python3
"""Find when each word is said, so effects can land on the right word.

usage: python words.py input.mp4            -> prints "12.34  word" lines and saves input.words.json
Uses faster-whisper (installed into the skill's .venv on first run). On a Mac with mlx-whisper installed, that is used instead.
"""
import json, os, subprocess, sys

src = sys.argv[1]
out = os.path.splitext(src)[0] + '.words.json'
words = []
try:
    import mlx_whisper
    r = mlx_whisper.transcribe(src, path_or_hf_repo='mlx-community/whisper-large-v3-turbo', word_timestamps=True)
    words = [{'w': w['word'].strip(), 's': round(w['start'], 2), 'e': round(w['end'], 2)} for seg in r['segments'] for w in seg.get('words', [])]
except ImportError:
    try:
        import av
        _orig_av_open = av.open
        def _safe_av_open(*args, **kwargs):
            kwargs.pop('metadata_errors', None)
            return _orig_av_open(*args, **kwargs)
        av.open = _safe_av_open
    except Exception:
        pass

    try:
        from faster_whisper import WhisperModel
    except ImportError:
        print('Installing the transcriber (one time, about 1 minute)...', flush=True)
        subprocess.run([sys.executable, '-m', 'pip', 'install', '-q', 'faster-whisper'], check=True)
        from faster_whisper import WhisperModel

    local_whisper = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', '..', '..', 'models', 'whisper'))
    if os.path.exists(os.path.join(local_whisper, 'model.bin')):
        target_model = local_whisper
    else:
        target_model = os.environ.get('WHISPER_MODEL', 'base')
    model = WhisperModel(target_model, device='cpu', compute_type='int8')
    segs, _ = model.transcribe(src, word_timestamps=True, vad_filter=True)
    words = [{'w': w.word.strip(), 's': round(w.start, 2), 'e': round(w.end, 2)} for s in segs for w in (s.words or [])]

json.dump(words, open(out, 'w', encoding='utf-8'), indent=0, ensure_ascii=False)
for w in words: print(f"{w['s']:7.2f}  {w['w']}")
print(f'\nSaved {len(words)} words to {out}')
