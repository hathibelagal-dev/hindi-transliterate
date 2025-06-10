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

## Sample Outputs

```
---
Devanagari Sanskrit: नित्यं शान्तिमयी च रम्या, तया जीवनं समृद्धं भवति 
Romanized: nityaṁ śāntimayī cha ramyā, tayā jīvanaṁ samṛddhaṁ bhavati 
---
Devanagari: काव्य की कुछ विशेषताएं 
Romanized: kaavya kii kuchh visheshataaen 
---
Devanagari Sanskrit: हृदये तस्याः संनादति सौम्यं, बुद्ध्या विश्वं प्रकाशति 
Romanized: hṛdaye tasyāḥ saṁnādati saumyaṁ, buddhyā viśvaṁ prakāśati 
---
Devanagari: आप का नाम क्या है 
Romanized: aap kaa naam kyaa hai 
```
