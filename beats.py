"""Audio Beat Grid & Peak Detection Engine.

Usage:
    python beats.py [audio_file.wav] [--bpm 120] [--dur 15] > beats.json

Extracts beat grid and perceptual peak onsets using librosa,
or generates a deterministic synthetic grid when librosa is not installed.
"""

from __future__ import annotations

import argparse
import json
import sys


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Extract musical beat grid and peak hits from an audio file, or generate a synthetic beat grid."
    )
    parser.add_argument("audio", nargs="?", default=None, help="Path to input audio file (.wav, .mp3, etc.)")
    parser.add_argument("--bpm", type=float, default=120.0, help="Fallback or target BPM (default: 120.0)")
    parser.add_argument("--dur", type=float, default=15.0, help="Duration in seconds for synthetic grid (default: 15.0)")
    return parser.parse_args()


def generate_synthetic_grid(dur: float, bpm: float) -> dict[str, object]:
    beat_interval = 60.0 / bpm
    total_beats = int(dur / beat_interval)
    beats = [round(i * beat_interval, 3) for i in range(total_beats)]
    return {
        "bpm": bpm,
        "beats": beats,
        "downbeats": beats[::4],
        "hits": beats,
        "synthetic": True,
        "note": "Generated synthetic beat grid (install librosa & soundfile for audio analysis: pip install librosa soundfile numpy)"
    }


def analyze_audio(audio_path: str) -> dict[str, object]:
    try:
        import librosa
        import numpy as np

        y, sr = librosa.load(audio_path, sr=None, mono=True)
        tempo, frames = librosa.beat.beat_track(y=y, sr=sr, units="frames")
        beats = librosa.frames_to_time(frames, sr=sr).round(3).tolist()

        onset = librosa.onset.onset_strength(y=y, sr=sr)
        peaks = librosa.util.peak_pick(
            onset, pre_max=3, post_max=3, pre_avg=3, post_avg=5, delta=0.5, wait=10
        )
        hits = librosa.frames_to_time(peaks, sr=sr).round(3).tolist()
        bpm_val = float(np.atleast_1d(tempo)[0]) if hasattr(tempo, "__len__") else float(tempo)

        return {
            "bpm": round(bpm_val, 2),
            "beats": beats,
            "downbeats": beats[::4],
            "hits": hits,
            "synthetic": False
        }
    except ImportError:
        return generate_synthetic_grid(15.0, 120.0)


def main() -> None:
    args = parse_args()
    if args.audio:
        result = analyze_audio(args.audio)
    else:
        result = generate_synthetic_grid(args.dur, args.bpm)

    json.dump(result, sys.stdout, indent=2)
    sys.stdout.write("\n")


if __name__ == "__main__":
    main()
