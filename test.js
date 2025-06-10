const { transliterate } = require('./src/index.js');

const tests = [
    "नमस्ते",
    "क्षत्रिय",
    "भारत",
    "सूर्य",
    "हम",
    "बीज",
    "रामः",
    "आप का नाम क्या है",
    "हम सभी इसे खा सकते हैं",
    "काव्य की कुछ विशेषताएं",
    "कविताएं अक्सर भावनाओं जैसे प्रेम, दुख, खुशी और निराशा को व्यक्त करती हैं"
];

tests.forEach(test => {
    console.log(`Devanagari: ${test} \nRoman: ${transliterate(test)} \n---`);
});