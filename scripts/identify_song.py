"""Acoustic Audio Fingerprint & Song Identifier.

Uses shazamio to recognize any song from raw audio waveforms in < 2 seconds,
even if the file has no title, no ID3 tags, or random names like audio123.mp3.
"""

from __future__ import annotations

import asyncio
import json
import os
import sys
import warnings

# Suppress harmless async cleanup warnings
warnings.filterwarnings("ignore")


async def recognize_audio(file_path: str) -> dict[str, str | None]:
    if not os.path.exists(file_path):
        return {"title": None, "artist": None, "error": f"File not found: {file_path}"}

    try:
        from shazamio import Shazam

        shazam = Shazam()
        result = await shazam.recognize(file_path)
        track = result.get("track", {})
        title = track.get("title")
        artist = track.get("subtitle")

        # Clean session closure
        try:
            if hasattr(shazam, "client") and hasattr(shazam.client, "session") and shazam.client.session:
                await shazam.client.session.close()
        except Exception:
            pass

        if title:
            return {
                "title": title,
                "artist": artist,
                "genre": track.get("genres", {}).get("primary"),
                "isrc": track.get("isrc"),
                "source": "shazam_fingerprint"
            }
        return {"title": None, "artist": None, "source": "unrecognized"}
    except Exception as e:
        return {"title": None, "artist": None, "error": str(e)}


def main() -> None:
    if len(sys.argv) < 2:
        print(json.dumps({"title": None, "artist": None, "error": "No audio file provided"}))
        sys.exit(1)

    file_path = sys.argv[1]
    res = asyncio.run(recognize_audio(file_path))
    print(json.dumps(res, indent=2))


if __name__ == "__main__":
    main()
