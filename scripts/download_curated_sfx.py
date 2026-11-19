import urllib.request
import subprocess
import os
import json
from pathlib import Path

SFX_DOWNLOADS = [
    # POP
    {
        "id": "bubble-pop",
        "mixkit_id": "2925",
        "category": "pop",
        "tags": ["pop", "bubble", "sticker", "avatar", "emoji"],
        "originalName": "Soap bubble sound.mp3",
        "max_dur": 1.0
    },
    {
        "id": "pop-click",
        "mixkit_id": "2364",
        "category": "pop",
        "tags": ["pop", "click", "punchy", "badge", "button"],
        "originalName": "Hard pop click.mp3",
        "max_dur": 1.0
    },
    # MARKER / DRAWING
    {
        "id": "marker-swipe",
        "mixkit_id": "2998",
        "category": "marker",
        "tags": ["marker", "highlight", "drawing", "line", "underline"],
        "originalName": "Pen marker line.mp3",
        "max_dur": 1.2
    },
    {
        "id": "pencil-scribble",
        "mixkit_id": "2376",
        "category": "marker",
        "tags": ["pencil", "scribble", "doodle", "sketch", "note"],
        "originalName": "Short pencil writing.mp3",
        "max_dur": 1.2
    },
    # PAPER
    {
        "id": "paper-slide",
        "mixkit_id": "1530",
        "category": "paper",
        "tags": ["paper", "slide", "document", "contract", "receipt"],
        "originalName": "Paper slide.mp3",
        "max_dur": 1.0
    },
    {
        "id": "page-turn",
        "mixkit_id": "1104",
        "category": "paper",
        "tags": ["paper", "page", "turn", "flip", "book"],
        "originalName": "Page turn single.mp3",
        "max_dur": 1.0
    },
    # IMPACT / BASS
    {
        "id": "sub-bass-drop",
        "mixkit_id": "2300",
        "category": "impact",
        "tags": ["bass", "sub", "drop", "hook", "rumble"],
        "originalName": "Knocking sub bass.mp3",
        "max_dur": 2.0
    },
    {
        "id": "short-bass-hit",
        "mixkit_id": "2299",
        "category": "impact",
        "tags": ["bass", "hit", "thump", "punch", "drop"],
        "originalName": "Short bass hit.mp3",
        "max_dur": 1.5
    },
    {
        "id": "cinematic-impact-heavy",
        "mixkit_id": "788",
        "category": "impact",
        "tags": ["cinematic", "impact", "trailer", "shock", "reveal"],
        "originalName": "Big cinematic impact.mp3",
        "max_dur": 3.0
    },
    # WHOOSH
    {
        "id": "whoosh-cinematic-fast",
        "mixkit_id": "1492",
        "category": "whoosh",
        "tags": ["whoosh", "cinematic", "fast", "transition", "swipe"],
        "originalName": "Cinematic whoosh fast transition.mp3",
        "max_dur": 1.5
    },
    {
        "id": "fast-sweep-transition",
        "mixkit_id": "166",
        "category": "whoosh",
        "tags": ["whoosh", "sweep", "transition", "quick", "clean"],
        "originalName": "Fast small sweep transition.mp3",
        "max_dur": 1.2
    },
    # UI
    {
        "id": "switch-click",
        "mixkit_id": "2582",
        "category": "ui",
        "tags": ["switch", "toggle", "click", "ui", "button"],
        "originalName": "Quick switch click.mp3",
        "max_dur": 0.8
    },
    {
        "id": "light-switch",
        "mixkit_id": "2585",
        "category": "ui",
        "tags": ["switch", "toggle", "tap", "light", "interface"],
        "originalName": "On or off light switch tap.mp3",
        "max_dur": 0.8
    },
    {
        "id": "tech-affirmation",
        "mixkit_id": "3116",
        "category": "ui",
        "tags": ["affirmation", "success", "tech", "chime", "verified"],
        "originalName": "Cybernetic technology affirmation.mp3",
        "max_dur": 1.5
    },
    # NOVELTY / VIRAL
    {
        "id": "achievement-bell",
        "mixkit_id": "600",
        "category": "novelty",
        "tags": ["bell", "achievement", "success", "ding", "win"],
        "originalName": "Achievement bell.mp3",
        "max_dur": 1.5
    },
    {
        "id": "vinyl-scratch",
        "mixkit_id": "702",
        "category": "novelty",
        "tags": ["vinyl", "scratch", "record", "stop", "meme"],
        "originalName": "Record player vinyl scratch.mp3",
        "max_dur": 1.2
    },
    {
        "id": "tape-rewind",
        "mixkit_id": "1092",
        "category": "novelty",
        "tags": ["tape", "rewind", "retro", "fast", "transition"],
        "originalName": "Fast tape rewind cinematic transition.mp3",
        "max_dur": 1.5
    }
]

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

def main():
    base_dir = Path("assets/sfx/library")
    temp_dir = Path("temp_sfx")
    temp_dir.mkdir(exist_ok=True)

    downloaded = []

    for item in SFX_DOWNLOADS:
        mid = item["mixkit_id"]
        cat = item["category"]
        sid = item["id"]
        cat_dir = base_dir / cat
        cat_dir.mkdir(parents=True, exist_ok=True)

        dest_file = cat_dir / f"{sid}.mp3"
        temp_file = temp_dir / f"{sid}_raw.mp3"

        url = f"https://assets.mixkit.co/active_storage/sfx/{mid}/{mid}-preview.mp3"
        print(f"Downloading [{sid}] from {url}...")

        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=20) as resp, open(temp_file, "wb") as f:
                f.write(resp.read())

            # Trim cleanly if max_dur is specified
            max_dur = item.get("max_dur")
            if max_dur:
                cmd = [
                    "ffmpeg", "-y", "-i", str(temp_file),
                    "-t", str(max_dur),
                    "-c:a", "libmp3lame", "-q:a", "2",
                    str(dest_file)
                ]
            else:
                cmd = [
                    "ffmpeg", "-y", "-i", str(temp_file),
                    "-c:a", "libmp3lame", "-q:a", "2",
                    str(dest_file)
                ]
            subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)

            size_bytes = dest_file.stat().st_size
            size_kb = round(size_bytes / 1024, 2)

            manifest_entry = {
                "id": sid,
                "path": str(dest_file).replace("\\", "/"),
                "category": cat,
                "tags": item["tags"],
                "originalName": item["originalName"],
                "sizeBytes": size_bytes,
                "sizeKb": size_kb
            }
            downloaded.append(manifest_entry)
            print(f"  -> Saved {dest_file} ({size_kb} KB)")

        except Exception as e:
            print(f"  Failed to process {sid}: {e}")

    with open("scripts/new_manifest_entries.json", "w", encoding="utf-8") as f:
        json.dump(downloaded, f, indent=2)

    print(f"\nSuccessfully downloaded and processed {len(downloaded)} SFX!")

if __name__ == "__main__":
    main()
