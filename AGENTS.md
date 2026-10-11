# AGENTS.md

## Project Overview
- **Domain**: Human-Computer Interaction (IHC) postgraduate redesign project for **CONEST** (academic management system for Facultad de Ciencias, Universidad Central de Venezuela - UCV).
- **Current State**: Static web frontend (Vanilla HTML/CSS/JS). No bundler, package manager, or compile step is currently configured.

## Project Structure
- `index.html`: Main entrypoint for the redesigned interface.
- `style.css`: Primary stylesheet for the redesign.
- `script.js`: Client-side logic for the redesign.
- `conest original/`: Reference snapshot of the legacy CONEST 3.0.0 portal (`CONEST - Sistema de gestión académica - Inicio.html`). Do **not** modify or overwrite files in this directory; use them for feature requirements, structure comparison, and image assets (`logo_conest-*.png`, `logo_ucv-*.png`, `logo_ciencias-*.png`) unless otherwise indicated by the user.

## Dev & Preview Commands
- Serve locally (no build required):
  - Browser direct: Open `index.html` directly in the browser.

## Environment & Tooling Gotchas
- **OS / Shell**: Windows PowerShell 5.1.
  - Do not use `&&` to chain commands in PowerShell; use `; if ($?) { ... }` or separate invocations.
  - Quote file paths containing spaces (e.g., `"conest original"`).
- **Working Directory**: OpenCode sessions may launch in subdirectories (such as `conest original/`). Always ensure root-relative path resolution against the repository root.
- **Git**: Branch is `master` with no initial commit yet. Inspect `git status` before committing changes.
