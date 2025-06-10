# hindi-transliterate

This JavaScript module provides a function to transliterate text from Devanagari script to the Hunterian system, commonly used for Romanizing Indian languages like Hindi and Sanskrit. It supports both casual and Sanskrit-specific transliteration modes.

## Features

- Converts Devanagari text to Hunterian Romanization.
- Supports two modes:
    + Casual Mode (default): Simplified transliteration for general use ("आ" → "aa").
    + Sanskrit Mode: Precise transliteration with diacritics for Sanskrit ("आ" → "ā").

- Handles consonants, vowels, vowel signs, and special characters (e.g., anusvara, visarga).

- Automatically adds an implicit "a" after consonants when needed, based on mode and context.

- Preserves non-Devanagari characters (e.g., punctuation, spaces).

## Installation

```bash
npm i @indic-tools/hindi-transliterate
```

## Sample Usage

```javascript
const { transliterate } = require(
    '@indic-tools/hindi-transliterate'
);

var text = "नमस्ते";
var result = transliterate(text, sanskritMode = false);
console.log(result);

// namaste
```
