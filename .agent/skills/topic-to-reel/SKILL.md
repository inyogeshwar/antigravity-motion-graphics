---
name: topic-to-reel
description: Turn one topic into a researched, scripted, storyboarded and previewed short-form motion-graphics video. Stop at a review gate before final export.
---

# Topic-to-Reel Production Skill

## Mission
The user provides only a topic. Prepare a complete short-form video project using the existing MotionOS engine and verified repository capabilities. The first deliverable is a reviewable draft package, not an automatically published video.

## Workflow
1. Inspect repository instructions, render contract, existing skills, templates, CLI, renderer, audio utilities and tests before editing or rendering.
2. Accept one required input: topic. Infer defaults from project configuration. Ask only when missing information blocks safe or correct production.
3. Research factual topics when sources are available. Record source URL, title, publisher, retrieval date and supported claims. Never fabricate sources, statistics or quotes.
4. Produce a creative brief and complete narration script. Preserve factual nuance and label uncertain claims.
5. Build a frame-accurate storyboard. Each scene includes narration, on-screen copy, duration, visual plan, assets, animation, transition and audio cues.
6. Create an asset manifest before sourcing or generating assets. Track provenance, rights/license, status and scene usage.
7. Generate narration only through a configured provider. If unavailable, prepare narration text and mark audio generation blocked; do not fabricate audio.
8. Implement scenes using the existing deterministic MotionOS renderer and verified APIs. Reuse render.mjs, lib/motion.js, sfx.mjs, beats.py, voice clients and VEOS only after inspecting their contracts.
9. Generate scene stills/contact sheet and a low-resolution draft when supported. Run visual and media QA on actual outputs.
10. Present the complete review package and STOP. Wait for explicit user approval before final-resolution rendering or publishing.
11. Apply revisions while preserving approved sections; rerun affected checks.
12. After approval, render final MP4, verify it, and provide sources and reports.

## Defaults
- Platform: Instagram Reels / YouTube Shorts
- Canvas: 1080 × 1920 (9:16)
- Frame rate: 30 fps
- Container: MP4
- Video codec: H.264
- Audio: AAC when muxing
- Language: infer from topic and creator settings; Hindi + English mix is a suitable India-focused default
- Visual direction: original editorial collage + kinetic typography, adapted to topic

These are defaults, not guarantees. Confirm renderer support before passing CLI options.

## Creative direction
Use a strong hook, one core idea per scene, clear hierarchy, readable text, purposeful movement and visual variety. Prefer original illustrations, paper textures, cutouts, icons and designed UI mockups where relevant. Avoid generic AI-slop layouts, excessive gradients, random motion and decorative elements without explanatory purpose.

Reference material may inform broad visual language only. Do not reproduce another creator's exact composition, mascot, logo, artwork, script or proprietary assets.

## Rights and research
- Prefer primary sources and official documentation for technical claims.
- Keep a source ledger.
- Label uncertain and time-sensitive claims.
- Use user-provided, generated, public-domain, permissively licensed or otherwise authorized assets.
- Record asset provenance and license.
- Do not bundle font binaries unless redistribution rights are verified.
- Do not copy proprietary system fonts or emoji fonts into the repository without permission.

## Review package
Before approval, show:
- Project overview and inferred settings
- Research summary and source ledger
- Script, hook alternatives and CTA
- Scene-by-scene storyboard and timings
- Asset gallery and manifest with provenance/license
- Voice-over status and preview if actually generated
- Music/SFX plan and preview if actually generated
- Contact sheet and low-resolution draft if rendering succeeded
- QA report with blockers and unresolved items

Mark each item ready, needs review, blocked or not generated. Never present a mockup as an actual generated preview.

## Approval gate
Persist an explicit state such as awaiting_review. No final-resolution render, publication, upload or destructive operation is allowed until explicit user approval. Silence or a vague acknowledgement is not approval.

## Project state
Persist topic, settings, research, script, storyboard, asset manifest, audio plan, preview paths, QA findings, revisions and approval state in structured files. Never overwrite an existing project; use a unique project directory or ask first.

## QA
Verify actual dimensions, frame rate, duration, codecs, audio sync, missing media, clipping, safe margins, readability, scene continuity and source coverage. Inspect actual preview/final frames. Report failures honestly.

## Failure handling
If a provider, renderer, network, font or asset is unavailable, record the blocker and continue independent work. Never claim rendering, synchronization, verification or approval unless it actually completed.
