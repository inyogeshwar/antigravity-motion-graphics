# Topic-to-Reel: One-Topic Automated Production

Topic-to-Reel turns one topic into a fully prepared short-form video project. It uses MotionOS as the rendering foundation and adds a structured creative and review process.

## User experience

The only required user input is a topic:

```text
AI coding agents
```

The system infers audience, language, duration, platform, tone and visual direction from project defaults. It prepares research, script, storyboard, assets, audio plan, preview and QA report.

**Important:** the first deliverable is a review package. Final-resolution export and publishing remain locked until the user explicitly approves.

## Production stages

1. Topic intake and project setup
2. Research and claim verification
3. Creative brief and script
4. Storyboard and frame timing
5. Asset manifest and asset creation
6. Voice-over and audio plan
7. Motion graphics implementation
8. Contact sheet and low-resolution draft
9. Review dashboard/package
10. User revisions and approval
11. Final render and technical QA

See [WORKFLOW.md](WORKFLOW.md) for the full contract.

## Existing MotionOS integration

Reuse existing components after checking their actual interfaces:

- `render.mjs` — deterministic frame renderer
- `lib/motion.js` — motion primitives
- `sfx.mjs` — procedural sound effects
- `beats.py` — beat/onset analysis
- `cartesia.mjs`, `heygen.mjs`, and/or `voice.mjs` — configured voice workflows
- `bin/cli.js` and existing VEOS commands — CLI integration
- Existing compositions and templates — starting points, not mandatory designs

Do not create a parallel renderer or assume provider credentials are configured.

## Project artifact layout

Each generated project should have its own directory:

```text
projects/<project-id>/
├── project.json
├── research/
│   ├── research.md
│   └── sources.json
├── script/
│   ├── script.md
│   └── narration.txt
├── storyboard/
│   └── scenes.json
├── assets/
│   └── manifest.json
├── audio/
│   └── audio-plan.json
├── preview/
│   ├── contact-sheet.png
│   └── draft.mp4
├── render/
├── reports/
│   └── qa-report.md
└── revisions/
```

Generated media and project outputs should normally remain ignored by Git unless the user explicitly wants selected deliverables committed. Never commit API keys, private recordings or unlicensed media.

## Status model

Use explicit states: queued, researching, planning, generating_assets, generating_audio, rendering_preview, awaiting_review, revision_requested, approved, rendering_final, completed, blocked and failed.

A preview being ready does not mean the final export is approved.

## Review and approval

The review package must show actual generated artifacts and clearly identify missing or blocked items. The user can approve the full project or request changes to script, scenes, assets, narration, music or timing.

Only an explicit approval action may transition the project to approved. Final rendering and publishing are forbidden before that transition.

## Font policy

Use the catalog in [fonts.catalog.json](../../config/topic-to-reel/fonts.catalog.json). Prefer font families with compatible, verified licenses. The catalog contains metadata and loading recommendations, not font binaries. Existing files in `assets/fonts/` must be checked individually before redistribution or bundling.
