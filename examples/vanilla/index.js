const { transliterate } = require('../../src/index');

const texts = [
  "नमस्ते",
  "भारत",
  "सूर्य"
];

console.log("--- Vanilla JS Transliteration Example ---");
texts.forEach(text => {
  const result = transliterate(text);
  console.log(`Devanagari: ${text} => Romanized: ${result}`);
});

console.log("\n--- Sanskrit Mode Example ---");
const sanskritText = "नित्यं शान्तिमयी च रम्या";
console.log(`Devanagari: ${sanskritText} => Romanized: ${transliterate(sanskritText, true)}`);
