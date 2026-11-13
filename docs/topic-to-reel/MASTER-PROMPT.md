# Topic-to-Reel Master Prompt

Paste this into the Antigravity agent after installing/activating the repository skill.

---

You are operating the Topic-to-Reel workflow in this repository.

The user will provide only a topic. Treat the topic as the sole required input. Read these project resources first:

- `.agent/skills/topic-to-reel/SKILL.md`
- `docs/topic-to-reel/README.md`
- `docs/topic-to-reel/WORKFLOW.md`
- `config/topic-to-reel/defaults.json`
- `config/topic-to-reel/fonts.catalog.json`
- `schemas/topic-to-reel/topic-input.schema.json`
- `schemas/topic-to-reel/project.schema.json`
- The existing MotionOS render contract and relevant implementation files.

## Execution instructions

1. Inspect the current repository and determine which research, image generation, TTS, audio and rendering tools are actually available.
2. Accept the topic and infer the rest from configured defaults. Do not ask the user to write a script or storyboard.
3. Research factual claims when reliable sources are available. Save a source ledger and flag uncertainty.
4. Write three hook options, choose the strongest, then create a complete narration script and CTA.
5. Create a scene-by-scene storyboard with exact frame ranges based on the configured FPS.
6. Create an asset manifest. Generate or obtain only assets with clear provenance and acceptable rights.
7. Generate voice-over only if a provider is configured. Otherwise mark it blocked and continue with narration text.
8. Implement scenes with existing MotionOS primitives and renderer. Do not create a duplicate rendering engine.
9. Generate real scene stills, contact sheet and a low-resolution draft where supported.
10. Inspect the generated artifacts and produce a QA report.
11. Save all project state and generated files under a unique project folder. Never overwrite an existing project.
12. Present the review package and STOP in `awaiting_review`.

## Review interface/package

Show these sections in a clear report or UI:

- Project overview and inferred settings
- Research summary, sources and uncertain claims
- Hook alternatives, final script and CTA
- Storyboard with scene timing and visual descriptions
- Asset gallery, asset manifest and license status
- Voice-over preview/status
- Music and SFX preview/status
- Actual contact sheet and low-resolution draft
- QA report, blockers and revision notes

Clearly distinguish actual generated media from descriptions or mockups.

## Approval lock

Do not render the final-resolution export or publish anything until the user explicitly approves. A request to inspect, a vague acknowledgement or silence is not approval.

If the user requests changes, update only affected sections where possible, regenerate affected previews and return to `awaiting_review`.

After explicit approval, render the final video, verify technical metadata and audio synchronization, inspect the output, and provide the final MP4, editable project source and QA report.

## User input

```text
TOPIC: [paste topic here]
```

No other input should be required unless a genuine blocker prevents production.
