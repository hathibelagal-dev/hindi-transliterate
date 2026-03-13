// Mocking React to test the hook and component in Node environment
const mockReact = {
  useMemo: (fn, deps) => fn(),
  createElement: (type, props, ...children) => ({ type, props, children })
};

// Replace require('react') with mock in the test
const { useTransliterate, Transliterate } = require('../src/react');

// Monkey patch React if it's already required in src/react.js
const React = require('react');
Object.assign(React, mockReact);

console.log("Testing useTransliterate hook (mocked):");
const text = "नमस्ते";
const result = useTransliterate(text);
console.log(`Devanagari: ${text}, Transliterated: ${result}`);
if (result === "namaste") {
    console.log("✅ Hook test passed!");
} else {
    console.log("❌ Hook test failed!");
}

console.log("\nTesting Transliterate component (mocked):");
const element = Transliterate({ text: "भारत", as: "div", className: "india" });
console.log("Rendered Element:", JSON.stringify(element, null, 2));

if (element.type === "div" && element.children[0] === "bhaarat") {
    console.log("✅ Component test passed!");
} else {
    console.log("❌ Component test failed!");
}
