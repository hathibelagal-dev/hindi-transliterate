# GEMINI.md - Project Context

## Project Overview

**@indic-tools/hindi-transliterate** is a JavaScript library designed to transliterate text from the Devanagari script to the Hunterian system (Romanization). It is particularly useful for Hindi and Sanskrit, supporting both "Casual" (standard) and "Sanskrit" (diacritic-rich) modes.

- **Main Technologies:** JavaScript (Node.js/CommonJS), React (Hook/Component), Browser (Umd-style global).
- **Core Logic:** Located in `src/index.js`, using character mapping and context-aware vowel insertion.
- **React Support:** Located in `src/react.js`, providing `useTransliterate` and `Transliterate` components.
- **Exports:**
    - `.` (default): Points to `src/index.js`.
    - `./react`: Points to `src/react.js`.

## Building and Running

### Testing
The project uses a custom test runner in the `tests/` directory.

- **Run all tests:**
  ```bash
  npm test
  ```
- **Run core tests only:**
  ```bash
  node tests/test.js
  ```
- **Run React tests only:**
  ```bash
  node tests/react-test.js
  ```

### Browser Usage
The core library in `src/index.js` is compatible with browsers. It can be included via a `<script>` tag, and it will expose a global `transliterate` function.

## Directory Structure

- `src/`: Core logic and React-specific implementations.
- `tests/`: Test files for the library and its React extensions.
- `examples/`: Usage demonstrations:
    - `vanilla/`: Standard JS and HTML examples.
    - `react-example/`: React-specific usage with a sample `App.js` and standalone HTML.
- `dist/`: Pre-built files (e.g., `transliterate.min.js`).

## Development Conventions

- **Module System:** Uses CommonJS (`require`/`module.exports`).
- **Browser Compatibility:** `src/index.js` includes checks to export to `window` if a module system is not present.
- **React Integration:** React is a `peerDependency`. The React-specific code is separated into its own module (`src/react.js`) to keep the core library lightweight.
- **Naming Conventions:** Internal helper functions in `src/index.js` are prefixed with an underscore (e.g., `_devanagariToHunterian`).
- **Testing:** New features must be verified with a corresponding test in the `tests/` folder. Mocking (as seen in `tests/react-test.js`) is used where environment-specific dependencies (like React) are needed but not fully configured for the test environment.
