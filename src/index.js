function transliterate(text) {
    const words = text.split(' ');
    const result = [];

    for (const word of words) {
        const hunterianWord = _devanagariToHunterian(word);
        result.push(hunterianWord);
    }

    return result.join(' ');
}

function _devanagariToHunterian(text) {
    const devanagariMap = {
        'अ': 'a', 'आ': 'aa', 'इ': 'i', 'ई': 'ii', 'उ': 'u', 'ऊ': 'uu',
        'ऋ': 'ṛ', 'ॠ': 'ṝ', 'ऌ': 'ḷ', 'ॡ': 'ḹ', 'ए': 'e', 'ऐ': 'ai',
        'ओ': 'o', 'औ': 'au',
        'क': 'k', 'ख': 'kh', 'ग': 'g', 'घ': 'gh', 'ङ': 'ṅ',
        'च': 'ch', 'छ': 'chh', 'ज': 'j', 'झ': 'jh', 'ञ': 'ñ',
        'ट': 'ṭ', 'ठ': 'ṭh', 'ड': 'ḍ', 'ढ': 'ḍh', 'ण': 'ṇ',
        'त': 't', 'थ': 'th', 'द': 'd', 'ध': 'dh', 'न': 'n',
        'प': 'p', 'फ': 'ph', 'ब': 'b', 'भ': 'bh', 'म': 'm',
        'य': 'y', 'र': 'r', 'ल': 'l', 'व': 'v',
        'श': 'sh', 'ष': 'sh', 'स': 's', 'ह': 'h',
        'क्ष': 'ksh', 'त्र': 'tr', 'ज्ञ': 'jñ',
        'ा': 'aa', 'ि': 'i', 'ी': 'ii', 'ु': 'u', 'ू': 'uu',
        'ृ': 'ṛ', 'ॄ': 'ṝ', 'ॢ': 'ḷ', 'ॣ': 'ḹ',
        'े': 'e', 'ै': 'ai', 'ो': 'o', 'ौ': 'au',
        'ं': 'n', 'ः': 'ḥ', 'ँ': 'n', '्': ''
    };

    let result = '';
    let i = 0;

    while (i < text.length) {
        const currentChar = text[i];
        let nextChar = text[i + 1] || '';

        if (i + 1 < text.length && devanagariMap[currentChar + nextChar]) {
            result += devanagariMap[currentChar + nextChar];
            i += 2;
            continue;
        }
        
        if(currentChar === '्') {
            i++;
            continue;
        }

        if (devanagariMap[currentChar]) {
            if (isConsonant(currentChar) && !isVowelSign(nextChar) && nextChar !== '्') {
                if(nextChar != '' && nextChar != '.' && nextChar != ',' && nextChar != '?') {
                    result += devanagariMap[currentChar] + 'a';
                } else {
                    if(currentChar != "य") {
                        result += devanagariMap[currentChar];
                    } else {
                        result += devanagariMap[currentChar] + 'a';
                    }
                }
            } else {
                result += devanagariMap[currentChar];
            }
        } else {
            result += currentChar;
        }
        i++;
    }

    function isConsonant(char) {
        const consonants = [
            'क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ',
            'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न',
            'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व',
            'श', 'ष', 'स', 'ह',
        ];
        return consonants.includes(char);
    }

    function isVowelSign(char) {
        const vowelSigns = ['ा', 'ि', 'ी', 'ु', 'ू', 'ृ', 'ॄ', 'ॢ', 'ॣ', 'े', 'ै', 'ो', 'ौ'];
        return vowelSigns.includes(char);
    }

    return result;
}

module.exports = { transliterate };