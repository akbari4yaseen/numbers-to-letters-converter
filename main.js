const number = document.getElementById('number')
const words = document.getElementById('word')
const hypthen = '-'
const conjunction = ' and '
const seprator = ', '
const negative = 'negative '
const decimal = ' point '
const overflow = 'Overflow!<br /> Only accepts numbers between 0 - 1,000,000,000,000'
const dictionary = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    1000: 'thousand',
    1000000: 'million',
    1000000000: 'billion',
    1000000000000: 'trillion'
}

function num_to_words(n){
    if(n < 0) return negative + num_to_words(Math.abs(n))
    if(n > 1000000000000) return overflow
    var fraction = null
    var number = n.toString()
    if(n.toString().indexOf('.') !== -1){
        const [number, fraction] = n.toString().split('.')
        if(fraction !== null) return num_to_words(number) + decimal + num_to_words(fraction)
    }
    if(n < 21) return dictionary[n]
    if(n < 100) {
        let tens = parseInt(n / 10) * 10
        let units = n % 10
        let string = dictionary[tens]

        if(units) return string + hypthen + dictionary[units]
        else return string
    }
    if(n < 1000) {
        let hundreds = parseInt(n / 100)
        let remainders = n % 100
        let string = dictionary[hundreds] + ' ' + dictionary[100]

        if(remainders) return string + conjunction + num_to_words(remainders)
        else return string
    }
    if(n < 1000000) {
        let thousands = parseInt(n / 1000) 
        let remainders = n % 1000
        let string = num_to_words(thousands) + ' ' + dictionary[1000]

        if(remainders) return string + seprator + num_to_words(remainders)
        else return string
    }
    if(n < 1000000000) {
        let millions = parseInt(n / 1000000) 
        let remainders = n % 1000000
        let string = num_to_words(millions) + ' ' + dictionary[1000000]

        if(remainders) return string + seprator + num_to_words(remainders)
        else return string
    }
    if(n < 1000000000000) {
        let billions = parseInt(n / 1000000000) 
        let remainders = n % 1000000000
        let string = num_to_words(billions) + ' ' + dictionary[1000000000]
        if(remainders) return string + seprator + num_to_words(remainders)
        else return string
    }
    if (n == 1000000000000) return 'one ' + dictionary[1000000000000]
    
}

function convert(){
    if(number.value) 
        words.innerHTML = num_to_words(number.value)
    else words.innerHTML = 'Words'
}
number.addEventListener('keyup', function(){
    convert()
})

number.addEventListener('change', function(){
    convert()
})

