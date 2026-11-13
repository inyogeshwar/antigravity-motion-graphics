# Topic-to-Reel Production Contract

## 1. Input contract

Required: `topic`, a non-empty plain-language topic.

Optional project defaults include creator brand/handle, audience, language, platform, target duration, voice provider, visual preset, CTA and output directory.

Do not turn optional settings into a long onboarding questionnaire. Use configuration defaults and infer the rest.

## 2. Research contract

For factual or time-sensitive topics:
- Search authoritative primary sources where possible.
- Record source URL, title, publisher, retrieval date and supported claims.
- Prefer official product documentation, standards bodies, academic sources and direct announcements.
- Flag disputed, uncertain or rapidly changing claims.
- Never fabricate references or imply research was performed when it was not.

For purely creative topics, research can be skipped when it adds no value.

## 3. Script contract

Deliver three hook candidates, selected hook and rationale, complete narration, scene-aligned narration, on-screen text fragments, CTA, estimated duration and speaking rate.

The selected script must sound natural when spoken aloud. Avoid long paragraphs on screen. Preserve factual qualifications.

## 4. Storyboard contract

Each scene record includes stable scene ID/order, start/end time and frame, narration segment, on-screen text and emphasis words, visual concept/composition, asset references, entrance/exit animation, transition, music/SFX cues and review notes.

Frame numbers must be derived from configured FPS. Scene intervals must be contiguous unless an intentional gap is specified.

## 5. Asset contract

Every asset includes stable ID, filename/media type, intended scenes, generation/source description, provenance URL or generation record, license/rights status, dimensions/transparency and status (planned, generating, ready, blocked or rejected).

Do not use assets with unknown rights status in public/commercial output unless the user confirms authorization.

## 6. Audio contract

Track voice-over, music and SFX separately. If a voice file exists, inspect its actual duration and synchronize scenes against it. If no TTS provider is configured, return the script and mark audio generation blocked rather than creating a fake preview.

Music and SFX must be appropriately licensed. Keep narration intelligible and prevent clipping.

## 7. Motion contract

Use the existing MotionOS render contract and deterministic time-based animation. Reuse existing functions/APIs only after inspecting source. Keep animation logic modular and scene data separate.

Prioritize kinetic typography, word emphasis, cutout entrances, scale/position transitions, paper/collage reveals, parallax, masks, camera movement and beat-aware accents when beat analysis is available.

## 8. Preview contract

Before approval, produce a review package containing storyboard/contact sheet, scene stills, low-resolution draft when supported, voice/audio preview when available, asset gallery and QA report.

A static dashboard mockup is not a substitute for an actual generated video preview. Label unavailable outputs clearly.

## 9. Approval state machine

```text
queued
  -> researching
  -> planning
  -> generating_assets
  -> generating_audio
  -> rendering_preview
  -> awaiting_review
       -> revision_requested -> planning/rendering_preview
       -> approved -> rendering_final -> completed
```

Any step may transition to blocked or failed with a reason.

Only explicit user approval can move awaiting_review to approved. Do not infer approval from silence, a topic message or a request to inspect the preview.

## 10. Final export contract

After approval, render final MP4 using supported project options; verify actual resolution, aspect ratio, FPS, duration, codecs and audio streams; inspect frames and synchronization; check clipping, safe margins, missing assets and source coverage; save editable source and final QA report.

Default social export target: 1080x1920, 30 fps, H.264 video, AAC audio, yuv420p. Confirm renderer/encoder support before using these values.
