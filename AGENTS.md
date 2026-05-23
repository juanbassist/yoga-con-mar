Usar como base la skill: .agents\skills\astro-framework

## Versioning & Changelog
- **Automatic Increment**: Every time a functional change or fix is applied, increment the `version` in the `package.json` file by +1 (e.g., `1.0.0` -> `1.0.1`).
- **Changelog Maintenance**: Immediately update `CHANGELOG.md` following each version bump.
- **Lockfile Sync**: After updating `package.json`, run `npm install` so `package-lock.json` also reflects the new version.
- **Entry Format**: Use a reverse-chronological summary (newest first).
    - **Example**:
        - `1.0.1`
        - `- descriptive general changes 1`
        - `- descriptive general changes 2`
        - `1.0.0`
        - `- init proj`
- **Sync**: Ensure the version number in the `package.json` and the latest entry in `CHANGELOG.md` always match.

## Handoff Policy
- **Keep `HANDOFF.md` Current**: At the end of every meaningful AI iteration, update `HANDOFF.md`.
- **Purpose**: Use `HANDOFF.md` as the current operational handoff for what was done, what is pending, blockers, and the next recommended step.
- **Scope**: Record only current actionable state; do not duplicate full changelog, architecture, or README content.
- **Minimum Sections**:
  - `Estado actual`
  - `Pendiente`
  - `Bloqueos / Riesgos`
  - `Siguiente paso sugerido`
- **Overwrite Stale State**: Prefer replacing outdated handoff notes instead of appending unbounded history.
- **AI Continuity**: When continuing work in a later session, consult `HANDOFF.md` first and refresh it again before ending the iteration.