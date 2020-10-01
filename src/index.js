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

let getElementsArr = (str = '', length = 1) => {
    let codedLettersArr = []
    let letter = ''
    let counter = 0
    str.split('').forEach(element => {
          if (counter === (length - 1)) {
              letter += element
              codedLettersArr.push(letter)
              counter = 0
              letter = ''
          } else {
              letter += element
              counter ++
          }
    });
    return codedLettersArr
}
  
const decode = (expr) => {
      // write your solution here
      let finalStr = ''
      getElementsArr(expr, 10).forEach(element => {
        let morseElem = '';
  
        if (element === '**********') finalStr += ' '
        else {
          getElementsArr(element, 2).forEach(elem => {
            switch (elem) {
              case '00': break
              case '10': {
                morseElem += '.'
                break
              }
              case '11': {
                morseElem += '-'
                break
              }
            }
          })
          finalStr += MORSE_TABLE[morseElem]
        }
      });
      return finalStr;
}

module.exports = {
    decode
}