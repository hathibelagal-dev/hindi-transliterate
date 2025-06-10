const { transliterate } = require('../src/index.js');

const testsCasual = [
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

const testsSanskrit = [
    "विद्या विनति सर्वं विश्वे, सूर्यस्य तेजसि संनादति",
    "नित्यं शान्तिमयी च रम्या, तया जीवनं समृद्धं भवति",
    "हृदये तस्याः संनादति सौम्यं, बुद्ध्या विश्वं प्रकाशति"
];

testsCasual.forEach(test => {
    console.log(`Devanagari: ${test} \nRomanized: ${transliterate(test)} \n---`);
});

testsSanskrit.forEach(test => {
    console.log(`Devanagari Sanskrit: ${test} \nRomanized: ${transliterate(test, true)} \n---`);
});
