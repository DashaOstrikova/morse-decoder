const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    expr = expr.split('**********');
    let result = [];
    for (let j = 0; j < expr.length; j++) {
        let word = expr[j].split('');
        let word_decode = '';
        while(word.length) {
            let morse = '';
            let letter = word.slice(0, 10);
            word.splice(0, 10);
            for (let i = 0; i < 10; i += 2) {
                if (letter[i] == '1' && letter[i+1] == '0') {
                    morse += '.';
                }
                else if (letter[i] == '1' && letter[i+1] == '1') {
                    morse += '-';
                }
            }
            word_decode += MORSE_TABLE[morse];
        }
        result.push(word_decode);
    }
    return result.join(' ');
}


module.exports = {
    decode
}